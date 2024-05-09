import { Navigation } from "./Components"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

//&#123; for { and &#125; for }

function About() {
  return (
    <div className="vh-100 bg-dark text-light text-center">
      <Navigation />

      <div className="vh-100 px-1 py-5">
            <Container className="py-5">
                <Col xs={12} lg={8} className="mx-auto border p-3 text-light text-start">
                  <h1 className="pt-5 pb-3 text-center">&#123; About Me &#125;</h1>
                  <hr/>
                  <br/>
                  <p>My name is Madeline Carlson, or just Maddie for short! I'm also known by my username "(Tiny)SpookyLamb"! I'm a notorious coding witch (with a decade of experience!), casting hexes (web pages) and brewing potions (video games).</p>
                  <p>My favorite/creative hobbies are writing, game development, digital art! When I'm not doing one of those, I spend my time chilling like a villain. I'm very passionate about what I do, and always strive for excellence while avoiding perfectionism.</p>
                  <p>In 2024, I decided to quit my old job working in a warehouse for Amazon in order to become a professional developer (instead of an amateur), participating in Awesome Inc's 2024 Spring Web Developer Bootcamp. It taught me a lot about how professional development works, and taught a number of staple web technologies, such as Bootstrap, React, and Django.</p>
                  <p>I'm looking forward to using my skills to solve any problem that's handed to me, both efficiently and effectively!</p>
                </Col>
            </Container>
      </div>
    </div>
  )
}

export default About