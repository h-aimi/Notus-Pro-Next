import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SecondaryButton = (props) => {
  return (
    <>
      <div className={`secondary-button-container ${props.rootClassName} `}>
        <button className="secondary-button-button TextXS button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .secondary-button-container {
            display: flex;
            position: relative;
          }
          .secondary-button-button {
            color: var(--dl-color-gray-white);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            line-height: 1;
            padding-top: var(--dl-layout-space-halfunit);
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-transform: uppercase;
            background-color: var(--dl-color-secondary-300);
          }
          .secondary-button-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .secondary-button-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .secondary-buttonroot-class-name {
            margin-top: var(--dl-layout-space-unitandhalf);
          }
        `}
      </style>
    </>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton
