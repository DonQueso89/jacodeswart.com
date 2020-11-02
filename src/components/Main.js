import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TalksArticle from './talksArticle'
import CloseButton from './closeButton'
import pic01 from "../images/pic01.jpg"

const GenericArticle = ({ title, articleKey, articleData, onCloseArticle, article, ...props }) => {
  return (
    <article
      id={articleKey}
      className={`${article === articleKey ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{title}</h2>
      <span className="image main">
        <img src={articleData.headerimage ? articleData.headerimage.url : pic01} alt="" />
      </span>
      <p
        className="inserted-content"
        dangerouslySetInnerHTML={{
          __html: articleData.bodyNode.childMarkdownRemark.html,
        }}
      ></p>
      <CloseButton close={onCloseArticle} />
    </article>
  )
}

class Main extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <TalksArticle
          {...this.props}
          closeCallback={this.props.onCloseArticle}
        />

        <StaticQuery
          query={graphql`
            query aboutBody {
              datoCmsAbout {
                ...AboutArticle
              }
              datoCmsScience {
                ...ScienceArticle
              }
              datoCmsTeaching {
                ...TeachingArticle
              }
              datoCmsMusic {
                ...MusicArticle
              }
            }
          `}
          render={data => {
            console.log(data)
            const { datoCmsAbout, datoCmsScience, datoCmsMusic, datoCmsTeaching } = data
            return (
              <>
                <GenericArticle articleKey="about" title="About" articleData={datoCmsAbout} {...this.props} />
                <GenericArticle articleKey="science" title="Science" articleData={datoCmsScience} {...this.props} />
                <GenericArticle articleKey="teaching" title="Teaching" articleData={datoCmsTeaching} {...this.props} />
                <GenericArticle articleKey="music" title="Music" articleData={datoCmsMusic} {...this.props} />
              </>
            )
          }}
        />
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

export const query = graphql`
  fragment AboutArticle on DatoCmsAbout {
    headerimage {
      url
    }
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
  }
  fragment TeachingArticle on DatoCmsTeaching {
    headerimage {
      url
    }
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
  }
  fragment MusicArticle on DatoCmsMusic {
    headerimage {
      url
    }
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
  }
  fragment ScienceArticle on DatoCmsScience {
    headerimage {
      url
    }
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
  }
`