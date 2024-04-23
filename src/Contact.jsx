

function Contact() {
    return (
        <div className="contact-body">
            <div className="container contact-card-wrapper vh-100">
                <div className="row m-1 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-lg-6 vh-100 d-flex flex-column justify-content-evenly">
                        <div className="row d-flex m-3 justify-content-center">
                            <div className="col-6 d-flex justify-content-center">
                                <a href="https://spookylamb.github.io/blog/">
                                    <img src="img/avi.png" className="rounded-circle contact-avatar-pic mx-auto" alt="An avatar picture."/>
                                </a>
                            </div>
                        </div>
                        <div className="container d-flex flex-column justify-content-evenly p-1">
                            <div className="col contact-box p-2 rounded">
                                
                                <div className="row align-items-center d-flex justify-content-evenly py-4">

                                    <h2 className="text-center pt-1 pb-4">Madeline Carlson</h2>
                                    
                                    <div className="col-12 d-flex justify-content-center">
                                        <a href="mailto:madeline.carlson.business@gmail.com">
                                            <img src="img/icons/Email.svg" className="link-icon" alt="Email"/>
                                        </a>
                                    </div>
                                </div>
                                
                                <hr/>

                                <div className="row align-items-center d-flex justify-content-evenly pt-4 pb-5">
                                    <div className="col-12 d-flex justify-content-center">
                                        <a href="https://github.com/SpookyLamb">
                                            <img src="img/icons/Github.svg" className="link-icon" alt="Github" />
                                        </a>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact