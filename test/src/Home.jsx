import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use react-router for navigation
import './Home.css'; // Import the regular CSS file

const Home = () => {
  const [hash, setHash] = useState(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    setHash(currentHash);
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.focus();
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <main className="mainContainer">
      <div className="topContainer">
        <div className="logoContainer">
          <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/image_fx_%20(26)%20(1).jpg" alt="Logo" />
        </div>
        <div className="seperatorLineA" />
        <div className="navBarContainer">
          <ul className="navBar" id="navBar">
            <li className="home"><a href="/">Home</a></li>
            <div className="seperatorLineB" />
            <li className="apps"><a href="/apps">Apps</a></li>
            <div className="seperatorLineB" />
            <li className="faqs"><a href="/faqs">FAQs</a></li>
            <div className="seperatorLineB" />
            <li className="about"><a href="/about">About Us</a></li>
            <div className="seperatorLineB" />
            <li className="contact"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="welcomeContainer">
        <img className="welcome" src="https://assets.onecompiler.app/42xjnjtme/439pczt69/oie_8NhfbS34S3Ft.png" alt="Welcome Image" />
      </div>
      <div className="recommendedAppsContainer">
        <div className="recommendedApps">
          <a href="/apps/name" className="app2">
            <img className="imageBackground" src="https://assets.onecompiler.app/42xjnjtme/439pczt69/image_fx_%20(21).jpg" alt="App Background" />
            <div className="horizontalOriA">
              <div className="verticalOriB">
                <p className="titleA">Chinese 5000</p>
                <div className="galleryA">
                  <img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(2).webp" alt="Chinese 5000 Image 1" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(17).webp" alt="Chinese 5000 Image 2" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(18).webp" alt="Chinese 5000 Image 3" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(19).webp" alt="Chinese 5000 Image 4" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(20).webp" alt="Chinese 5000 Image 5" />
                </div>
              </div>
              <div className="togetherB">
                <div className="appDemoPhoneB"><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(2).webp" alt="App Demo 1" /></div>
                <div className="phoneAContainerB"><img className="phonePropA" src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" alt="Phone Prop" /></div>
              </div>
              <p className="descA">
                Chinese 5000 teaches 5,400 characters to form 380,000 words. It includes 52 cards for progressive learning. Users can practice calligraphy, play puzzles, and recite daily. Features include a Speak button, zoom, and AirPrint. Designed in the U.S., it supports traditional characters.
              </p>
            </div>
          </a>
          <a href="/apps/name" className="app2">
            <img className="imageBackground" src="https://assets.onecompiler.app/42xjnjtme/439pczt69/image_fx_%20(20).jpg" alt="App Background 2" />
            <div className="horizontalOriB">
              <div className="togetherB">
                <div className="appDemoPhoneB"><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(1).webp" alt="App Demo 2" /></div>
                <div className="phoneAContainerB"><img className="phonePropA2" src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" alt="Phone Prop 2" /></div>
              </div>
              <div className="verticalOriB">
                <p className="titleB">Contract Plus</p>
                <div className="galleryB">
                  <img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/460x0w%20(1).webp" alt="Contract Plus Image 1" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(13).webp" alt="Contract Plus Image 2" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(14).webp" alt="Contract Plus Image 3" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(15).webp" alt="Contract Plus Image 4" />
                  <img src="https://assets.onecompiler.app/42xjnjtme/439va3py9/460x0w%20(16).webp" alt="Contract Plus Image 5" />
                </div>
              </div>
              <p className="descB">
                Contract Plus simplifies contract management with editable templates, secure sharing, and printing. Users can quickly customize, print, and share contracts. It includes 55 templates, AirPrint support, and secure access. The interface allows easy editing, search, and data entry. Legal consultation is recommended for compliance.
              </p>
            </div>
          </a>
          <a href="/apps/name" className="app3">
            <p className="descC">
              Print from any app using Brother printers (TD, QL, MW, RJ, PT, PJ) with WiFi, Bluetooth, Direct WiFi, and MFi. Fast setup, remembers settings, and offers advanced options. View printer settings even without a connected Brother printer. Setup takes under 10 seconds, and printing is just one tap. Offers more features than AirPrint, including halftone control, media selection, and Bluetooth support.
            </p>
            <div className="togetherC">
              <div className="appDemoPhoneC"><img src="https://assets.onecompiler.app/42xjnjtme/439pczt69/460x0w.webp" alt="App Demo 3" /></div>
              <div className="phoneAContainerC"><img className="phonePropA3" src="https://assets.onecompiler.app/42xjnjtme/439sca9ca/imageedit_6_9622755702.png" alt="Phone Prop 3" /></div>
            </div>
            <div className="togetherD">
              <div className="appDemoTabletA"><img src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/1286x0w.webp" alt="Tablet Demo" /></div>
              <div className="tabletAContainerA"><img className="tabletPropA3" src="https://assets.onecompiler.app/42xjnjtme/439scc4f6/imageedit_7_6960719309.png" alt="Tablet Prop" /></div>
            </div>
            <img className="app3Img" src="https://assets.onecompiler.app/42xjnjtme/439pfatvu/1286x0w%20(1).webp" alt="App Image" />
          </a>
        </div>
      </div>
      <div className="returnTopContainer">
        <a href="#navBar"><p>Return to top</p></a>
      </div>
    </main>
  );
};

export default Home;
