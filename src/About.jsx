import { Navigation } from "./Components"

//&#123; for { and &#125; for }

function About() {
  return (
    <div className="vh-100 bg-dark text-light text-center">
      <Navigation />
      <h1 className="pt-5 pb-3">&#123; About Me &#125;</h1>
      <hr/>
      <br/>
      <p>My name is Madeline Carlson, or just Maddie for short! I'm also known by my username "(Tiny)SpookyLamb"!</p>
      <p>I'm a notorious coding witch, casting hexes (web pages) and brewing potions (video games).</p>
      <p>My favorite/creative hobbies are writing, game development, digital art! Otherwise I spend my time chilling like a villain.</p>
      <p>I'm very passionate about what I do, and always strive for excellence while avoiding perfectionism.</p>
    </div>
  )
}

export default About