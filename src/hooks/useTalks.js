import { useStaticQuery, graphql } from 'gatsby'


export const useTalks = () => {
  const { datoCmsTalk } = useStaticQuery(graphql`
    query t {
      datoCmsTalk {
        introtextNode {
          childMarkdownRemark {
            html
          }
        }
        headerimage {
          url
        }
        talkslist {
          id
          body
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          invited
        }
      }
    }
  `)
  return datoCmsTalk
}