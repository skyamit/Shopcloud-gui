import React from "react";
import './Footer.css'
import '../../../style/Basic.scss';

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <form className="p-20 m-20">
                        <h5 className="white text text-center">
                            Contact Us
                        </h5>
                        <div className="form-group">
                            <label className="text white" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label className="text white" htmlFor="message">Your Message / Suggestion / Complaint</label>
                            <textarea type="text" className="form-control" id="message" rows="8"placeholder="Enter your message here" required/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-12 col-lg-6 p-20">
                    <div className="team inline col-6 text-center">
                        <h5 className="white monospace">
                            Amit Kumar
                        </h5>
                        <div className="circle">
                            <img alt="profile" src="https://media-exp1.licdn.com/dms/image/D4D35AQHgKMzaGBX7fw/profile-framedphoto-shrink_400_400/0/1669886203317?e=1671433200&v=beta&t=aUVky9mu4F7xU2X7tbPZuynJHxLOz0Ksj-08S65tg94" className="img-fluid"/>
                        </div>
                        <p className="white monospace">
                            Full Stack Developer(2 years Experience)
                        </p>
                        <p className="white monospace">Amit's LinkedIn - <a href="https://www.linkedin.com/in/skyamit/" target="_blank" rel="noopener noreferrer">link</a></p>
                    </div>
                    <div className="team inline col-6 text-center">
                        <h5 className="white monospace">
                            Harjeevan Singh
                        </h5>
                        <div className="circle">
                            <img  alt="profile" src="https://media-exp1.licdn.com/dms/image/C4D03AQFo-64tysVKZg/profile-displayphoto-shrink_400_400/0/1646851696665?e=1676505600&v=beta&t=LgTGWXzlkWow7IHnZO8TNwVhGHePRbCTbBWyD0ydIvU" className="img-fluid" />
                        </div>
                        <p className="white monospace">
                            Full Stack Developer(2 years Experience)
                        </p>
                        <p className="white monospace">Harjeevan's LinkedIn - <a href="https://www.linkedin.com/in/harjeevansingh/" target="_blank" rel="noopener noreferrer">link</a></p>
                    </div>
                </div>
            </div>
            <div className="row monospace text-center bg-info white p-20">
                <p>All Rights Reserved <b>Shoploud@2022</b></p>
            </div>
        </footer>
    );
}

export default Footer;