import React from "react";
import ComponentifyLogoDark from "../../img/componentify-logo-dark.png";
import { Link } from "react-router-dom";
import "../../styles/footer.css";




export const Footer = () => {

  return (
  <footer className="container pb-5">

    <div>
      <hr style={{
        color: "#FD5812",
        border: "0px",
        height: "0px",
        textAlign: "center",
        backgroundImage: "linear-gradient(left, #fff, #FD5812, )"
      }} />

    </div>

    <div class=" text-center">
      <div class="row align-items-start">
        <div class="col">

          <div className="d-flex align-items-center">
            <img
              src={ComponentifyLogoDark}
              alt="Logo"
              width="45"
              height="39"
              className="d-inline-block align-text-start"
              style={{ marginTop: '-10px' }}
            />
            <span className="text-dark ml-2">
              <h5 id="footer-li"><strong>COMPONENTIFY</strong></h5>
            </span>
          </div>

        </div>
        <div className="col">

          <ul className="display-flex list-group">

            <li className="list-group-item border-0  p-0  m-0 text-start">
               <Link  className="text-dark" to="/docs/getting-started/introduction/" style={{ textDecoration: "none" }} id="footer-li">Docs</Link>
            </li>
            <li className="list-group-item border-0 p-0  m-0 text-start">
               <Link className="text-dark" to="/contribute" style={{ textDecoration: "none" }} id="footer-li">Contribute</Link>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul className="display-flex list-group">
            <li className="list-group-item border-0 p-0  m-0 text-start" >
              <Link className="text-dark" to="/contact" style={{ textDecoration: "none" }} id="footer-li">Contact</Link>
            </li>
            <li className="list-group-item border-0 p-0  m-0 text-start">
              <Link className="text-dark" to="/suggest" style={{ textDecoration: "none" }} id="footer-li">Suggest</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
);
 }
export default Footer;





