import React from "react"
import { rhythm } from "../utils/typography"

class About extends React.Component {
  render() {
    return (
      <div
        css={{
          padding: rhythm(3 / 4),
        }}
      >
        <h1 data-testid="about-title">About Gatsbygram</h1>
        <p>
          Gatsbygram is an example website built with the JavaScript web
          framework
          {` `}
          <a target="_blank" href="https://github.com/gatsbyjs/gatsby">
            Gatsby
          </a>
          .
        </p>
        <p>
          The code for the site lives at{` `}
          <a
            href="https://github.com/gatsbyjs/gatsby/tree/master/examples/gatsbygram"
            target="_blank"
          >
            https://github.com/gatsbyjs/gatsby/tree/master/examples/gatsbygram
          </a>
        </p>
        <p>
          <a href="https://www.gatsbyjs.org/blog/gatsbygram-case-study/">
            Read a case study on how Gatsbygram was built
          </a>
        </p>
      </div>
    )
  }
}

export default About
