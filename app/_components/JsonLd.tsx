import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * JSON-LD 구조화된 데이터를 렌더링하는 컴포넌트
 * SEO를 위한 스키마 마크업을 추가합니다.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
