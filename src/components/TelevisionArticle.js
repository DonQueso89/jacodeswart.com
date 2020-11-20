import React from 'react'
import CloseButton from './closeButton'
import pic01 from '../images/pic01.jpg'
import { useTelevision } from '../hooks/useTelevision'

const embedUrlFromUid = (provider, providerUid) => {
    if (provider === "youtube") {
        return new URL(`https://www.youtube.com/embed/${providerUid}`)
    }
}

const EmbeddedVideoBlock = ({ title, video, bodyNode }) => {
  const { title: originalTitle, provider, providerUid } = video
  const { childMarkdownRemark } = bodyNode
  const embedUrl = embedUrlFromUid(provider, providerUid)
  return (
    <div className="videoblock">
      <h3>{title ? title : originalTitle}</h3>
      {embedUrl && <iframe
        src={embedUrl}
        title={originalTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="100%"
        height="300px"
      />}
      {childMarkdownRemark.html && <div
        className="inserted-content"
        dangerouslySetInnerHTML={{
          __html: childMarkdownRemark.html,
        }}
      ></div>}
    </div>
  )
}

const TelevisionArticle = ({ closeCallback, ...props }) => {
  const { headerimage, televisionblocks, introtextNode } = useTelevision()
  console.log(introtextNode)
  const videoBlocks = televisionblocks.map(block => (
    <EmbeddedVideoBlock {...block} />
  ))
  return (
    <article
      id="talks"
      className={`${props.article === 'television' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Television</h2>
      <span className="image main">
        <img src={headerimage.url || pic01} alt="" />
      </span>
      {introtextNode.childMarkdownRemark.html && <div
        className="inserted-content"
        dangerouslySetInnerHTML={{
          __html: introtextNode.childMarkdownRemark.html,
        }}
      ></div>}
      {videoBlocks}
      <CloseButton close={closeCallback} />
    </article>
  )
}

export default TelevisionArticle
