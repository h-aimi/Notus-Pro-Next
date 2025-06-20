import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="primary-button-container">
        <button className="primary-button-button button TextXS">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-button-container {
            display: flex;
            position: relative;
          }
          .primary-button-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            line-height: 1;
            padding-top: var(--dl-layout-space-halfunit);
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-transform: uppercase;
            background-color: var(--dl-color-pimary-500);
          }
          .primary-button-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .primary-button-button:active {
            background-color: var(--dl-color-pimary-300);
          }
        `}
      </style>
    </>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
