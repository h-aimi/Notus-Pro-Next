import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Label = (props) => {
  return (
    <>
      <div className="label-container">
        <h6 className="label-text">{props.text}</h6>
      </div>
      <style jsx>
        {`
          .label-container {
            display: flex;
            position: relative;
          }
          .label-text {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            font-weight: 700;
            line-height: 1;
            padding-top: 0.25rem;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius25);
            padding-right: var(--dl-layout-space-halfunit);
            padding-bottom: 0.25rem;
            text-transform: uppercase;
            background-color: var(--dl-color-pimary-700);
          }
        `}
      </style>
    </>
  )
}

Label.defaultProps = {
  text: 'Text',
}

Label.propTypes = {
  text: PropTypes.string,
}

export default Label
