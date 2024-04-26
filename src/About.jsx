import { Navigation } from "./Components"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

//&#123; for { and &#125; for }

function About() {
  return (
    <div className="vh-100 bg-dark text-light text-center">
      <Navigation />

      <div className="vh-100 px-1 py-5">
            <Container>
                <Col xs={12} lg={8} className="mx-auto border p-3 text-light">
                  <h1 className="pt-5 pb-3">&#123; About Me &#125;</h1>
                  <hr/>
                  <br/>
                  <p>My name is Madeline Carlson, or just Maddie for short! I'm also known by my username "(Tiny)SpookyLamb"! I'm a notorious coding witch, casting hexes (web pages) and brewing potions (video games).</p>
                  <p>My favorite/creative hobbies are writing, game development, digital art! Otherwise I spend my time chilling like a villain. I'm very passionate about what I do, and always strive for excellence while avoiding perfectionism.</p>
                </Col>
            </Container>
      </div>
    </div>
  )
}

export default About