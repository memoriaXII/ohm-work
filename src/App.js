import logo from "./logo.svg";
import "./App.scss";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import heroImage from "./assets/heroImage.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    var menuAnimation = gsap.timeline({ paused: true });
    var menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
    var navMain = document.getElementById("nav-main");
    var menuButton = document.getElementById("menu-button");
    var toggle = true;

    gsap.set(".link", { y: 30 });

    menuAnimation
      .to(navMain, {
        duration: 0.8,
        width: "100%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.inOut",
        x: 0,
        y: 0,
        z: 0,
      })
      .to(".link", {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      });

    menuAnimationBack
      .to(".link", {
        duration: 0.5,
        autoAlpha: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out",
      })
      .to(navMain, {
        duration: 0.55,
        width: 0,
        clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
        ease: "power4.in",
        x: 0,
        y: 0,
        z: 0,
      });

    menuButton.onclick = function () {
      toggle = !toggle;
      toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
    };

    const headerImg = document.querySelector(".header-img");
    if (headerImg) {
      console.log(headerImg, "headerimg");

      let t1 = gsap.timeline();

      t1.from(
        ".imsrk2",
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        0
      );

      t1.from(".cover-5", {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        delay: 0.2,
        opacity: 0.5,
      });

      t1.from(".logo", {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      t1.from(".gradient-block", {
        xPercent: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
      });

      t1.from(
        ".item",
        {
          xPercent: 100,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: "left",
          },
        },
        2
      );

      t1.from(
        ".header-img",
        {
          xPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        2.2
      );

      t1.from(
        ".heading",
        {
          xPercent: 100,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        2.2
      );

      t1.from(
        ".sub-heading",
        {
          xPercent: 100,
          opacity: 0,
          duration: 1.1,
          ease: "power1.out",
        },
        2.2
      );

      t1.from(
        ".button",
        {
          yPercent: 100,
          opacity: 0,
          duration: 2,
          ease: "bounce",
        },
        2.5
      );
      window.addEventListener("mousemove", (e) => {
        var xPos = e.clientX / headerImg.clientWidth - 0.5,
          yPos = e.clientY / headerImg.clientHeight - 0.5;

        gsap.to(".header-img", 1, {
          rotationY: xPos * 10,
          rotationX: yPos * 10,
          ease: Power1.easeOut,
        });
      });
    }
    return () => {
      window.removeEventListener("mousemove", (e) => {
        var xPos = e.clientX / headerImg.clientWidth - 0.5,
          yPos = e.clientY / headerImg.clientHeight - 0.5;

        gsap.to(".header-img", 1, {
          rotationY: xPos * 10,
          rotationX: yPos * 10,
          ease: Power1.easeOut,
        });
      });
    };
  }, []);

  return (
    <div>
      <div class="cover-5">
        <nav id="nav-main" class="skew">
          <ul>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link longer</li>
          </ul>
        </nav>
        <button
          id="menu-button"
          class="menu-button"
          style={{ mixBlendMode: "exclusion" }}
        >
          +
        </button>
        <div class="gradient-block"></div>
        <header>
          {/* <img class="logo" src="https://i.imgur.com/ZFnSyPe.png" alt="" /> */}
          <span style={{ color: "white" }}>Morre Dao</span>

          <ul class="items">
            <li class="item">Staked</li>
            <li class="item">Bond</li>
            <li class="item">FAQS</li>
          </ul>
        </header>

        <div class="container">
          <div class="right">
            <h1 class="heading">
              <span>Introducing</span>
              <br />
              MORRE DAO
            </h1>
            <p class="sub-heading">
              MORRE DAO is building a community-owned decentralized financial
              infrastructure to bring more stability and transparency for the
              world.
            </p>

            <a class="button" href="#">
              Learn More
            </a>
          </div>

          <div class="left">
            <img class="header-img" src={heroImage} alt="" />
          </div>
        </div>
      </div>

      <div class="imsrk2">MORRE Dao</div>
    </div>
  );
}

export default App;
