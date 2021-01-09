require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "sps",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.ACCESS_TOKEN}`,
        spaceId: `${process.env.SPACE_ID}`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
