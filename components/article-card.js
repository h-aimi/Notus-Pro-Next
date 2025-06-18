import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ArticleCard = (props) => {
  return (
    <>
      <div className="article-card-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="article-card-image1"
        />
        <div className="article-card-container2">
          <h3 className="article-card-text1 Healine">{props.newProp}</h3>
          <div className="article-card-container3">
            <span className="article-card-text2">{props.description}</span>
          </div>
          <div className="article-card-container4">
            <img
              alt={props.avatarAlt}
              src={props.avatarSrc}
              className="article-card-image2"
            />
            <div className="article-card-container5">
              <span className="article-card-text3">{props.name}</span>
              <div className="article-card-container6">
                <span className="article-card-text4 TextSM">{props.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .article-card-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: row;
          }
          .article-card-image1 {
            width: 33%;
            object-fit: cover;
            border-radius: 0px;
            border-top-left-radius: var(--dl-layout-radius-radius75);
            border-bottom-left-radius: var(--dl-layout-radius-radius75);
          }
          .article-card-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .article-card-text1 {
            color: var(--dl-color-secondary-300);
            font-weight: 600;
          }
          .article-card-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .article-card-text2 {
            color: var(--dl-color-secondary-500);
            font-size: 1.125rem;
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .article-card-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .article-card-image2 {
            width: 48px;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
          }
          .article-card-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .article-card-text3 {
            color: var(--dl-color-secondary-500);
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
          }
          .article-card-container6 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .article-card-text4 {
            color: var(--dl-color-secondary-500);
          }
          @media (max-width: 991px) {
            .article-card-container1 {
              flex-direction: column;
            }
            .article-card-image1 {
              width: 100%;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ArticleCard.defaultProps = {
  avatarSrc: '15958451-f790-4024-a70e-cc38b82637f2',
  name: 'Laura Hanks',
  newProp: 'Portofino one of the best for remote working',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  time: 'Published 3 days ago',
  avatarAlt: 'avatar',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  imageAlt: 'image',
}

ArticleCard.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
  time: PropTypes.string,
  avatarAlt: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ArticleCard
