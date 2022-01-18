export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e61750d5eabe0880996b76",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-de3o3u3v",
                  apiId: "94855d84-72ac-4045-bb21-d64931521884",
                },
                {
                  buildHookId: "61e6175198345c3eb983baf1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3j9ne3n2",
                  apiId: "30263a98-4fd6-4b59-8eca-9c81f585619c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/himaratsu/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3j9ne3n2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
