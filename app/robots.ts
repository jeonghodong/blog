import { MetadataRoute } from "next";
import { generateRobots } from "./_lib/seo/robots";

export default function robots(): MetadataRoute.Robots {
  return generateRobots();
}
