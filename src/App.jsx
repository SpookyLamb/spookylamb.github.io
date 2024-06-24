import { Navigation } from "./Components"
import Contact from "./Contact" 
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from 'react-bootstrap/Navbar'

import { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"

import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero-content section d-flex fullscreen vh-100 bg-dark">
      <div className="container d-flex flex-column justify-content-evenly mx-auto" id="main-wrapper">
          <div className="row">
              <div className="col-12 text-center text-white">
                  <h1 className="font-monospace text-header py-5">&#123; HELLO FRIEND &#125;</h1>
                  {/* <h2 className="text-decoration-underline pb-2 text-danger"></h2> */}
                  <img src="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/avi.png" alt="A cute picture." className="rounded-circle p-3 funny-icon"></img>
              </div>
          </div>
          <div className="row text-white text-center">
              <h2 className="font-monospace">&#123;&nbsp;
                <span className="font-monospace text-danger text-decoration-bold">I'm Maddie!</span>
              &nbsp;A very spooky Developer! &#125;</h2>
              {/* <h6>(And a very spooky game developer, too!)</h6> */}
          </div>
          <div className="row text-white text-center">
            <h2 className="font-monospace">&#123;
              <span>
                <MdKeyboardArrowDown />
              </span>
            &#125;</h2>
            {/* <h4>(Then scroll down!)</h4> */}
            {/* <h6>(If you dare!)</h6> */}
          </div>
      </div>
    </div>
  )
}

function CarouselImage(props) {
  const src = props.source
  const link = props.link

  return (
    <Container className="carousel-container d-block">
      <a href={link} target="_blank">
        <Image className="carousel-image d-block" src={src} />
      </a>
    </Container>
  )
}

function Portfolio() {

  return (
    <div className="py-5">
      <h1 className="font-monospace py-3 text-center text-white">&#123; Projects &#125;</h1>
      <Carousel className="py-5 my-carousel mx-auto">

        <Carousel.Item>
          <CarouselImage 
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/witch-chess.png"
            link="https://witch-chess.vercel.app/"
          />
          <Carousel.Caption className="caption">
            <h1>Witch Chess</h1>
            <p className="fs-4">An online multiplayer blitz chess app, with magic spells! Login required to play!</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <CarouselImage 
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/chatterbox.png"
            link="https://chatterbox-six.vercel.app/"
          />
          <Carousel.Caption className="caption">
            <h1>Chatterbox</h1>
            <p className="fs-4">A simple social media app, similar in function to Twitter/Threads! Login required to view & post!</p>
          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item>
          <CarouselImage 
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/to-do-list.png"
            link="https://todo-list-nine-phi-47.vercel.app/"
          />
          <Carousel.Caption className="caption">
            <h1>To-Do List</h1>
            <p className="fs-4">A list that tracks and saves tasks, which you can edit, delete, or complete!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImage
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/summer-demon.png"
            link="https://spookylamb.github.io/random-restaurant/"
          />
          <Carousel.Caption className="caption">
            <h1>The Summer Demon</h1>
            <p className="fs-4">A menu for a (fake) confectionary restaurant. Peruse our diabolical treats!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImage
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/connect-4.png"
            link="https://spookylamb.github.io/tic-tac-toe/"
          />
          <Carousel.Caption className="caption">
            <h1>Tic-Tac-Toe & Connect 4</h1>
            <p className="fs-4">An app that lets you play Tic-Tac-Toe and Connect 4! Try to beat your friends!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImage 
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/weather-app.png"
            link="https://spookylamb.github.io/weather-app/"
          />
          <Carousel.Caption className="caption">
            <h1>Weather Report</h1>
            <p className="fs-4">An app that pulls up the current weather in your area, or in a provided ZIP code!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImage 
            source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/mind-reader.png"
            link="https://spookylamb.github.io/mind-reader/"
          />
          <Carousel.Caption className="caption">
            <h1>Mind Reader</h1>
            <p className="fs-4">A simple app that takes any number between 1-99, and will READ YOUR MIND!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

function InfernoDivider() {
  //a "navbar" that we're using as a divider

  return (
    <Navbar className="inferno-divider bg-danger"></Navbar>
  )
}

function App() {
  return (
    <div className="main-wrapper">
      <section id="home">
        <Navigation/>
        <Hero/>
      </section>
      <section id="projects">
        <InfernoDivider/>
        <Portfolio/>
        <InfernoDivider/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}


export default App
