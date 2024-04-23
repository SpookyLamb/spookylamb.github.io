import { Link } from "react-router-dom"

function App() {
  return (
    <div className="main-wrapper">
      <section id="home">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-fill justify-content-center">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="https://spookylamb.github.io/blog/">Blog</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="contact.html">Contact</a>
                      </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="hero-content section d-flex fullscreen vh-100 bg-dark">
              <div className="container d-flex flex-column justify-content-evenly mx-auto" id="main-wrapper">
                  <div className="row">
                      <div className="col-12 text-center text-white">
                          <h1 className="font-monospace text-10">"&#123; HELLO FRIEND &#125;"</h1>
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
