import React, { Component } from 'react'
class docapp extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="home-slider owl-carousel">
                    <div className="slider-item" style={{ backgroundImage: `url(${"/images/bg_1.jpg"})` }} data-stellar-background-ratio="0.5">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div className="col-md-6 text ftco-animate">
                                    <h1 className="mb-4">Helping Your <span>Stay Happy One</span></h1>
                                    <h3 className="subheading">Everyday We Bring Hope and Smile to the Patient We Serve</h3>
                                    <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">View our works</a></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="slider-item" style={{ backgroundImage: `url(${"/images/bg_2.jpg"})` }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div className="col-md-6 text ftco-animate">
                                    <h1 className="mb-4">We Care <span>About Your Health</span></h1>
                                    <h3 className="subheading">Your Health is Our Top Priority with Comprehensive, Affordable medical.</h3>
                                    -<p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">View our works</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-services ftco-no-pb">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-doctor"></span>
                                    </div>
                                    <div className="media-body p-2 mt-3">
                                        <h3 className="heading">Qualitfied Doctors</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>-
              </div>
                            </div>
                            <div className="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-ambulance"></span>
                                    </div>
                                    <div className="media-body p-2 mt-3">
                                        <h3 className="heading">Emergency Care</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-stethoscope"></span>
                                    </div>
                                    <div className="media-body p-2 mt-3">
                                        <h3 className="heading">Outdoor Checkup</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-24-hours"></span>
                                    </div>
                                    <div className="media-body p-2 mt-3">
                                        <h3 className="heading">24 Hours Service</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default docapp;