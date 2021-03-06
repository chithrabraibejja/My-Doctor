import React, { Component } from 'react';
class Header extends Component {
    state = {}
    render() {
        return (<React.Fragment>
            <nav className="navbar py-4 navbar-expand-lg ftco_navbar navbar-light bg-light flex-row">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-lg-2 pr-4 align-items-center">
                            <a className="navbar-brand" href="index.php">Med<span>Tech</span></a>
                        </div>
                        <div className="col-lg-10 d-none d-md-block">
                            <div className="row d-flex">
                                <div className="col-md-4 pr-4 d-flex topper align-items-center">
                                    <div className="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span className="icon-map"></span></div>
                                    <span className="text">Address: 198 21th Street, Suite 721 MANGALORE 10016</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                                    <span className="text">Email: youremail@email.com</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                                    <span className="text">Phone: + 9656462902</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
	      </button>
                    <p className="button-custom order-lg-last mb-0"><a href="appoint/appointment.php" className="btn btn-secondary py-2 px-3">Make An Appointment</a></p>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a href="index.php" className="nav-link pl-0">Home</a></li>
                            <li className="nav-item"><a href="doctor.php" className="nav-link">Doctor</a></li>
                            <li className="nav-item"><a href="Prescription.php" className="nav-link">Prescription</a></li>
                            <li className="nav-item"><a href="report.php" className="nav-link">Report</a></li>
                            <li className="nav-item"><a href="viewbill.php" className="nav-link">Bill</a></li>
                            <li className="nav-item"><a href="about.php" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="contact.php" className="nav-link">Contact</a></li>
                            <li className="nav-item"><a href="login.php" className="nav-link">Logout</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>);
    }
}

export default Header;