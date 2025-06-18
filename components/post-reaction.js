import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PostReaction = (props) => {
  return (
    <>
      <div className="post-reaction-container1">
        <div className="post-reaction-container2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="post-reaction-image"
          />
          <div className="post-reaction-container3">
            <span className="post-reaction-text1 TextLG">{props.name}</span>
            <span className="post-reaction-text2 TextMD">{props.text}</span>
            <div className="post-reaction-container4">
              <svg viewBox="0 0 1024 1024" className="post-reaction-icon1">
                <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
              </svg>
              <span className="post-reaction-text3 TextXS">{props.likes}</span>
              <span className="post-reaction-text4 TextXS">likes</span>
              <svg viewBox="0 0 1024 1024" className="post-reaction-icon3">
                <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
              <span className="post-reaction-text5 TextXS">{props.shares}</span>
              <span className="post-reaction-text6 TextXS">shares</span>
            </div>
          </div>
        </div>
        <div className="post-reaction-divider"></div>
      </div>
      <style jsx>
        {`
          .post-reaction-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unitandhalf);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unitandhalf);
          }
          .post-reaction-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .post-reaction-image {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
          }
          .post-reaction-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post-reaction-text1 {
            color: var(--dl-color-secondary-400);
            font-weight: 700;
            line-height: 40px;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .post-reaction-text2 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            line-height: 1.625;
          }
          .post-reaction-container4 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: row;
          }
          .post-reaction-icon1 {
            fill: var(--dl-color-secondary-500);
            width: 14px;
            height: 100%;
          }
          .post-reaction-text3 {
            color: var(--dl-color-secondary-500);
            margin-left: 0.25rem;
          }
          .post-reaction-text4 {
            color: var(--dl-color-secondary-500);
            margin-left: 0.25rem;
          }
          .post-reaction-icon3 {
            fill: var(--dl-color-secondary-500);
            width: 14px;
            margin-top: 2px;
            margin-left: var(--dl-layout-space-unit);
          }
          .post-reaction-text5 {
            color: var(--dl-color-secondary-500);
            margin-left: 0.25rem;
          }
          .post-reaction-text6 {
            color: var(--dl-color-secondary-500);
            margin-left: 0.25rem;
          }
          .post-reaction-divider {
            flex: 0 0 auto;
            width: 100%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
        `}
      </style>
    </>
  )
}

PostReaction.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  name: 'John Snow',
  imageAlt: 'image',
  likes: '10',
  text: 'You have the opportunity to play this game of life you need to appreciate every moment.',
  shares: '2',
}

PostReaction.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  imageAlt: PropTypes.string,
  likes: PropTypes.string,
  text: PropTypes.string,
  shares: PropTypes.string,
}

export default PostReaction
