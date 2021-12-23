import React from "react";
import "./Navbar.css";
import icon from "../images/Abstract Circle 1.svg";
import svg1 from "../images/Cloud_database_Svg 1.svg";
import svg2 from "../images/security_SVG 1.svg";
import svg3 from "../images/Phone 1.svg";
import facebook from "../images/FacebookLogo.svg";
import instagram from "../images/InstagramLogo.svg";
import twitter from "../images/TwitterLogo.svg";
import union from "../images/Union.svg";
import clipboardtext from "../images/ClipboardText.svg";
import printer from "../images/Printer.svg";
import shield from "../images/ShieldCheck.svg";

function Navbar() {
  return (
    < div className="maindiv">
      <div className="main-container">
        <nav className="container">
          <img src={icon} alt="Not find" className="title-image" />
          <div className="title">Third eye</div>
          <ul className="list item1" id="about">
            About{" "}
          </ul>
          <ul className="list item2">Help</ul>
          <ul className="list item3">Feature</ul>
          <ul className="list item4">Signup</ul>
          <ul className="list item5">
            <div
              style={{ position: "relative", bottom: "3px" }}
              className="request"
            >
              Request demo
            </div>
          </ul>
        </nav>
      </div>
      <box1 className="box1">
        <div className="heading1">Save your data storage here.</div>
        <div className="content1">
          Insignia is a data storage area that has been tested for security, so
          you can store your data here safely but not be afraid of being stolen
          by others.
        </div>
        <div className="learn-more1">Learn more</div>
        <img src={svg1} alt="" className="svg1" />
      </box1>
      <box2 className="box2">
        <img src={svg2} alt="" className="svg2" />
        <div className="heading2">We are a high-levelx data storage bank</div>
        <div className="content2">
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.
        </div>
      </box2>
      <box2_5 className="box2-5">
        <div className="boxes2-5">
          <img src={clipboardtext} alt="" className="img2-5" />
          <div className="">search</div>
          <div>
            Don’t worry if your data is very large, Insignia provides a search
            engine, which is useful for making it easier to find data
            effectively saving time.
          </div>
          <div>Learn more</div>
        </div>
        <div className="boxes2-5">
          <img src={printer} alt="" className="img2-5 " />
          <div>Printout</div>
          <p>
            Print out service gives you convenience if someday you need print
            data, just edit it all and just print it.
          </p>
          <div>Learn more</div>
        </div>
        <div className="boxes2-5">
          <img src={shield} alt="" className="img2-5" />
          <div>Security code</div>
          <p>
            Data Security is one of our best facilities. Allows for your files
            to be safer. The file can be secured with a code or password that
            you created, so only you can open the file.
          </p>

          <div>Learn more</div>
        </div>
      </box2_5>
      <box3 className="box3">
        <img src={svg3} alt="" className="svg3" />
        <div className="heading3">Download Our App</div>
        <div className="content3">
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.=
        </div>
        <div className="download">Download</div>
      </box3>

      <hr className="line" />
      <box5 className="box5">
        {/* <img src={icon} alt=""  className="title-image"/> */}
        <div className="last-heading">Try for free!</div>
        <div className="learn-more2">Learn more</div>
        <div className="request1">Request demo</div>
      </box5>
      <div className="text1">Get limited 1 week free try our features!</div>
      <lastbox className="lastbox">
        <div className="container1">
          <div className="insignia">
            <img src={icon} alt="" className="icon" />
            <div className="title2">Insignia</div>
          </div>
          <div className="text3 text">
            Insignia Society, 234 <br /> Bahagia Ave Street PRBW 29281
          </div>
          <div className="text4 text">
            info@insignia.com <br /> 1-232-3434 (Main)
          </div>
          <div className="text5 text">
            © Insignia™, 2020. All rights reserved.
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <div className="container2">
          <ul>
            <ul className="text  list1 ">About</ul>
            <ul className="text list2">profile</ul>
            <ul className="text list3">feature</ul>
            <ul className="text list4">careers</ul>
            <ul className="text list5">dw news</ul>
          </ul>
        </div>
        </div>
        <div className="container3">
          <ul>
            <ul className="text list1">Help</ul>
            <ul className="text list2">support</ul>
            <ul className="text list3">signup</ul>
            <ul className="text list4">guide</ul>
            <ul className="text list5">report</ul>
            <ul className="text list6">Q and ans</ul>
          </ul>
        </div>
        <div className="container4">
          <div className="social-media text">Social media </div>
          <div style={{ display: "flex" }}>
            <div className="boxes">
              <img src={facebook} alt="" className="image2" />
            </div>
            <div className="boxes">
              <img src={instagram} alt="" />
            </div>
            <div className="boxes">
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="boxes  messege-box ">
            <div
              style={{
                position: "relative",
                left: "20px",
                bottom: "5px",
                color: "#E5E5E5",
              }}
            >
              ...
            </div>
            <img src={union} alt="" />
          </div>
        </div>
      </lastbox>
    </div>
  );
}

export default Navbar;
