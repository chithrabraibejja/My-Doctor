import React, { Component } from 'react'

class footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2 logo">Med<span>Tech</span></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Fransis,Mangalore</span></li>
                                        <li><span className="icon icon-phone"></span><span className="text">+ 8723545397</span></li>
                                        <li><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></li>
                                    </ul>
                                </div>

                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                    <li className="ftco-animate"><span className="icon-twitter"></span></li>
                                    <li className="ftco-animate"><span className="icon-facebook"></span></li>
                                    <li className="ftco-animate"><span className="icon-instagram"></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2">Recent Blog</h2>
                                <div className="block-21 mb-4 d-flex">
                                    <div className="text">
                                        <h3 className="heading">Even the all-powerful Pointing has no control about</h3>
                                        <div className="meta">
                                            <div><span className="icon-calendar"></span> Dec 25, 2018</div>
                                            <div><span className="icon-person"></span> Admin</div>
                                            <div><span className="icon-chat"></span> 19</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  </div>
                </div>



            </React.Fragment>













        );
    }
}

export default footer;