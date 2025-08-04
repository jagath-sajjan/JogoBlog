export const SITE = {
  website: "https://jogoblogs.vercel.app/", // replace this with your deployed domain
  author: "Jagath Sajjan",
  profile: "https://github.com/jagath-sajjan",
  desc: "Jagath Sajjan's Blogs Are Here",
  title: "JogoBlogs",
  ogImage: "s.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata",
} as const;
