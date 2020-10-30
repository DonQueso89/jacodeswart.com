require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: 'Jaco de Swart',
    author: 'DonQueso89',
    description: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/chicken.jpeg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_TOKEN,
        preview: false,
        disableLiveReload: true,
      },
    },
  ],
}
