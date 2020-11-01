import { useTalks } from '../hooks/useTalks'
import React, { useState } from 'react'
import CloseButton from './closeButton'

const TalksArticle = ({ closeCallback, ...props }) => {
  const [filter, setFilter] = useState(null)
  const { introtextNode, headerimage, talkslist } = useTalks()
  const [invitedTalks, otherTalks] = talkslist
    .filter(({ body }) => (filter ? body.includes(filter) : true))
    .reduce(
      ([i, o], { id, invited, bodyNode }) => {
        const out = (
          <li key={id}>
            <p
              dangerouslySetInnerHTML={{
                __html: bodyNode.childMarkdownRemark.html,
              }}
            ></p>
          </li>
        )
        return invited ? [[...i, out], o] : [i, [...o, out]]
      },
      [[], []]
    )
  console.log(filter)
  return (
    <article
      id="talks"
      className={`${props.article === 'talks' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Talks</h2>
      <span className="image main">
        <img src={headerimage.url} alt="" />
      </span>
      <p
        dangerouslySetInnerHTML={{
          __html: introtextNode.childMarkdownRemark.html,
        }}
      ></p>
      <div className="field half">
        <input
          style={{ marginBottom: '2rem' }}
          type="text"
          name="search"
          placeholder="Search talks"
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
      </div>
      <h3>Invited</h3>
      <ul>{invitedTalks}</ul>
      <h3>Other</h3>
      <ul>{otherTalks}</ul>
      <CloseButton close={closeCallback} />
    </article>
  )
}

export default TalksArticle
