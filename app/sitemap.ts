import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ashenafi-zewdie.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://ashenafi-zewdie.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://ashenafi-zewdie.vercel.app/work",
      lastModified: new Date(),
    },
    {
      url: "https://ashenafi-zewdie.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}