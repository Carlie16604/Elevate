import React from "react";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import github from './assets/github.png';
import Linkedin from './assets/Linkedin.png';
import Instagram from './assets/Instagram.webp';
import Sig from './assets/Sig.png'; 
const Iphone13Demo = () => {
  return (
    <div>
      <input type="radio" name="h" id="firstView" defaultChecked />
      <input type="radio" name="h" id="Intro_Animation" />
      <input type="radio" name="view" id="topView" />
      <input type="radio" name="view" id="rightView" />
      <input type="radio" name="view" id="bottomView" />
      <input type="radio" name="view" id="leftView" defaultChecked />
      <input type="radio" name="view" id="behindView" />
      <input type="radio" name="view" id="frontView" />
      <input type="checkbox" name="bttn" id="power" defaultChecked />
      <input type="radio" name="bttn" id="volumeup" />
      <input type="radio" name="bttn" id="volumedown" />

      <main>
        <div className="startscreen">
          <label htmlFor="Intro_Animation">
            <i className="bi bi-badge-3d"></i> <p>+</p> <i className="bi bi-apple"></i>
          </label>
        </div>
        <div className="iPadContainer">
          <div className="viewcontrols">
            <label htmlFor="topView"><i className="bi bi-caret-up-fill"></i></label>
            <label htmlFor="rightView"><i className="bi bi-caret-right-fill"></i></label>
            <label htmlFor="leftView"><i className="bi bi-caret-left-fill"></i></label>
            <label htmlFor="bottomView"><i className="bi bi-caret-down-fill"></i></label>
            <label htmlFor="frontView"><i className="bi bi-circle"></i></label>
            <label htmlFor="behindView"><i className="bi bi-arrow-counterclockwise"></i></label>
          </div>
          <div className="Phone">
            <div className="phoneSide PhoneTop">
              <div className="leftCorner corner">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i}></div>
                ))}
              </div>
              <div className="rightCorner corner">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i}></div>
                ))}
              </div>
            </div>
            <div className="phoneSide PhoneBottom">
              <div className="leftCorner corner">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i}></div>
                ))}
              </div>
              <div className="rightCorner corner">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i}></div>
                ))}
              </div>
            </div>
            <div className="phoneSide PhoneLeft"></div>
            <div className="phoneSide PhoneRight">
              <div className="powerbtn">
                <div className="powersideFront">
                  <label htmlFor="power"></label>
                </div>
                <div className="powersideRight">
                  <label htmlFor="power"></label>
                </div>
                <div className="powersideBottom">
                  <label htmlFor="power"></label>
                </div>
                <div className="powersideLeft">
                  <label htmlFor="power"></label>
                </div>
                <div className="powersideTop">
                  <label htmlFor="power"></label>
                </div>
              </div>
              <div className="volumbtn">
                <div className="volumesideFront">
                  <label htmlFor="volumeup"></label>
                  <label htmlFor="volumedown"></label>
                </div>
                <div className="volumesideRight">
                  <label htmlFor="volumeup"></label>
                  <label htmlFor="volumedown"></label>
                </div>
                <div className="volumesideBottom">
                  <label htmlFor="volumedown"></label>
                </div>
                <div className="volumesideLeft">
                  <label htmlFor="volumeup"></label>
                  <label htmlFor="volumedown"></label>
                </div>
                <div className="volumesideTop">
                  <label htmlFor="volumeup"></label>
                </div>
              </div>
            </div>
            <div className="phoneSide PhoneFront">
              <div className="screen">
                <div className="monitor">
                  <div className="notifbar">
                    <i className="bi bi-battery-full"></i>
                    <i className="bi bi-wifi"></i>
                  </div>
                  <div className="lockscreen">
                    <div className="clock">11:34</div>
                    <div className="notifications">
                      <a href="#" className="notif1" target="_blank" rel="noreferrer">
                        <figure><img src={Sig} alt="Carlie" /></figure>
                        <h3>Carlie</h3>
                        <p>Design credits to Arash.KH<i className="bi bi-balloon-heart-fill"></i></p>
                      </a>
                      <a href="https://www.instagram.com/arashkh_web/" className="notif2" target="_blank" rel="noreferrer">
                        <figure><img src={Instagram} alt="Instagram" /></figure>
                        <h3>Instagram</h3>
                        <p>Here I put my demos!</p>
                      </a>
                      <a href="https://www.linkedin.com/in/carlie-malone23/" className="notif3" target="_blank" rel="noreferrer">
                        <figure><img src={Linkedin} alt="LinkedIn" /></figure>
                        <h3>LinkedIn</h3>
                        <p>See my work here!</p>
                      </a>
                      <a href="https://github.com/Carlie16604" className="notif4" target="_blank" rel="noreferrer">
                        <figure><img src={github} alt="Github" /></figure>
                        <h3>Github</h3>
                        <p>Browse the code yourself :D</p>
                      </a>
                    </div>
                  </div>
                  {/* Turn screen on/off here */}
                  {/* <div className="off"></div> */}
                  <div className="outervol">
                    <div className="volind">
                      <div className="bar"></div>
                      <i className="bi bi-volume-up"></i>
                      <i className="bi bi-volume-down"></i>
                    </div>
                  </div>
                  <div className="lock">
                    <i className="bi bi-lock"></i>
                  </div>
                  <div className="homebtn"></div>
                  <div className="bottomshrts">
                    <div className="camera"><i className="bi bi-camera"></i></div>
                    <div className="flashlight"><i className="bi bi-lightbulb"></i></div>
                  </div>
                </div>
                <div className="topBar">
                  <div className="camera">
                    <div className="lenz"></div>
                  </div>
                  <div className="speaker"></div>
                </div>
              </div>
            </div>
            <div className="phoneSide PhoneBack">
              <div className="Applelogo">
                <i className="bi bi-apple"></i>
              </div>
              <div className="cameraSection">
                <div className="frontside cameraSides">
                  <div className="lens1">
                    <div className="outer">
                      <div className="inner"></div>
                    </div>
                  </div>
                  <div className="lens2">
                    <div className="outer">
                      <div className="inner"></div>
                    </div>
                  </div>
                  <div className="lens3">
                    <div className="outer">
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="leftside cameraSides"></div>
                <div className="rightside cameraSides"></div>
                <div className="topside cameraSides"></div>
                <div className="bottomside cameraSides"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Iphone13Demo;