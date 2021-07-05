import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import GatsbyLogo from "../images/gatsby.svg"
import ReactLogo from "../images/react.svg"
import * as style from "../styles/index.module.scss"

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <StaticImage
          src="../images/index-hero.jpg"
          alt="hero"
          quality={90}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
        />
        <div className={style.textContainer}>
          <h1>学生エンジニアの忘備録ブログ</h1>
          <h3>Web Engineer</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>私について</h2>
            <p>松本伊吹</p>
          </div>
          <StaticImage
            src="../images/ibuki.jpg"
            alt="profile"
            quality={90}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>
        <div className={style.skills}>
          <h2>スキルについて</h2>
          <div className={style.skillsContainer}>
            <div>
              <img src={ReactLogo} alt="react" />
              <span>React / 基礎のみ理解</span>
            </div>
            <div>
              <img src={GatsbyLogo} alt="gatsby" />
              <span>Gatsby / チュートリアルを理解</span>
            </div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link to="/contact">お問い合わせはこちら</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index
