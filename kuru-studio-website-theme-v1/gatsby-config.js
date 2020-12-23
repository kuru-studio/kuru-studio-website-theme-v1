module.exports = {
  plugins: [
    {
      resolve: "kuru-studio-website-theme-v1",
      options: {
        path: "data",
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Event",
      },
    },
  ],
}
