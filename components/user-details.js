import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const UserDetails = (props) => {
  return (
    <>
      <div className="user-details-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="user-details-image"
        />
        <div className="user-details-container2">
          <span className="user-details-text1 TextSM">{props.name}</span>
          <div className="user-details-container3">
            <span className="user-details-text2 TextXS">
              Published
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="user-details-text3 TextXS">{props.time}</span>
            <span className="user-details-text4 TextXS">ago</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .user-details-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .user-details-image {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
          }
          .user-details-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-details-text1 {
            color: var(--dl-color-secondary-500);
            font-weight: 700;
            text-transform: uppercase;
          }
          .user-details-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .user-details-text2 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-right: 0.25rem;
          }
          .user-details-text3 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
          }
          .user-details-text4 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-left: 0.25rem;
          }
        `}
      </style>
    </>
  )
}

UserDetails.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  name: 'Laura Hanks',
  time: '3 days',
  imageAlt: 'image',
}

UserDetails.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default UserDetails
