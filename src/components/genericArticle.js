import React from "react"
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
      <div
        className="inserted-content"
        dangerouslySetInnerHTML={{
          __html: articleData.bodyNode.childMarkdownRemark.html,
        }}
      ></div>
      <CloseButton close={onCloseArticle} />
    </article>
  )
}

export default GenericArticle;