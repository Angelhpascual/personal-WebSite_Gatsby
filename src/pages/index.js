import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import Image from "react-bootstrap/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typical from "react-typical"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <div className="text-center px-0 mx-0 pt-5 mt-5">
        <Image
          width="150"
          height="150"
          fluids
          src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {unemployed && (
          <p className="mt-2" style={{ fontSize: "1.1vmax" }}>
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}

        <p className="mt-2" style={{ fontSize: "1.1vmax" }}>
          <Typical
            steps={[
              "May The Force Be With You.",
              1000,
              "“Do. Or do not. There is no try.” – Yoda",
              1000,
              "“It’s a trap!” – Admiral Ackbar",
              1000,
              "“This is a new day, a new beginning.” – Ahsoka Tano",
              1000,
              "“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </p>
        <hr className="my-3 w-25" />

        <div className="py-0 my-0">
          <h1 className="display-1" style={{ fontSize: "4.5vmax" }}>
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p style={{ fontSize: "1vmax" }}>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night` : `Rebel agent by night`}
            </i>
          </p>
        </div>
        <hr className="my-3 w-25" />
        <div className="d-flex flex-column flex-md-row d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/angelhpascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1ngel-hern%C3%A1ndez-pascual-90391546/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          {/* <a
            href="https://www.freecodecamp.org/surudhb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
              title="FreeCodeCamp"
            />
          </a> */}
          {/*<a
            href="https://www.hackerrank.com/surudhbhutani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
              title="Hackerrank"
            />
          </a> 
          */}
          <a
            href="mailto:angelhpascual@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../angelhpascual_resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
