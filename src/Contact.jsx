

function Contact() {
    return (
        <div class="contact-body">
            <div class="container contact-card-wrapper vh-100">
                <div class="row m-1 d-flex justify-content-center align-items-center">
                    <div class="col-12 col-lg-6 vh-100 d-flex flex-column justify-content-evenly">
                        <div class="row d-flex m-3 justify-content-center">
                            <div class="col-6 d-flex justify-content-center">
                                <a href="https://spookylamb.github.io/blog/">
                                    <img src="img/avi.png" class="rounded-circle contact-avatar-pic mx-auto" alt="An avatar picture."/>
                                </a>
                            </div>
                        </div>
                        <div class="container d-flex flex-column justify-content-evenly p-1">
                            <div class="col contact-box p-2 rounded">
                                
                                <div class="row align-items-center d-flex justify-content-evenly py-4">

                                    <h2 class="text-center pt-1 pb-4">Madeline Carlson</h2>
                                    
                                    <div class="col-12 d-flex justify-content-center">
                                        <a href="mailto:madeline.carlson.business@gmail.com">
                                            <img src="img/icons/Email.svg" class="link-icon" alt="Email"/>
                                        </a>
                                    </div>
                                </div>
                                
                                <hr/>

                                <div class="row align-items-center d-flex justify-content-evenly pt-4 pb-5">
                                    <div class="col-12 d-flex justify-content-center">
                                        <a href="https://github.com/SpookyLamb">
                                            <img src="img/icons/Github.svg" class="link-icon" alt="Github" />
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