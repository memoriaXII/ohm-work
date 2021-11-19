import logo from "./logo.svg";
import "./App.scss";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import heroImage from "./assets/heroImage.png";

import ScrollOut from "scroll-out";
import Splitting from "splitting";

import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Scroll Scenes

  useEffect(() => {
    let bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
    });
    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(image, { height: 0 });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    var texts = gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scroller: ".scroller",
      scrub: true,
      markers: false,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true,
    });
  }, []);

  useEffect(() => {
    var menuAnimation = gsap.timeline({ paused: true });
    var menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
    var navMain = document.getElementById("nav-main");
    var menuButton = document.getElementById("menu-button");
    var toggle = true;

    gsap.set(".link", { y: 30 });

    menuAnimation
      .to(navMain, {
        duration: 1,
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
        opacity: 1,
      });

      t1.from(".logo", {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      t1.from(".reveal--2", {
        opacity: 0.3,
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
          duration: 2.5,
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
      window.removeEventListener("mousemove", (e) => {});
    };
  }, []);

  useEffect(() => {
    const results = Splitting();
    const glitches = "`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/".split("");

    for (let r = 0; r < results.length; r++) {
      const chars = results[r].chars;
      for (let c = 0; c < chars.length; c++) {
        chars[c].style.setProperty("--count", Math.random() * 5 + 1);
        for (let g = 0; g < 10; g++) {
          chars[c].style.setProperty(
            `--char-${g}`,
            `"${glitches[Math.floor(Math.random() * glitches.length)]}"`
          );
        }
      }
    }
    ScrollOut({
      scrollingElement: ".cover-5",
      targets: "p",
    });
  }, []);

  return (
    <div>
      <div class="scroller">
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
                <strong>Introducing</strong>
                <p
                  style={{ marginTop: 20, maxWidth: 1000 }}
                  class="reveal--2"
                  aria-hidden="true"
                  data-scroll="out"
                  data-splitting=""
                >
                  MORRE DAO
                </p>
              </h1>
              <p class="sub-heading" style={{ opacity: 0.5, maxWidth: 600 }}>
                MORRE DAO is building a community-owned decentralized financial
                infrastructure to bring more stability and transparency for the
                world.
              </p>
              <br />
              <a class="button" href="#">
                Learn More
              </a>
            </div>
            <div class="left">
              <img class="header-img" src={heroImage} alt="" />
            </div>
          </div>
          <section class="black">
            <div class="text-wrap">
              <div class="panel-text blue-text">Blue</div>
              <div class="panel-text red-text">Red</div>
              <div class="panel-text orange-text">Orange</div>
              <div class="panel-text purple-text">Purple</div>
            </div>

            <div class="p-wrap">
              <div class="panel blue"></div>
              <div class="panel red"></div>
              <div class="panel orange"></div>
              <div class="panel purple"></div>
            </div>
          </section>
        </div>
        <div class="imsrk2">MORRE Dao</div>
      </div>
    </div>
  );
}

export default App;
