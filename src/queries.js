import { useStaticQuery, graphql } from 'gatsby'

export const useContactInfo = () => {
  const { datoCmsContactinfo } = useStaticQuery(graphql`
    query c {
      datoCmsContactinfo {
        email
      }
    }
  `)
  return datoCmsContactinfo
}
