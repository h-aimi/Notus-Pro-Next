import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import PostReaction from '../components/post-reaction'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-post-container10">
        <Head>
          <title>BlogPost - exported project</title>
          <meta property="og:title" content="BlogPost - exported project" />
        </Head>
        <div className="blog-post-hero">
          <div className="blog-post-fixed-header">
            <Header rootClassName="headerroot-class-name"></Header>
          </div>
          <h1 className="blog-post-text10 Text2XL">
            Miami Beah is looking different at night!
          </h1>
          <div className="blog-post-bg"></div>
        </div>
        <div className="blog-post-post-details">
          <div className="blog-post-container11">
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className="blog-post-icon1"
            >
              <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
            </svg>
          </div>
          <span className="blog-post-text11 TextXL">posted 18 Sept 2021</span>
          <span className="blog-post-text12">
            <span className="blog-post-text13">
              &apos;Started from the bottom now we here&apos;
            </span>
            <span className="blog-post-text14">
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="blog-post-text15">Mark Jonson</span>
            <br></br>
          </span>
          <span className="blog-post-text16">
            <span className="blog-post-text17">
              As a result of growing emeraldhouse gas emissions, climate models
              predict that our planet will get significantly warmer, that
              ecosystems will be changed or destroyed, and that enormous human
              and economic costs will be incurred. These scenarios aren’t
              guaranteed, but avoiding them will be very hard. We’re trying to
              take small steps to mitigate our impact.
            </span>
            <br></br>
          </span>
        </div>
        <div className="blog-post-container12">
          <div className="blog-post-story">
            <span className="blog-post-text18 TextLG">
              <span>March 1, 2019</span>
            </span>
            <h3 className="blog-post-text20 Text2XL">
              The Castle Looks Different at Night...
            </h3>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="blog-post-image1"
            />
            <span className="blog-post-text21 TextLG">
              <span className="blog-post-text22">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn&apos;t scroll to get here. Add a button if
                you want the user to see more. We are here to make life better.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text25">
                And now I look and look around and there’s so many Kanyes
                I&apos;ve been trying to figure out the bed design for the
                master bedroom at our Hidden Hills compound... and thank you for
                turning my personal jean jacket into a couture piece.
              </span>
              <br></br>
            </span>
            <div className="blog-post-container13">
              <span className="TextLG">
                <span className="blog-post-text27">&quot;</span>
                <span className="blog-post-text28">
                  And thank you for turning my personal jean jacket into a
                  couture piece.
                </span>
                <span className="blog-post-text29">&quot;</span>
              </span>
              <span className="blog-post-text30">
                <span className="blog-post-text31">Kanye West, Producer.</span>
                <span className="blog-post-text32"></span>
              </span>
            </div>
            <h3 className="blog-post-text33 Text2XL">
              Using Video Games To Generate Clicks
            </h3>
            <span className="blog-post-text34 TextLG">
              <span className="blog-post-text35">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn&apos;t scroll to get here. Add a button if
                you want the user to see more. We are here to make life better.
              </span>
              <br></br>
            </span>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="blog-post-image2"
            />
            <h3 className="blog-post-text36 Text2XL">Rest of the Story</h3>
            <span className="blog-post-text37 TextLG">
              <span className="blog-post-text38">
                We are here to make life better. And now I look and look around
                and there’s so many Kanyes I&apos;ve been trying to figure out
                the bed design for the master bedroom at our Hidden Hills
                compound... and thank you for turning my personal jean jacket
                into a couture piece. I speak yell scream directly at the old
                guard on behalf of the future. daytime All respect prayers and
                love to Phife’s family Thank you for so much inspiration
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text41">
                Thank you Anna for the invite thank you to the whole Vogue team
                And I love you like Kanye loves Kanye Pand Pand Panda I&apos;ve
                been trying to figure out the bed design for the master bedroom
                at our Hidden Hills compound...The Pablo pop up was almost a pop
                up of influence. All respect prayers and love to Phife’s family
                Thank you for so much inspiration daytime I love this new Ferg
                album! The Life of Pablo is now available for purchase I have a
                dream. Thank you to everybody who made The Life of Pablo the
                number 1 album in the world! I&apos;m so proud of the nr #1 song
                in the country. Panda! Good music 2016!
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text44">
                I love this new Ferg album! The Life of Pablo is now available
                for purchase I have a dream. Thank you to everybody who made The
                Life of Pablo the number 1 album in the world! I&apos;m so proud
                of the nr #1 song in the country. Panda! Good music 2016!
              </span>
              <br></br>
              <br></br>
            </span>
            <div className="blog-post-post">
              <span className="blog-post-text45 TextXL">
                What people say...
              </span>
              <div className="blog-post-divider1"></div>
              <div className="blog-post-container14">
                <div className="blog-post-container15">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="blog-post-image3"
                  />
                  <div className="blog-post-container16">
                    <span className="blog-post-text46 TextSM">JOHN SNOW</span>
                    <div className="blog-post-container17">
                      <span className="blog-post-text47 TextXS">
                        3 days ago
                      </span>
                    </div>
                  </div>
                </div>
                <SecondaryButton button="FOLLOW"></SecondaryButton>
              </div>
              <span className="blog-post-text48 TextMD">
                <span className="blog-post-text49">
                  Personal profiles are the perfect way for you to grab their
                  attention and persuade recruiters to continue reading your CV
                  because you’re telling them from the off exactly why they
                  should hire you.
                </span>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="blog-post-image4"
              />
              <div className="blog-post-container18">
                <div className="blog-post-container19">
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon3">
                    <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
                  </svg>
                  <span className="blog-post-text50 TextXS">150</span>
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon5">
                    <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
                  </svg>
                  <span className="blog-post-text51 TextXS">36</span>
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon7">
                    <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
                  </svg>
                  <span className="blog-post-text52 TextXS">12</span>
                </div>
                <div className="blog-post-container20">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="blog-post-image5"
                  />
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="blog-post-image6"
                  />
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="blog-post-image7"
                  />
                  <span className="blog-post-text53 TextXS">and 30+ more</span>
                </div>
              </div>
              <div className="blog-post-divider2"></div>
              <span className="blog-post-text54 TextSM">Load previous</span>
              <PostReaction
                name="Michael Lewis"
                likes="3"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></PostReaction>
              <PostReaction
                name="Jessica Stones"
                text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down."
                shares="1"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></PostReaction>
              <span className="blog-post-text55 TextSM">Load next</span>
              <div className="blog-post-container21">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="blog-post-image8"
                />
                <textarea
                  rows="1"
                  placeholder="Write your comment"
                  className="blog-post-textarea textarea TextSM"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-posts">
          <div className="blog-post-container22">
            <Label text="STORIES"></Label>
            <h3 className="blog-post-text56 Healine">
              <span className="blog-post-text57">Before I go </span>
            </h3>
            <span className="blog-post-text58 TextXL">
              We&apos;ve got time, but we are only doing what they say and want.
              I do not want to live as I will never die, cause life&apos;s too
              short, and I do not want to drown myself, as others would like.
            </span>
          </div>
          <ArticleCard avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></ArticleCard>
          <ArticleCard
            name="Paul Smith"
            time="Drawn on 23 April"
            title="MateLabs mixes learning with IFTTT"
            imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          ></ArticleCard>
          <ArticleCard
            name="Jasmine Taylor"
            time="Drawn on 23 April"
            title="US venture investment ticks up in Q2"
            imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            avatarSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          ></ArticleCard>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .blog-post-container10 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
          }
          .blog-post-fixed-header {
            width: 100%;
            display: flex;
            z-index: 200;
            position: fixed;
            box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-text10 {
            top: 0px;
            left: 276px;
            color: var(--dl-color-gray-white);
            right: auto;
            bottom: 0px;
            margin: auto;
            z-index: 100;
            text-align: center;
          }
          .blog-post-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .blog-post-post-details {
            flex: 0 0 auto;
            width: 95%;
            display: flex;
            position: relative;
            max-width: 1320px;
            box-shadow: 0px 10px 15px -10px #626262;
            margin-top: -100px;
            padding-left: var(--dl-layout-space-tripleunit);
            border-radius: var(--dl-layout-radius-radius75);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-container11 {
            top: -2rem;
            flex: 0 0 auto;
            left: auto;
            right: auto;
            width: 4rem;
            bottom: auto;
            height: 4rem;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-500);
          }
          .blog-post-icon1 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .blog-post-text11 {
            color: var(--dl-color-gray-white);
            align-self: center;
            margin-top: var(--dl-layout-space-tripleunit);
          }
          .blog-post-text12 {
            color: #94a3b8ff;
            align-self: center;
          }
          .blog-post-text13 {
            white-space: normal;
          }
          .blog-post-text14 {
            white-space: normal;
          }
          .blog-post-text15 {
            font-style: italic;
          }
          .blog-post-text16 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-layout-space-tripleunit);
            padding-bottom: var(--dl-layout-space-tripleunit);
          }
          .blog-post-text17 {
            text-align: center;
          }
          .blog-post-container12 {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }
          .blog-post-story {
            width: 100%;
            display: flex;
            max-width: 1320px;
            grid-column: 3/11;
            padding-top: var(--dl-layout-space-tripleunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .blog-post-text18 {
            color: #94a3b8ff;
          }
          .blog-post-text20 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
          }
          .blog-post-image1 {
            width: 100%;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: var(--dl-layout-space-tripleunit);
            object-fit: contain;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .blog-post-text21 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .blog-post-text22 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text25 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-container13 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            flex-direction: column;
            border-left-width: 1px;
          }
          .blog-post-text27 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text28 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text29 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text30 {
            color: var(--dl-color-secondary-400);
          }
          .blog-post-text31 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .blog-post-text32 {
            font-weight: 600;
          }
          .blog-post-text33 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
            margin-top: var(--dl-layout-space-doubleunit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .blog-post-text34 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .blog-post-text35 {
            white-space: normal;
          }
          .blog-post-image2 {
            width: 450px;
            align-self: center;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: var(--dl-layout-space-tripleunit);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
          }
          .blog-post-text36 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
            margin-top: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .blog-post-text37 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .blog-post-text38 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text41 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text44 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-post {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            max-width: 600px;
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-text45 {
            color: var(--dl-color-secondary-400);
            font-weight: 700;
          }
          .blog-post-divider1 {
            flex: 0 0 auto;
            width: 100%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-layout-space-triplequarter);
            align-items: center;
            margin-bottom: var(--dl-layout-space-triplequarter);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-container15 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .blog-post-image3 {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-container16 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-text46 {
            color: var(--dl-color-secondary-300);
            font-weight: 700;
            line-height: 20px;
            text-transform: uppercase;
          }
          .blog-post-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .blog-post-text47 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            line-height: 20px;
          }
          .blog-post-text48 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            line-height: 1.625;
          }
          .blog-post-text49 {
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .blog-post-image4 {
            width: 100%;
            margin-top: var(--dl-layout-space-unit);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .blog-post-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-layout-space-doubleunit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-container19 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: row;
          }
          .blog-post-icon3 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-top: 1px;
          }
          .blog-post-text50 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-icon5 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-left: var(--dl-layout-space-unit);
          }
          .blog-post-text51 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-icon7 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-top: 2px;
            margin-left: var(--dl-layout-space-unit);
          }
          .blog-post-text52 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .blog-post-image5 {
            width: 20px;
            object-fit: cover;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-image6 {
            width: 20px;
            object-fit: cover;
            margin-left: -10px;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-image7 {
            width: 20px;
            object-fit: cover;
            margin-left: -10px;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-text53 {
            color: var(--dl-color-secondary-400);
            margin-left: 0.25rem;
          }
          .blog-post-divider2 {
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
          .blog-post-text54 {
            color: var(--dl-color-secondary-500);
            align-self: center;
          }
          .blog-post-text55 {
            color: var(--dl-color-secondary-500);
            align-self: center;
          }
          .blog-post-container21 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: row;
          }
          .blog-post-image8 {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-textarea {
            color: var(--dl-color-secondary-400);
            width: 100%;
            outline: 0;
            padding: var(--dl-layout-space-halfunit);
            transition: 0.3s;
            border-color: rgba(203, 213, 225, 1);
            border-radius: var(--dl-layout-radius-radius4);
          }
          .blog-post-textarea:focus {
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .blog-post-posts {
            display: flex;
            max-width: 1320px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
          }
          .blog-post-container22 {
            width: 66%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .blog-post-text56 {
            color: var(--dl-color-secondary-400);
          }
          .blog-post-text57 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .blog-post-text58 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            margin-bottom: var(--dl-layout-space-unitandhalf);
          }
          @media (max-width: 991px) {
            .blog-post-text10 {
              padding-left: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-tripleunit);
            }
            .blog-post-post {
              width: 100%;
            }
            .blog-post-container22 {
              width: 100%;
              padding-left: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .blog-post-text12 {
              text-align: center;
            }
            .blog-post-story {
              width: 100%;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
            }
            .blog-post-image2 {
              width: 80%;
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .blog-post-container22 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-text12 {
              text-align: center;
            }
            .blog-post-container12 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogPost
