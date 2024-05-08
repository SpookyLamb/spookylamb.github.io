import { Navigation } from "./Components"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from 'react-bootstrap/Navbar'

import { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"

import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero-content section d-flex fullscreen vh-100 bg-dark">
      <div className="container d-flex flex-column justify-content-evenly mx-auto" id="main-wrapper">
          <div className="row">
              <div className="col-12 text-center text-white">
                  <h1 className="font-monospace text-header">&#123; HELLO FRIEND &#125;</h1>
                  <h2 className="text-decoration-underline pb-2 text-danger">I'm Maddie!</h2>
                  <img src="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/avi.png" alt="A cute picture." className="rounded-circle p-3 funny-icon"></img>
              </div>
          </div>
          <div className="row text-white text-center">
              <h2 className="font-monospace">&#123; I'm a very spooky Web Developer! &#125;</h2>
              {/* <h6>(And a very spooky game developer, too!)</h6> */}
          </div>
          <div className="row text-white text-center">
              <h3 className="font-monospace">&#123; Scroll down to see what I can do! &#125;</h3>
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
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // }; activeIndex={index} onSelect={handleSelect}

  // <CarouselImage source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/connect-4.png" />
  // <Image className="carousel-image d-block" src="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/mind-reader.png" />
  // <Image className="carousel-image d-block" src="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/weather-app.png" />
  // <Image className="carousel-image d-block" src="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/connect-4.png" />

  return (
    <Carousel className="py-5 my-carousel mx-auto">
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
          source="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/to-do-list.png"
          link="https://todo-list-nine-phi-47.vercel.app/"
        />
        <Carousel.Caption className="caption">
          <h1>To-Do List</h1>
          <p className="fs-4">A list that tracks and saves tasks, which you can edit, delete, or complete!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

  // return (
  //   <Container className="pt-5">
  //     <Row className="d-flex justify-content-center">
  //       <Col className="col-12 col-lg-4">
  //           <PortfolioCard
  //             title="Mind Reader"
  //             pic="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/mind-reader.png"
  //             text="A simple app that takes any number between 1-99, and will READ YOUR MIND!"
  //             link="https://spookylamb.github.io/mind-reader/"
  //             btn="Clairvoyance!"
  //           />
  //       </Col>
  //       <Col className="col-12 col-lg-4">
  //         <PortfolioCard
  //           title="Weather Report"
  //           pic="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/weather-app.png"
  //           text="An app that pulls up the current weather in your area, or in a provided ZIP code!"
  //           link="https://spookylamb.github.io/weather-app/"
  //           btn="Control Weather!"
  //         />
  //         <PortfolioCard 
  //           title="Tic-Tac-Toe & Connect 4"
  //           pic="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/connect-4.png"
  //           text="An app that lets you play Tic-Tac-Toe and Connect 4! Try to beat your friends!"
  //           link="https://spookylamb.github.io/tic-tac-toe/"
  //           btn="Game On!"
  //         />
  //       </Col>
  //       <Col className="col-12 col-lg-4">
  //         <PortfolioCard 
  //           title="The Summer Demon"
  //           pic="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/summer-demon.png"
  //           text="A menu for a (fake) confectionary restaurant. Peruse our diabolical treats!"
  //           link="https://spookylamb.github.io/random-restaurant/"
  //           btn="Enjoy Our Menu..."
  //         />
  //         <PortfolioCard
  //           title="To-Do List"
  //           pic="https://raw.githubusercontent.com/SpookyLamb/spookylamb.github.io/main/img/to-do-list.png"
  //           text="A list that tracks and saves tasks, which you can edit, delete, or complete!"
  //           link="https://todo-list-nine-phi-47.vercel.app/"
  //           btn="Get To Doing!"
  //         />
  //       </Col>
  //     </Row>
  //   </Container>
  // )
}

function PortfolioCard(props) {
  const btn_text = props.btn
  const btn_link = props.link
  const main_text = props.text
  const pic_href = props.pic
  const card_title = props.title

  return (
    <Col className="col-12 px-1 py-3">
      <Card className="portfolio-card border mx-auto" bg="dark" text="light">
        <Card.Img variant="top" src={pic_href}></Card.Img>
        <Card.Body>
          <Card.Title>{card_title}</Card.Title>
          <Card.Text>{main_text}</Card.Text>
          <Button variant="danger" className="mx-auto" href={btn_link} target="_blank">{btn_text}</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

function InfernoDivider() {
  //a "navbar" that we're using as a divider

  return (
    <Navbar className="inferno-divider bg-danger border-top border-bottom"></Navbar>
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
      </section>
    </div>
  )
}


export default App
