import React from 'react'

import { useTranslations } from 'next-intl'

const Counter = (props) => {
  return (
    <>
      <div className="counter-container"></div>
      <style jsx>
        {`
          .counter-container {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Counter
