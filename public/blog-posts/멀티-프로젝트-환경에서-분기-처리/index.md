---
title: 멀티 프로젝트 환경에서 UI 분기 처리, 어떻게 할 것인가
date: 2025-10-25
lastmod: 2025-10-25
excerpt: 페이지 전체가 바뀌는 경우도 있고, 컴포넌트 일부만 바뀌는 경우도 있고, 데이터 페칭만 달라지는 경우도 있다. 어떤 기준으로 프로젝트를 구분해서 분기 처리를 해야 할까.
tags:
  - 생각
  - front-end
draft: false
thumbnail: image.png
---
## 멀티 프로젝트 환경에서 UI 분기 처리...
---
단일 프로젝트만 지원하던 서비스에 멀티 프로젝트 기능을 추가하게 되었다.
헤더에 프로젝트 선택 드롭다운을 만들어두긴 했는데, 이제 진짜 문제가 시작되었다.

페이지마다 프로젝트별로 다른 UI를 보여줘야 하는 상황이 온 것이다.

심지어 페이지 전체가 바뀌는 경우도 있고, 컴포넌트 일부만 바뀌는 경우도 있고, 데이터 페칭만 달라지는 경우도 있다. 어떤 기준으로 프로젝트를 구분해서 분기 처리를 해야 할까.

## 고민했던 세 가지 방식

---

처음에는 Zustand로 전역 상태를 관리하는 것까지는 당연해 보였다. 문제는 그 상태를 어떻게 UI 분기에 활용할 것인가였다.

##### URL Path로 분기

---

다만 이 방식은 초반부터 이렇게 설계했어야 했다. 이미 단일 프로젝트 기준으로 만들어진 라우트 구조가 있는 상황에서 전체를 뜯어고치는 건 현실적이지 않았다. 관리 복잡도도 상당히 증가한다.

❌

##### 전역 상태 관리 함수를 통해 분기

---

Zustand 스토어에서 현재 선택된 프로젝트 ID를 가져와서 컴포넌트마다 분기 처리하는 방식이다.

```
const { currentProjectId } = useProjectStore()

if (currentProjectId === 'abc123') {
  // 프로젝트 A용 데이터 페칭
} else if (currentProjectId === 'def456') {
  // 프로젝트 B용 데이터 페칭
}
```

이 방식의 문제는 데이터 페칭과 HTTP 통신 로직에서 부수적인 코드가 계속 늘어난다는 점이다. 서버 사이드 렌더링을 고려하면 더 복잡해진다. 클라이언트 상태와 서버 상태의 불일치를 어떻게 처리할 것인가. 여러 사이드 이펙트를 야기할 가능성이 높다.

❌
##### URL 쿼리 스트링로 분기
---
`/dashboard?project-id=abc123` 형태로 쿼리 파라미터를 활용하는 방식이다.

이 방식을 선택하면 일부 SPA 동작은 포기해야 한다. 페이지 이동 시마다 쿼리 파라미터를 유지해야 하니까 완전한 클라이언트 사이드 네비게이션은 어렵다.

하지만 초기에 이런 분기 구조를 고려하지 않고 만든 프로젝트에 갑자기 멀티 프로젝트 기능이 추가되는 상황이라면, 이 방식이 가장 안정적으로 적용 가능하다는 판단이 들었다.

⭕️
## 쿼리 파라미터 + 쿠키 + 미들웨어 조합
---
쿼리 파라미터 방식을 선택했지만, 그냥 쿼리만 쓰면 사용자 경험이 좋지 않다. 페이지 이동할 때마다 쿼리가 사라지거나, 수동으로 계속 붙여줘야 한다면 문제가 생긴다.

그래서 쿠키와 미들웨어를 조합했다.

로직은 이렇게 설계했다:

1. 쿼리에 project-id가 있으면 쿠키에 저장한다
2. 쿼리에 없지만 쿠키에 저장된 값이 있으면 URL에 추가해서 리다이렉트한다
3. 쿼리에도 없고 쿠키에도 없다면 사용자의 프로젝트 리스트와 기본값을 데이터 페칭으로 가져온다

이렇게 하면 사용자가 한 번 프로젝트를 선택하면, 그 이후부터는 페이지를 이동해도 선택한 프로젝트가 유지된다. 미들웨어에서 쿠키를 확인하고 필요하면 자동으로 쿼리 파라미터를 붙여주기 때문이다.

##### 미들웨어 구현
---
Next.js의 미들웨어에서 모든 요청을 가로채서 쿼리 파라미터와 쿠키를 관리한다.

```
export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "ko";
  const isAuthenticated = request.cookies.get("ATAD_ACCESS_TOKEN");
  const { pathname, searchParams } = request.nextUrl;

  // 로그인 리다이렉트 처리
  if (isAuthenticated && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const userLang = acceptLanguage.split(",")[0];

  // 프로젝트 ID 쿼리 스트링 유지 로직
  const projectIdFromQuery = searchParams.get("project-id");
  const projectIdFromCookie = request.cookies.get("project-id")?.value;

  let response = NextResponse.next();

  // 1. 쿼리에 project-id가 있으면 쿠키에 저장
  if (projectIdFromQuery) {
    response.cookies.set("project-id", projectIdFromQuery, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
  }
  // 2. 쿼리에 없지만 쿠키에 있으면 URL에 추가해서 리다이렉트
  else if (projectIdFromCookie && !searchParams.has("project-id")) {
    const url = request.nextUrl.clone();
    url.searchParams.set("project-id", projectIdFromCookie);
    response = NextResponse.redirect(url);
  }
  // 3. 쿼리에도 없고 쿠키에도 없다면 추후 데이터 페칭으로 처리
  // 사용자의 프로젝트 리스트와 기본 선택값을 가져올 예정
  // 필요시 여기서 기본값으로 리다이렉트 처리도 가능
  else if (!projectIdFromQuery && !projectIdFromCookie) {
    // 현재는 데이터 페칭으로 처리하도록 통과
    // const url = request.nextUrl.clone();
    // url.searchParams.set("project-id", "default-project");
    // response = NextResponse.redirect(url);
  }

  response.headers.set("x-user-lang", userLang);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
```

미들웨어에서 핵심은 세 가지 케이스를 순차적으로 처리한다는 점이다.

쿼리 파라미터에 project-id가 있으면 쿠키에 저장해둔다. 7일 동안 유지되도록 설정했다. 이렇게 하면 사용자가 브라우저를 닫았다가 다시 열어도 마지막으로 선택한 프로젝트가 기억된다.

쿼리에는 없지만 쿠키에 값이 있다면, URL에 쿼리를 추가해서 리다이렉트한다. 사용자가 `/dashboard`로 접속해도 자동으로 `/dashboard?project-id=abc123`으로 리다이렉트되는 것이다.

쿼리에도 없고 쿠키에도 없다면, 일단 그대로 통과시킨다. 이 경우는 첫 방문자이거나 쿠키가 만료된 상황이니, 클라이언트에서 데이터 페칭으로 사용자의 프로젝트 리스트를 가져와서 기본 프로젝트로 설정하면 된다.

##### 컴포넌트에서 프로젝트 ID 가져오기
---
클라이언트 컴포넌트에서 현재 선택된 프로젝트 ID를 가져오는 건 간단하다.

```
const searchParams = useSearchParams();
const projectId = searchParams.get("project-id") as ProjectType;

console.log("projectId", projectId); // abc123, def456, ghi789 등
```

쿼리 파라미터가 URL에 항상 존재하기 때문에, `useSearchParams`로 바로 읽어올 수 있다. 이 값을 기준으로 UI를 분기하거나 API 요청을 보내면 된다.

서버 컴포넌트에서도 마찬가지다. Next.js의 `searchParams` props로 동일하게 접근할 수 있다.

```
export default function Dashboard({
  searchParams
}: {
  searchParams: { "project-id": string }
}) {
  const projectId = searchParams["project-id"];

  // 프로젝트별 데이터 페칭
  const data = await fetchProjectData(projectId);

  return <div>{/* UI 렌더링 */}</div>;
}
```

전역 상태를 거치지 않고 URL에서 직접 값을 읽기 때문에, 서버와 클라이언트 간 상태 불일치 문제가 없다. 어디서든 같은 방식으로 프로젝트 ID를 참조할 수 있다.

## 실제 동작 흐름

사용자가 처음 서비스에 접속한다고 가정해보자.

1. `/dashboard`로 접속
2. 미들웨어에서 쿼리와 쿠키 모두 없음을 확인
3. 그대로 통과시켜서 페이지 렌더링
4. 클라이언트에서 사용자의 프로젝트 리스트를 데이터 페칭
5. 기본 프로젝트를 선택하고 `/dashboard?project-id=abc123`으로 리다이렉트
6. 미들웨어에서 쿼리의 project-id를 쿠키에 저장

이제 사용자가 다른 페이지로 이동한다.

1. `/settings`로 이동
2. 미들웨어에서 쿼리에는 없지만 쿠키에 `abc123`이 있음을 확인
3. `/settings?project-id=abc123`으로 리다이렉트
4. 페이지에서 쿼리 파라미터로 프로젝트 ID를 읽어서 사용

헤더에서 프로젝트를 변경한다.

1. 드롭다운에서 `def456` 선택
2. `/dashboard?project-id=def456`으로 리다이렉트
3. 미들웨어에서 새로운 project-id를 쿠키에 저장
4. 이후 모든 페이지 이동에서 `def456`이 자동으로 유지됨

## 마치며
---
서버와 클라이언트 어디서든 동일한 방식으로 프로젝트 정보에 접근할 수 있다. URL만 보면 현재 어떤 프로젝트 컨텍스트인지 명확하게 알 수 있다. 디버깅할 때도 편하다.

데이터 페칭 로직에 프로젝트 ID를 전달하는 것도 간단하다. 쿼리에서 읽어서 API 요청 헤더나 파라미터에 넣어주기만 하면 된다. 전역 상태를 동기화하거나 서버로 전달하는 복잡한 로직이 필요 없다.

기존 라우트 구조를 건드리지 않고도 멀티 프로젝트 기능을 추가할 수 있었다. 이미 만들어진 페이지들이 많은 상황에서 큰 리팩토링 없이 적용 가능했다는 게 가장 큰 장점이었다.