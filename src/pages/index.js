import React from "react"
import { Link, replace } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title = "Home"/>
    <div className = "MK8DeluxeHero">
      <div className = "YoshiKart"/>
      <div className = "MarioKart"/>
      <svg
        width = "1440"
        height = "118"
        viewBox = "0 0 1440 118"
        fill = "none"
      >
        <path fill = "white">
          <animate 
            repeatCount = "indefinite"
            fill = "freeze"
            attributeName = "d"
            dur = "8s"
            values = "
              M0 53.3333C0 53.3333 440.5 -66.6667 720 53.3333C999.5 173.333 1440 53.3333 1440 53.3333V117.333H720H0V53.3333Z;
              M0 53.3333C0 53.3333 436.5 173.333 720 53.3333C1003.5 -66.6667 1440 53.3333 1440 53.3333V117.333H720H0V53.3333Z;
              M0 53.3333C0 53.3333 440.5 -66.6667 720 53.3333C999.5 173.333 1440 53.3333 1440 53.3333V117.333H720H0V53.3333Z
            "
          />
        </path>
      </svg>
      <a href = "https://mariokart8.nintendo.com">
        <div className = "MK8DeluxeLogo"/>
      </a>
    </div>
  </Layout>
)

export default IndexPage