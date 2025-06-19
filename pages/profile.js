import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'

const Profile = (props) => {
  return (
    <>
      <div className="profile-container10">
        <Head>
          <title>Profile - exported project</title>
          <meta property="og:title" content="Profile - exported project" />
        </Head>
        <div className="profile-image1">
          <Header heading1="h_aimi"></Header>
          <img
            alt="image"
            src="/external/depth7frame0039-o7e8.svg"
            className="profile-image2"
          />
          <div className="profile-bg">
            <div className="profile-container11">
              <div className="profile-container12"></div>
            </div>
          </div>
        </div>
        <div className="profile-container13">
          <div className="profile-container14">
            <h3 className="profile-text1 Text2XL">h_aimi</h3>
            <div className="profile-container15">
              <svg viewBox="0 0 1024 1024" className="profile-icon1">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="profile-text2 TextSM">NARA</span>
            </div>
            <div className="profile-container16">
              <svg viewBox="0 0 1024 1024" className="profile-icon3">
                <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="profile-text3 TextSM">Software Engineer</span>
            </div>
            <div className="profile-container17">
              <div className="profile-container18"></div>
            </div>
            <div className="profile-container19"></div>
            <span className="profile-text4">
              <span>
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </span>
            </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-container10 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #111416;
          }
          .profile-image1 {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
          }
          .profile-image2 {
            width: 200px;
            bottom: 0px;
            z-index: 200;
            position: sticky;
            object-fit: cover;
          }
          .profile-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .profile-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container12 {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container13 {
            width: 90%;
            height: 519px;
            display: flex;
            z-index: 100;
            max-width: 1320px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: -15rem;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            background-color: rgba(45, 45, 53, 0.66);
          }
          .profile-container14 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
          }
          .profile-text1 {
            color: #e1e3e3;
          }
          .profile-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon1 {
            fill: #e1e3e3;
            width: 18px;
            height: 18px;
          }
          .profile-text2 {
            color: #e1e3e3;
            font-weight: 600;
            margin-left: var(--dl-layout-space-halfunit);
          }
          .profile-container16 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon3 {
            fill: #e1e3e3;
            width: 18px;
            height: 18px;
          }
          .profile-text3 {
            color: #e1e3e3;
            margin-left: var(--dl-layout-space-halfunit);
          }
          .profile-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container18 {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container19 {
            flex: 0 0 auto;
            width: 90%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .profile-text4 {
            color: #e1e3e3;
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: 300;
            line-height: 1.625;
            margin-bottom: var(--dl-layout-space-unit);
          }
        `}
      </style>
    </>
  )
}

export default Profile
