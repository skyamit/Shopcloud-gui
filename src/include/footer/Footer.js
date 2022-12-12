import React from "react";
import './Footer.css'
import '../Basic.css';

function Footer() {
    return (
        <footer>
            <div className="row ">
                <div className="col-12 col-lg-6">
                    <form className="p-20 m-20">
                        <h3 className="white text text-center">
                            Contact Us
                        </h3>
                        <div class="form-group">
                            <label className="text white" for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div class="form-group">
                            <label className="text white" for="message">Your Message/Suggestion/Complaint</label>
                            <textarea type="text" class="form-control" id="message" placeholder="Enter your message here" required/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="team inline col-6 text-center">
                        <p className="white monospace">
                            Amit Kumar
                        </p>
                        <div className="circle">
                            <img src="https://media-exp1.licdn.com/dms/image/D4D35AQHgKMzaGBX7fw/profile-framedphoto-shrink_400_400/0/1669886203317?e=1671433200&v=beta&t=aUVky9mu4F7xU2X7tbPZuynJHxLOz0Ksj-08S65tg94" className="img-fluid"/>
                        </div>
                        <p className="white monospace">
                            Full Stack Developer(2 years Experience)
                        </p>
                        <p className="white monospace">Amit's LinkedIn - <a href="https://www.linkedin.com/in/skyamit/" target="_blank" >link</a></p>
                    </div>
                    <div className="team inline col-6 text-center">
                        <p className="white monospace">
                            Harjeevan Singh
                        </p>
                        <div className="circle">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFo-64tysVKZg/profile-displayphoto-shrink_400_400/0/1646851696665?e=1676505600&v=beta&t=LgTGWXzlkWow7IHnZO8TNwVhGHePRbCTbBWyD0ydIvU" className="img-fluid" />
                        </div>
                        <p className="white monospace">
                            Full Stack Developer(2 years Experience)
                        </p>
                        <p className="white monospace">Harjeevan's LinkedIn - <a href="https://www.linkedin.com/in/harjeevansingh/" target="_blank" >link</a></p>
                    </div>
                </div>
            </div>
            <div className="row monospace text-center white">
                <p>All Rights Reserved <b>Shoploud@2022</b></p>
            </div>
        </footer>
    );
}

export default Footer;