import React from "react";
import './Footer.css'
import '../../../style/Basic.scss';

function AdminFooter() {
    return (
        <footer className="container-fluid">
            <div className="row justify-content-center">
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
            </div>
            <div className="row monospace text-center bg-info white p-20">
                <p>All Rights Reserved <b>Shoploud@2022</b></p>
            </div>
        </footer>
    );
}

export default AdminFooter;