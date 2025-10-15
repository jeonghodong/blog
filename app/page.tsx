import BlogWrapper from "./_components/BlogWrapper";
import JsonLd from "./_components/JsonLd";
import { getAllPosts } from "./_lib/posts";
import { SITE_CONFIG } from "./_lib/seo/config";

export default async function Home() {
  const posts = getAllPosts();

  // Website 스키마
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    inLanguage: "ko-KR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <div className="mx-auto px-4">
        <BlogWrapper posts={posts} />
      </div>
    </>
  );
}
