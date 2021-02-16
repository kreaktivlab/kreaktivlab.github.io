module.exports = {
  siteMetadata: {
    title: "kreaktivlab.com",
    description: "We love, play, and create games.",
    author: "Kreaktivlab",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kreaktivlab",
        short_name: "Kreaktivlab",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          'roboto:300,400,500,600,700,900',
          'kanit:400,700,800,900',
          'oswald:400,500,700'
        ],
        display: 'swap'
      }
    }
  ]
}
