import { useStaticQuery, graphql } from 'gatsby'

export const useTelevision = () => {
  const { datoCmsTelevision } = useStaticQuery(graphql`
    query z {
      datoCmsTelevision {
        headerimage {
          url
        }
        introtextNode {
          childMarkdownRemark {
            html
          }
        }
        televisionblocks {
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          title
          video {
            thumbnailUrl
            url
            title
            provider
            providerUid
          }
        }
      }
    }
  `)
  return datoCmsTelevision
}
