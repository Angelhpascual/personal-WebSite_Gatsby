import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {title}
      </a>
      <div className="d-md-inline-flex">
        &nbsp;-<i>{author}</i>
      </div>
    </li>
  )

  const {
    author,
    readingList,
    showsList,
    moviesList,    
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))
  const movieLinks = moviesList.map(movie => MediaLink(movie));
  

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-md-4 pt-md-2 mb-md-4">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <a
              href="https://www.dictionary.com/e/fictional-characters/padawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              padawan
            </a>
            &nbsp;developer discovering the ways of the <code>code</code>.
          </p>
          <p className="i-5">
            I've had the privilege of studying Software Engineering at both the{" "}
            <Image
              width="20"
              height="24"
              src="../../icons/cristoRey.png"
              className="align-bottom m-0"
            />{" "}
            <a
              href="http://www.cescristorey.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="uwaterloo"
            >
              <b>I.E.S Cristo Rey</b>
            </a>{" "}            
              
            {" "}            
            Studying at this institution granted me the opportunity to gain
            exposure to a spectrum of industries including healthcare, ed-tech
            and fintech. It allowed me to discover a lot about what parts of
            coding I enjoy and what parts I don't.
          </p>
          <p className="i-5">
            My technical interests lie in <b>Full-Stack Web Development</b> and
            <b>&nbsp;iOS development</b>. I have the most experience with&nbsp;
            <code>JavaScript</code>
            &nbsp;based-technologies:&nbsp;
            <code>React.js</code>, <code>Gatsby.js</code>, <code>Node.js</code>
            &nbsp;and&nbsp;
            <code>Express.js</code>. I am currently enjoying learning&nbsp;
            <code>SwiftUI</code>, the new mobile framework for&nbsp;
            <code>Swift</code> while quarantining in Ceuta, Spain 🇪🇸.{" "}
            <i>
              <small>#StayHomeStaySafe</small>
            </i>
          </p>
          <p className="i-5">
            When I am not coding, you can find me doing one or more of:
            playing&nbsp;
            <a
              href="https://store.steampowered.com/app/683320/GRIS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GRIS
            </a>
            , playing and singing music on my Twitch channel, tutoring part-time or desperately trying to
            beat a 10-year-old{" "}
            <a
              href="https://www.playmagnus.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magnus Carlsen
            </a>
            &nbsp;at chess. I also aim to spend a certain part of every day
            trying to learn to cook a new dish.
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="https://www.linkedin.com/in/%C3%A1ngel-hern%C3%A1ndez-pascual-90391546/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul
            className="pl-0"
            style={{ fontSize: "0.9rem", listStyle: "none" }}
          >
            {bookLinks}
          </ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul
            className="pl-0"
            style={{ fontSize: "0.9rem", listStyle: "none" }}
          >
            {showLinks}
          </ul> 
          <h5 className="watch-list-title pt-4">Here are a couple of movies from my watch list</h5>
          <ul
          className="pl-0"
          style={{ fontSize: "0.9rem", listStyle: "none" }}>
            {movieLinks}
          </ul>         
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
        moviesList {
          title
          author
          link
        }
      }
    }
  }
`
