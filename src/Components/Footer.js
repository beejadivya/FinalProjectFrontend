import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>Handy mandy</h1>
            <h3 className="list-unstyled">
              <li>91+9849223924</li>
              <li>5th Floor, "B" Block, Divyasree Omega, Hitech City Road, Kondapur, Hyderabad, Telangana 500081</li>
            </h3>
          </div>  
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} handy mandy | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;