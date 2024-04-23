import { Navigation } from "./Components"

function App() {
  return (
    <div className="main-wrapper">
      <section id="home">
        <Navigation />
        <div className="hero-content section d-flex fullscreen vh-100 bg-dark">
            <div className="container d-flex flex-column justify-content-evenly mx-auto" id="main-wrapper">
                <div className="row">
                    <div className="col-12 text-center text-white">
                        <h1 className="font-monospace text-header">&#123; HELLO FRIEND &#125;</h1>
                        <h2 className="text-decoration-underline pb-2 text-danger">I'm Maddie!</h2>
                        <img src="./img/avi.png" alt="A cute picture." className="rounded-circle p-3 funny-icon"></img>
                    </div>
                </div>
                <div className="row text-white text-center">
                    <h3 className="font-monospace">&#123; I'm a full-stack Web Developer! &#125;</h3>
                    <h6>(And a very spooky game developer, too!)</h6>
                </div>
                <div className="row text-white text-center">
                    <h3 className="font-monospace">&#123; Wanna see what I can do? &#125;</h3>
                    <h4>(Then scroll down!)</h4>
                    <h6>(If you dare!)</h6>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}


export default App
