import logo from "./assets/logo.svg";
import "./App.scss";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

import heroImage from "./assets/heroImage.png";
import coinImage from "./assets/Cam2.png";
import stakeImage from "./assets/stake.png";
import chart from "./assets/chart.svg";

import ScrollOut from "scroll-out";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [cookiesClose, setCookiesClose] = useState(true);
  useEffect(() => {
    gsap.set("svg", { visibility: "visible" });

    const tl = gsap.timeline();
    const t2 = gsap.timeline({ repeat: 1, repeatDelay: 1 });

    // );

    tl.from(
      "#word1 > path",
      {
        transformOrigin: "center bottom",
        xPercent: -50,
        opacity: 0,
        scale: 0.1,
        stagger: -0.1,
        duration: 1,
        ease: "power4.out",
      },
      0
    );

    tl.from(
      "#word2 > path",
      {
        transformOrigin: "center bottom",
        xPercent: 0,
        opacity: 0,
        scale: 1,
        stagger: -0.1,
        duration: 1,
        ease: "power4.out",
      },
      1
    );

    t2.from(
      "#wordLogo > path",
      {
        transformOrigin: "center",
        xPercent: 0,
        opacity: 1,
        scale: 1,
        stagger: -0.3,
        duration: 2,
        ease: "power4.out",
      },
      0
    );

    t2.from(
      "#wordLogo2 > path",
      {
        transformOrigin: "center",
        xPercent: 0,
        opacity: 0,
        scale: 0.1,
        stagger: -0.3,
        duration: 2,
        ease: "power4.out",
      },
      0.5
    );

    //
  }, []);
  // Scroll Scenes
  useEffect(() => {
    var menuAnimation = gsap.timeline({ paused: true });
    var menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
    var navMain = document.getElementById("nav-main");
    var menuButton = document.getElementById("menu-button");
    var toggle = true;

    gsap.set(".link", { y: 30 });

    menuAnimation
      .to(navMain, {
        duration: 1.5,
        width: "100%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.inOut",
        x: 0,
        y: 0,
        z: 0,
      })
      .to(".link", {
        duration: 1,
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

      t1.to(".line--top", 0.6, {
        width: "100%",
        ease: "power2.easeIn",
        opacity: 0,
      })
        .to(".line--right", 0.6, {
          height: "100%",
          ease: "power0.easeNone",
          opacity: 0,
        })
        .to(".line--bottom", 0.6, {
          width: "100%",
          ease: "power0.easeNone",
          opacity: 0,
        })
        .to(".line--left", 0.6, {
          height: "100%",
          ease: "power2.easeOut",
          opacity: 0,
        });

      t1.from(
        ".imsrk2",
        {
          yPercent: -50,
          duration: 2,
          ease: "power1.out",
          scale: 2,
          autoAlpha: 1,
        },
        0
      );

      t1.from(
        ".menu-button",
        {
          ease: "power1.out",
          autoAlpha: 0,
          opacity: 0,
        },
        2
      );

      t1.from(
        ".cookies",
        {
          ease: "power1.out",
          autoAlpha: 0,
          opacity: 0,
        },
        0
      );

      t1.to(".cookies", { opacity: 1, autoAlpha: 1 }, 2);

      // t1.from(
      //   ".menu-button",
      //   {
      //     autoAlpha: 1,
      //     opacity: 1,
      //   },
      //   2
      // );

      t1.to(
        ".imsrk2",
        {
          autoAlpha: 0,
        },
        2
      );

      t1.fromTo(".cover-5", 2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });

      t1.from(".logo", {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });

      t1.from(".reveal--2", {
        opacity: 0.9,
        duration: 0.5,
        ease: "power1.out",
      });

      t1.from(
        ".gradient-block",
        {
          yPercent: 200,
          opacity: 0,
          ease: "power1.out",
        },
        4
      );

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
        ".heading",
        {
          xPercent: 100,
          opacity: 0,
          duration: 0.5,
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
        ".header-img",
        {
          xPercent: -50,
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        2.5
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
      // window.addEventListener("mousemove", (e) => {
      //   var xPos = e.clientX / headerImg.clientWidth - 0.5,
      //     yPos = e.clientY / headerImg.clientHeight - 0.5;

      //   gsap.to(".header-img", 1, {
      //     rotationY: xPos * 10,
      //     rotationX: yPos * 10,
      //     ease: Power1.easeOut,
      //   });
      // });
    }
    return () => {
      window.removeEventListener("mousemove", (e) => {});
    };
  }, []);

  useEffect(() => {
    const results = Splitting();
    const glitches = "`¡™£¢∞§¶•ªº–≠å∞∞ƒ©˙∆˚¬…∞≈ç∞∞˜µ≤≥÷/?∞∞∞<>/".split("");

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
      <div class="line line--top"></div>
      <div class="line line--right"></div>
      <div class="line line--bottom"></div>
      <div class="line line--left"></div>
      <nav id="nav-main" class="skew">
        <ul>
          <li class="link">Staked</li>
          <li class="link">Bond</li>
          <li class="link">FAQS</li>
          <li class="link">Enter App</li>
        </ul>
      </nav>

      <button
        id="menu-button"
        class="menu-button"
        style={{ mixBlendMode: "exclusion" }}
      >
        <div class="menu-bars" id="menuBox">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </button>

      <div class="cover-5">
        <div class="o-intro__scroll">
          <span class="o-intro__scroll-label">MORSEDAO</span>
          <div class="o-intro__scroll-line"></div>
        </div>
        <div class="gradient-block"></div>
        <header>
          <svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <g id="word2" fill="#fff"> */}
            <g id="wordLogo">
              <path
                class="path"
                d="M15.5999 5.24301C15.5332 5.24834 15.3119 5.27234 15.1066 5.29634C11.5706 5.68834 8.42658 7.76834 6.65325 10.8937C5.74125 12.4963 5.25325 14.283 5.21325 16.1603C5.14925 19.171 6.29058 22.043 8.41058 24.2083C9.66658 25.491 11.2772 26.483 12.9866 27.0243C14.1706 27.3977 15.2346 27.5523 16.5332 27.5337C17.2986 27.523 17.6532 27.491 18.3412 27.3737C20.2132 27.0483 22.0426 26.195 23.5252 24.9523C26.3386 22.6003 27.7999 19.0803 27.4932 15.4137C27.1652 11.5283 24.7759 8.05634 21.2532 6.34434C20.1252 5.795 18.9786 5.45901 17.6532 5.29367C17.3332 5.25101 15.8879 5.21901 15.5999 5.24301ZM17.4799 6.25634C19.4959 6.47767 21.4399 7.31234 22.9599 8.611C23.1999 8.81633 23.9012 9.50433 23.9786 9.60833L24.0319 9.68567L20.7866 12.9203C18.2186 15.4803 17.5332 16.179 17.5066 16.259C17.4772 16.3443 17.4772 16.3737 17.5066 16.4457C17.5439 16.531 18.1359 17.1283 18.2506 17.1923C18.3279 17.2377 18.4106 17.235 18.5252 17.187C18.6532 17.1337 24.1439 11.667 24.2319 11.507C24.3119 11.3603 24.3572 10.8803 24.3386 10.3977C24.3306 10.195 24.3279 10.027 24.3306 10.027C24.3492 10.027 24.7706 10.603 24.9146 10.827C25.7786 12.1657 26.2799 13.5577 26.4986 15.2137C26.5626 15.7177 26.5626 17.0457 26.4959 17.5603C26.2719 19.3043 25.7066 20.795 24.7359 22.203C24.6239 22.3657 24.4906 22.547 24.4399 22.603L24.3492 22.707L24.3466 22.059V21.4137L24.2746 21.3843C24.2052 21.3577 24.1706 21.3897 23.2079 22.3523C22.4159 23.1443 22.2212 23.3523 22.2452 23.3817C22.2852 23.4297 22.4052 23.491 22.4532 23.4883C22.4746 23.4857 22.7572 23.4883 23.0799 23.4883L23.6639 23.4937L23.5066 23.6563C22.5092 24.6723 21.0052 25.5897 19.5546 26.0643C18.4666 26.419 17.5652 26.5603 16.3999 26.563C15.2559 26.563 14.3652 26.4323 13.3466 26.1177C11.8399 25.651 10.2906 24.723 9.25325 23.6697L9.08258 23.4937H9.47191C9.68791 23.4937 9.92525 23.4803 9.99991 23.4643C10.1279 23.4377 10.1306 23.435 10.0852 23.3923C10.0266 23.339 8.84258 22.0297 8.66658 21.8243C8.56525 21.707 8.53591 21.6857 8.47991 21.6963C8.44258 21.7043 8.40791 21.715 8.40258 21.7203C8.38391 21.739 8.38125 21.843 8.37591 22.2803L8.37325 22.707L8.14925 22.4003C7.07991 20.947 6.42925 19.2483 6.22925 17.387C6.17858 16.9203 6.19191 15.651 6.25058 15.1737C6.35191 14.371 6.55458 13.5417 6.82658 12.8083C6.98925 12.3737 7.36258 11.595 7.59725 11.2003C7.76791 10.915 8.21058 10.267 8.33591 10.1203L8.40258 10.0403L8.38125 10.347C8.33591 10.9977 8.37591 11.3683 8.52258 11.659C8.60258 11.8137 8.80258 12.0377 8.96525 12.1497C9.02658 12.1923 9.22658 12.379 9.41058 12.5657C9.59458 12.7497 10.7119 13.8403 11.8932 14.9897C13.0746 16.1363 14.3039 17.3363 14.6266 17.651C14.9492 17.9683 15.8746 18.8777 16.6799 19.6697C17.4879 20.4643 18.1866 21.131 18.2319 21.155C18.3306 21.2083 18.4319 21.2137 18.5146 21.171C18.5466 21.155 18.7332 20.979 18.9279 20.7843C19.2212 20.483 19.2799 20.411 19.2799 20.3443C19.2799 20.275 19.2052 20.1923 18.7412 19.739C18.4452 19.451 17.1919 18.2243 15.9599 17.0137C11.4932 12.6243 8.79458 10.0003 8.65591 9.899L8.55991 9.83233L8.75458 9.619C9.22125 9.09633 9.71991 8.64034 10.2612 8.23234C11.8319 7.05367 13.7172 6.35234 15.6799 6.21634C16.1252 6.187 17.0186 6.20567 17.4799 6.25634Z"
                fill="white"
              />
            </g>

            <g id="wordLogo2" fill="#fff">
              <path
                class="path"
                d="M24.0932 13.6188C23.9919 13.6695 23.4105 14.2375 21.7439 15.9042C20.5252 17.1229 19.5146 18.1469 19.4959 18.1789C19.4799 18.2109 19.4666 18.2749 19.4666 18.3229C19.4666 18.4029 19.5119 18.4562 19.8719 18.8055C20.2399 19.1655 20.2852 19.2002 20.3705 19.2002C20.4239 19.2002 20.5039 19.1762 20.5465 19.1469C20.5919 19.1202 21.1065 18.6109 21.6932 18.0189C22.2799 17.4269 23.0505 16.6615 23.4025 16.3175C24.0959 15.6455 24.2292 15.4802 24.3225 15.1735C24.3812 14.9762 24.3865 14.8695 24.3652 14.2428C24.3492 13.8055 24.3092 13.5468 24.2559 13.5468C24.2399 13.5495 24.1679 13.5815 24.0932 13.6188Z"
                fill="white"
              />
              <path
                class="path"
                d="M8.4426 13.848C8.40793 13.944 8.39726 14.088 8.39193 14.6694L8.3866 15.3734L8.4586 15.52C8.5386 15.68 8.67993 15.8267 10.2933 17.3894C11.3253 18.3894 11.9733 19.0267 14.3679 21.3814C15.3279 22.3254 16.1493 23.12 16.1946 23.1494C16.2906 23.208 16.4133 23.2134 16.4986 23.1654C16.5333 23.1467 16.7093 22.984 16.8906 22.8027C17.2453 22.4534 17.2879 22.3814 17.2186 22.248C17.1973 22.208 16.8453 21.8507 16.4373 21.4534C16.0266 21.0587 14.7466 19.8054 13.5866 18.6667C9.21326 14.376 8.55193 13.7334 8.5066 13.7334C8.49593 13.7334 8.4666 13.784 8.4426 13.848Z"
                fill="white"
              />
              <path
                class="path"
                d="M24.0372 17.5819C23.9519 17.6485 23.1465 18.4379 22.2505 19.3365C20.6932 20.8992 20.6159 20.9819 20.5225 21.1739C20.4025 21.4219 20.3625 21.6352 20.3865 21.8805C20.3972 21.9819 20.4025 22.3099 20.4025 22.6059L20.3999 23.1445L20.5519 23.0405C20.6372 22.9845 21.4719 22.1765 22.4185 21.2352C23.9945 19.6672 24.1358 19.5205 24.2105 19.3605C24.3305 19.1045 24.3492 18.9232 24.3412 18.1605L24.3332 17.4805L24.2638 17.4725C24.2158 17.4672 24.1465 17.5019 24.0372 17.5819Z"
                fill="white"
              />

              <path
                class="path"
                d="M8.45602 17.7764C8.37868 18.0644 8.37068 18.1844 8.37868 18.7524L8.38668 19.347L8.47468 19.5097C8.54668 19.643 8.81068 19.915 10.0187 21.0963C11.512 22.5576 12.128 23.147 12.16 23.147C12.1707 23.147 12.2 23.1016 12.224 23.0456C12.264 22.9576 12.2694 22.8563 12.2614 22.187L12.2534 21.427L12.1814 21.307C12.112 21.187 9.17602 18.299 8.56802 17.7497L8.48268 17.675L8.45602 17.7764Z"
                fill="white"
              />
            </g>
          </svg>

          <span style={{ color: "white" }}>MorseDao</span>

          <ul class="items">
            <li class="item">Staked</li>
            <li class="item">Bond</li>
            <li class="item">FAQS</li>
            <li className="item">
              <a class="login-button" href="#">
                Enter App
              </a>
            </li>
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
                Morse
                <br />
                DAO
              </p>
            </h1>
            <p class="sub-heading" style={{ opacity: 0.5, maxWidth: 600 }}>
              Morse DAO is building a community-owned decentralized financial
              infrastructure to bring more stability and transparency for the
              world.
            </p>
            <br />
            <a class="button" href="#">
              Enter App
            </a>
          </div>
          <div class="left">
            <img class="header-img" src={heroImage} alt="" />
          </div>
        </div>

        <div className="card-hero">
          <div class="card-grid">
            <div class="card">
              <div class="card-header">
                <div>
                  <span>{/* <img src={nftIcon} /> */}</span>
                  <h4 class="card-title">Total MOR Staked</h4>
                </div>
              </div>
              <div class="card-body">
                <div>
                  <div></div>
                  <p>89.6%</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <span>{/* <img src={tokenIcon} /> */}</span>
                  <h4 className="card-title">Treasury Balance</h4>
                </div>
              </div>
              <div class="card-body">
                <div>
                  <div></div>
                  <p>$728,935,112</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <div>
                  <span>{/* <img src={gameIcon} /> */}</span>
                  <h4 class="card-title">Total Value Locked</h4>
                </div>
              </div>
              <div class="card-body">
                <div>
                  <div></div>
                  <p>$2,970,358,744</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <span>{/* <img src={pieIcon} /> */}</span>
                  <h4 class="card-title">Current APY</h4>
                </div>
              </div>
              <div class="card-body">
                <div>
                  <div></div>
                  <p>7,930%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dao-hero">
          <div class="dao-container">
            <div class="dao-wrapper">
              <div class="dao-content">
                <h1 className="title">Introducing Morse Pro</h1>
                <p class="des">
                  We’re bringing Protocol Owned Liquidity to a DAO near you.
                  Learn about <span>Morse DAO</span>, our Bonds-as-a-Service
                  protocol.
                </p>
              </div>
              <div class="dao-inner-wrapper">
                <img src={stakeImage} />
              </div>
            </div>
          </div>
          <div class="gradient-block2"></div>
        </div>

        <div className="text-hero">
          <h2 className="border-text-outline">How does it works </h2>
          {/* <h2 className="border-text">How does it works </h2> */}
        </div>

        <div class="timeline">
          <div1 class="circle-container">
            <section class="tl no-border"></section>
            <section class="tr no-border"></section>
            <div class="flex">
              <span class="circle">1</span>
            </div>
            <section class="bl"></section>
            <section class="br"></section>
          </div1>
          <section class="info no-border">
            <h2> Bonds & LP fees </h2>
            <span>
              Bond sales and LP Fees increase Treasury Revenue and lock in
              liquidity and help control Morse supply
            </span>
          </section>
          <section></section>

          <section></section>
          <section class="info">
            <h2> Morse Treasury</h2>
            <span>
              Morse Treasury Treasury inflow is used to increase Treasury
              Balance and back outstanding Morse tokens and regulate staking APY
            </span>
          </section>
          <div1 class="circle-container">
            <section class="tl"></section>
            <section class="tr"></section>
            <div class="flex">
              <span class="circle">2</span>
            </div>
            <section class="bl"></section>
            <section class="br"></section>
          </div1>

          <div1 class="circle-container">
            <section class="tl"></section>
            <section class="tr"></section>
            <div class="flex">
              <span class="circle">3</span>
            </div>
          </div1>
          <section class="info">
            <h2>Morse Token</h2>
            <span>
              Compounds yields automatically through a treasury backed currency
              with intrinsic value
            </span>
          </section>
        </div>

        <div class="dao-hero">
          <div class="dao-container">
            <div class="dao-wrapper" style={{ width: "80%" }}>
              <div class="dao-content">
                <h1 className="title">Morse is designed to grow in value</h1>
                {/* <p class="des">
                  Morse owns almost all of its liquidity, which helps maintain
                  price stability and treasury income. With a protocol-owned
                  liquidity, Morse is protected from unpredictable and
                  unfavorable market conditions due to longevity and efficiency.
                </p> */}
              </div>
              <div class="dao-inner-wrapper" style={{ marginLeft: "auto" }}>
                <div class="dao-sub-content">
                  {/* <h1 className="title">$155,500,000</h1>
                  <h1 className="title">99.5%</h1> */}
                  <p class="des">
                    Morse is backed by an ever-growing, income-generating
                    treasury. We’ve created a currency that is able to
                    constantly grow purchasing power despite market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="gradient-block2"></div>
        </div>

        <img src={chart} style={{ width: "100%" }} />

        <div class="dao-hero">
          <div class="dao-container">
            <div class="dao-wrapper" style={{ width: "80%" }}>
              <div class="dao-content">
                <h1 className="title">Liquidity Protected</h1>
                <p class="des">
                  Morse owns almost all of its liquidity, which helps maintain
                  price stability and treasury income. With a protocol-owned
                  liquidity, Morse is protected from unpredictable and
                  unfavorable market conditions due to longevity and efficiency.
                </p>
              </div>
              <div class="dao-inner-wrapper" style={{ marginLeft: "auto" }}>
                <div class="dao-sub-content">
                  <h1 className="title">$155,500,000</h1>
                  <h1 className="title">99.5%</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="gradient-block2"></div>
        </div>

        <footer class="footer">
          <div class="footer-content responsive-wrapper">
            <div class="footer-column">
              <h2 class="footer-heading">
                {/* <img width="100" src={logo} /> */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <g id="word2" fill="#fff"> */}
                  <g id="wordLogo">
                    <path
                      class="path"
                      d="M15.5999 5.24301C15.5332 5.24834 15.3119 5.27234 15.1066 5.29634C11.5706 5.68834 8.42658 7.76834 6.65325 10.8937C5.74125 12.4963 5.25325 14.283 5.21325 16.1603C5.14925 19.171 6.29058 22.043 8.41058 24.2083C9.66658 25.491 11.2772 26.483 12.9866 27.0243C14.1706 27.3977 15.2346 27.5523 16.5332 27.5337C17.2986 27.523 17.6532 27.491 18.3412 27.3737C20.2132 27.0483 22.0426 26.195 23.5252 24.9523C26.3386 22.6003 27.7999 19.0803 27.4932 15.4137C27.1652 11.5283 24.7759 8.05634 21.2532 6.34434C20.1252 5.795 18.9786 5.45901 17.6532 5.29367C17.3332 5.25101 15.8879 5.21901 15.5999 5.24301ZM17.4799 6.25634C19.4959 6.47767 21.4399 7.31234 22.9599 8.611C23.1999 8.81633 23.9012 9.50433 23.9786 9.60833L24.0319 9.68567L20.7866 12.9203C18.2186 15.4803 17.5332 16.179 17.5066 16.259C17.4772 16.3443 17.4772 16.3737 17.5066 16.4457C17.5439 16.531 18.1359 17.1283 18.2506 17.1923C18.3279 17.2377 18.4106 17.235 18.5252 17.187C18.6532 17.1337 24.1439 11.667 24.2319 11.507C24.3119 11.3603 24.3572 10.8803 24.3386 10.3977C24.3306 10.195 24.3279 10.027 24.3306 10.027C24.3492 10.027 24.7706 10.603 24.9146 10.827C25.7786 12.1657 26.2799 13.5577 26.4986 15.2137C26.5626 15.7177 26.5626 17.0457 26.4959 17.5603C26.2719 19.3043 25.7066 20.795 24.7359 22.203C24.6239 22.3657 24.4906 22.547 24.4399 22.603L24.3492 22.707L24.3466 22.059V21.4137L24.2746 21.3843C24.2052 21.3577 24.1706 21.3897 23.2079 22.3523C22.4159 23.1443 22.2212 23.3523 22.2452 23.3817C22.2852 23.4297 22.4052 23.491 22.4532 23.4883C22.4746 23.4857 22.7572 23.4883 23.0799 23.4883L23.6639 23.4937L23.5066 23.6563C22.5092 24.6723 21.0052 25.5897 19.5546 26.0643C18.4666 26.419 17.5652 26.5603 16.3999 26.563C15.2559 26.563 14.3652 26.4323 13.3466 26.1177C11.8399 25.651 10.2906 24.723 9.25325 23.6697L9.08258 23.4937H9.47191C9.68791 23.4937 9.92525 23.4803 9.99991 23.4643C10.1279 23.4377 10.1306 23.435 10.0852 23.3923C10.0266 23.339 8.84258 22.0297 8.66658 21.8243C8.56525 21.707 8.53591 21.6857 8.47991 21.6963C8.44258 21.7043 8.40791 21.715 8.40258 21.7203C8.38391 21.739 8.38125 21.843 8.37591 22.2803L8.37325 22.707L8.14925 22.4003C7.07991 20.947 6.42925 19.2483 6.22925 17.387C6.17858 16.9203 6.19191 15.651 6.25058 15.1737C6.35191 14.371 6.55458 13.5417 6.82658 12.8083C6.98925 12.3737 7.36258 11.595 7.59725 11.2003C7.76791 10.915 8.21058 10.267 8.33591 10.1203L8.40258 10.0403L8.38125 10.347C8.33591 10.9977 8.37591 11.3683 8.52258 11.659C8.60258 11.8137 8.80258 12.0377 8.96525 12.1497C9.02658 12.1923 9.22658 12.379 9.41058 12.5657C9.59458 12.7497 10.7119 13.8403 11.8932 14.9897C13.0746 16.1363 14.3039 17.3363 14.6266 17.651C14.9492 17.9683 15.8746 18.8777 16.6799 19.6697C17.4879 20.4643 18.1866 21.131 18.2319 21.155C18.3306 21.2083 18.4319 21.2137 18.5146 21.171C18.5466 21.155 18.7332 20.979 18.9279 20.7843C19.2212 20.483 19.2799 20.411 19.2799 20.3443C19.2799 20.275 19.2052 20.1923 18.7412 19.739C18.4452 19.451 17.1919 18.2243 15.9599 17.0137C11.4932 12.6243 8.79458 10.0003 8.65591 9.899L8.55991 9.83233L8.75458 9.619C9.22125 9.09633 9.71991 8.64034 10.2612 8.23234C11.8319 7.05367 13.7172 6.35234 15.6799 6.21634C16.1252 6.187 17.0186 6.20567 17.4799 6.25634Z"
                      fill="white"
                    />
                  </g>

                  <g id="wordLogo2" fill="#fff">
                    <path
                      class="path"
                      d="M24.0932 13.6188C23.9919 13.6695 23.4105 14.2375 21.7439 15.9042C20.5252 17.1229 19.5146 18.1469 19.4959 18.1789C19.4799 18.2109 19.4666 18.2749 19.4666 18.3229C19.4666 18.4029 19.5119 18.4562 19.8719 18.8055C20.2399 19.1655 20.2852 19.2002 20.3705 19.2002C20.4239 19.2002 20.5039 19.1762 20.5465 19.1469C20.5919 19.1202 21.1065 18.6109 21.6932 18.0189C22.2799 17.4269 23.0505 16.6615 23.4025 16.3175C24.0959 15.6455 24.2292 15.4802 24.3225 15.1735C24.3812 14.9762 24.3865 14.8695 24.3652 14.2428C24.3492 13.8055 24.3092 13.5468 24.2559 13.5468C24.2399 13.5495 24.1679 13.5815 24.0932 13.6188Z"
                      fill="white"
                    />
                    <path
                      class="path"
                      d="M8.4426 13.848C8.40793 13.944 8.39726 14.088 8.39193 14.6694L8.3866 15.3734L8.4586 15.52C8.5386 15.68 8.67993 15.8267 10.2933 17.3894C11.3253 18.3894 11.9733 19.0267 14.3679 21.3814C15.3279 22.3254 16.1493 23.12 16.1946 23.1494C16.2906 23.208 16.4133 23.2134 16.4986 23.1654C16.5333 23.1467 16.7093 22.984 16.8906 22.8027C17.2453 22.4534 17.2879 22.3814 17.2186 22.248C17.1973 22.208 16.8453 21.8507 16.4373 21.4534C16.0266 21.0587 14.7466 19.8054 13.5866 18.6667C9.21326 14.376 8.55193 13.7334 8.5066 13.7334C8.49593 13.7334 8.4666 13.784 8.4426 13.848Z"
                      fill="white"
                    />
                    <path
                      class="path"
                      d="M24.0372 17.5819C23.9519 17.6485 23.1465 18.4379 22.2505 19.3365C20.6932 20.8992 20.6159 20.9819 20.5225 21.1739C20.4025 21.4219 20.3625 21.6352 20.3865 21.8805C20.3972 21.9819 20.4025 22.3099 20.4025 22.6059L20.3999 23.1445L20.5519 23.0405C20.6372 22.9845 21.4719 22.1765 22.4185 21.2352C23.9945 19.6672 24.1358 19.5205 24.2105 19.3605C24.3305 19.1045 24.3492 18.9232 24.3412 18.1605L24.3332 17.4805L24.2638 17.4725C24.2158 17.4672 24.1465 17.5019 24.0372 17.5819Z"
                      fill="white"
                    />

                    <path
                      class="path"
                      d="M8.45602 17.7764C8.37868 18.0644 8.37068 18.1844 8.37868 18.7524L8.38668 19.347L8.47468 19.5097C8.54668 19.643 8.81068 19.915 10.0187 21.0963C11.512 22.5576 12.128 23.147 12.16 23.147C12.1707 23.147 12.2 23.1016 12.224 23.0456C12.264 22.9576 12.2694 22.8563 12.2614 22.187L12.2534 21.427L12.1814 21.307C12.112 21.187 9.17602 18.299 8.56802 17.7497L8.48268 17.675L8.45602 17.7764Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <p
                  style={{
                    maxWidth: 114,
                    fontSize: 13,
                    color: "white",
                    lineHeight: `20px`,
                  }}
                >
                  © 2021 MorseDAO. All rights reserved.
                </p>
              </h2>
            </div>
            <div class="footer-column">
              <p>About us</p>

              <p>Play 2 Earn</p>

              <p>Business Model</p>
            </div>
            <div class="footer-column">
              <p>The DAO</p>

              <p>Ecosystem</p>

              <p>Roadmap</p>
            </div>
            <div class="footer-column">
              <p>Team</p>

              <p>Partnership</p>

              <p>Contact us</p>
            </div>
            <div class="footer-column">
              <p>Terms of service</p>

              <p>Privacy policy</p>

              <p>Whitepaper</p>
            </div>

            <div class="footer-column">
              <ul class="some-list">
                {/* <li class="some-list-item">Join us</li> */}
                <li class="some-list-item">
                  <a href="#" class="some-list-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0958 5.55691C18.1566 3.99851 15.0902 3.73451 14.9606 3.72331C14.7558 3.70571 14.5614 3.82171 14.4774 4.00891C14.4742 4.01531 14.303 4.51211 14.1374 4.99131C16.391 5.38571 17.9222 6.26091 18.0038 6.30891C18.3862 6.53131 18.5142 7.02171 18.291 7.40331C18.143 7.65771 17.875 7.80011 17.5998 7.80011C17.463 7.80011 17.3254 7.76571 17.199 7.69211C17.1766 7.67851 14.9302 6.40011 12.0014 6.40011C9.0718 6.40011 6.8246 7.67931 6.8022 7.69211C6.4206 7.91371 5.931 7.78331 5.7094 7.40091C5.4878 7.02011 5.6166 6.53131 5.9974 6.30891C6.079 6.26091 7.6158 5.38251 9.8758 4.98891C9.7014 4.50411 9.5254 4.01531 9.5222 4.00891C9.4382 3.82091 9.2438 3.70251 9.039 3.72331C8.9094 3.73371 5.843 3.99771 3.8782 5.57771C2.851 6.52651 0.799805 12.0737 0.799805 16.8697C0.799805 16.9545 0.821405 17.0369 0.863805 17.1105C2.2806 19.5985 6.143 20.2497 7.023 20.2777C7.0286 20.2785 7.0334 20.2785 7.0382 20.2785C7.1934 20.2785 7.3398 20.2041 7.4318 20.0785L8.3838 18.7889C6.2958 18.2857 5.1918 17.4945 5.1254 17.4457C4.7702 17.1841 4.6934 16.6833 4.955 16.3273C5.2158 15.9729 5.715 15.8945 6.0702 16.1545C6.0998 16.1737 8.1374 17.6001 11.9998 17.6001C15.8774 17.6001 17.9094 16.1681 17.9294 16.1537C18.2846 15.8961 18.7854 15.9737 19.0454 16.3305C19.3046 16.6857 19.2294 17.1833 18.8758 17.4441C18.8094 17.4929 17.711 18.2825 15.6278 18.7857L16.5678 20.0777C16.6598 20.2041 16.8062 20.2777 16.9614 20.2777C16.967 20.2777 16.9718 20.2777 16.9766 20.2769C17.8574 20.2489 21.7198 19.5977 23.1358 17.1097C23.1782 17.0361 23.1998 16.9537 23.1998 16.8689C23.1998 12.0737 21.1486 6.52651 20.0958 5.55691ZM8.7998 15.2001C7.9158 15.2001 7.1998 14.3049 7.1998 13.2001C7.1998 12.0953 7.9158 11.2001 8.7998 11.2001C9.6838 11.2001 10.3998 12.0953 10.3998 13.2001C10.3998 14.3049 9.6838 15.2001 8.7998 15.2001ZM15.1998 15.2001C14.3158 15.2001 13.5998 14.3049 13.5998 13.2001C13.5998 12.0953 14.3158 11.2001 15.1998 11.2001C16.0838 11.2001 16.7998 12.0953 16.7998 13.2001C16.7998 14.3049 16.0838 15.2001 15.1998 15.2001Z"
                        fill="#687F87"
                      />
                    </svg>
                  </a>
                </li>
                <li class="some-list-item">
                  <a href="#" class="some-list-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.4004 5.54963C21.6348 5.88963 20.8124 6.11843 19.9492 6.22163C20.8308 5.69363 21.5068 4.85763 21.8252 3.86083C21.0012 4.34963 20.0876 4.70483 19.1148 4.89683C18.3364 4.06723 17.2276 3.54883 16.0004 3.54883C13.6436 3.54883 11.7332 5.46003 11.7332 7.81603C11.7332 8.15043 11.7716 8.47683 11.8436 8.78803C8.29721 8.61043 5.15321 6.91123 3.04761 4.32883C2.68121 4.95923 2.47081 5.69203 2.47081 6.47523C2.47081 7.95523 3.22361 9.26163 4.36841 10.0264C3.66921 10.004 3.01081 9.81203 2.43561 9.49283C2.43561 9.51123 2.43561 9.52803 2.43561 9.54643C2.43561 11.6144 3.90601 13.3392 5.85881 13.7304C5.50121 13.828 5.12361 13.88 4.73401 13.88C4.45961 13.88 4.19161 13.8528 3.93161 13.804C4.47481 15.4992 6.05081 16.7336 7.91801 16.768C6.45801 17.9128 4.61801 18.5952 2.61801 18.5952C2.27401 18.5952 1.93401 18.5752 1.59961 18.5352C3.48841 19.7456 5.73081 20.452 8.14121 20.452C15.9908 20.452 20.282 13.9496 20.282 8.31043C20.282 8.12563 20.278 7.94163 20.27 7.75843C21.1044 7.15603 21.8284 6.40483 22.4004 5.54963Z"
                        fill="#687F87"
                      />
                    </svg>
                  </a>
                </li>

                <li class="some-list-item">
                  <a href="#" class="some-list-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1456 3.14505C21.7856 2.83977 21.2202 2.79609 20.6355 3.03081H20.6346C20.0197 3.27753 3.22928 10.4794 2.54576 10.7737C2.42144 10.8169 1.33568 11.222 1.44752 12.1244C1.54736 12.938 2.42 13.275 2.52656 13.3138L6.7952 14.7754C7.0784 15.7182 8.1224 19.1962 8.35328 19.9393C8.49728 20.4025 8.732 21.0111 9.14336 21.1364C9.50432 21.2756 9.86336 21.1484 10.0957 20.966L12.7054 18.5454L16.9184 21.831L17.0187 21.891C17.3048 22.0177 17.5789 22.081 17.8405 22.081C18.0426 22.081 18.2365 22.0431 18.4218 21.9673C19.053 21.7081 19.3054 21.1066 19.3318 21.0385L22.4787 4.68153C22.6707 3.80793 22.4038 3.36345 22.1456 3.14505ZM10.5598 15.3601L9.11984 19.2001L7.67984 14.4001L18.7198 6.24009L10.5598 15.3601Z"
                        fill="#687F87"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {cookiesClose && (
        <div class="cookies">
          <p class="c-hero__cookies--text dib tu white">
            This website uses cookies although we are not a bakery.{" "}
          </p>

          <svg
            onClick={() => {
              setCookiesClose(false);
            }}
            class="c-hero__close--cookies cp dib | js-close-cookies"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12.5"
              cy="12.5"
              r="12"
              stroke="white"
              stroke-opacity="0.5"
            ></circle>
            <path d="M9.28516 16.4287L16.428 9.28585" stroke="white"></path>
            <path d="M9.28516 9.28564L16.428 16.4285" stroke="white"></path>
          </svg>
        </div>
      )}

      <div class="imsrk2">
        <svg
          width="128"
          height="128"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="word2">
            <path
              class="path"
              d="M15.5999 5.24301C15.5332 5.24834 15.3119 5.27234 15.1066 5.29634C11.5706 5.68834 8.42658 7.76834 6.65325 10.8937C5.74125 12.4963 5.25325 14.283 5.21325 16.1603C5.14925 19.171 6.29058 22.043 8.41058 24.2083C9.66658 25.491 11.2772 26.483 12.9866 27.0243C14.1706 27.3977 15.2346 27.5523 16.5332 27.5337C17.2986 27.523 17.6532 27.491 18.3412 27.3737C20.2132 27.0483 22.0426 26.195 23.5252 24.9523C26.3386 22.6003 27.7999 19.0803 27.4932 15.4137C27.1652 11.5283 24.7759 8.05634 21.2532 6.34434C20.1252 5.795 18.9786 5.45901 17.6532 5.29367C17.3332 5.25101 15.8879 5.21901 15.5999 5.24301ZM17.4799 6.25634C19.4959 6.47767 21.4399 7.31234 22.9599 8.611C23.1999 8.81633 23.9012 9.50433 23.9786 9.60833L24.0319 9.68567L20.7866 12.9203C18.2186 15.4803 17.5332 16.179 17.5066 16.259C17.4772 16.3443 17.4772 16.3737 17.5066 16.4457C17.5439 16.531 18.1359 17.1283 18.2506 17.1923C18.3279 17.2377 18.4106 17.235 18.5252 17.187C18.6532 17.1337 24.1439 11.667 24.2319 11.507C24.3119 11.3603 24.3572 10.8803 24.3386 10.3977C24.3306 10.195 24.3279 10.027 24.3306 10.027C24.3492 10.027 24.7706 10.603 24.9146 10.827C25.7786 12.1657 26.2799 13.5577 26.4986 15.2137C26.5626 15.7177 26.5626 17.0457 26.4959 17.5603C26.2719 19.3043 25.7066 20.795 24.7359 22.203C24.6239 22.3657 24.4906 22.547 24.4399 22.603L24.3492 22.707L24.3466 22.059V21.4137L24.2746 21.3843C24.2052 21.3577 24.1706 21.3897 23.2079 22.3523C22.4159 23.1443 22.2212 23.3523 22.2452 23.3817C22.2852 23.4297 22.4052 23.491 22.4532 23.4883C22.4746 23.4857 22.7572 23.4883 23.0799 23.4883L23.6639 23.4937L23.5066 23.6563C22.5092 24.6723 21.0052 25.5897 19.5546 26.0643C18.4666 26.419 17.5652 26.5603 16.3999 26.563C15.2559 26.563 14.3652 26.4323 13.3466 26.1177C11.8399 25.651 10.2906 24.723 9.25325 23.6697L9.08258 23.4937H9.47191C9.68791 23.4937 9.92525 23.4803 9.99991 23.4643C10.1279 23.4377 10.1306 23.435 10.0852 23.3923C10.0266 23.339 8.84258 22.0297 8.66658 21.8243C8.56525 21.707 8.53591 21.6857 8.47991 21.6963C8.44258 21.7043 8.40791 21.715 8.40258 21.7203C8.38391 21.739 8.38125 21.843 8.37591 22.2803L8.37325 22.707L8.14925 22.4003C7.07991 20.947 6.42925 19.2483 6.22925 17.387C6.17858 16.9203 6.19191 15.651 6.25058 15.1737C6.35191 14.371 6.55458 13.5417 6.82658 12.8083C6.98925 12.3737 7.36258 11.595 7.59725 11.2003C7.76791 10.915 8.21058 10.267 8.33591 10.1203L8.40258 10.0403L8.38125 10.347C8.33591 10.9977 8.37591 11.3683 8.52258 11.659C8.60258 11.8137 8.80258 12.0377 8.96525 12.1497C9.02658 12.1923 9.22658 12.379 9.41058 12.5657C9.59458 12.7497 10.7119 13.8403 11.8932 14.9897C13.0746 16.1363 14.3039 17.3363 14.6266 17.651C14.9492 17.9683 15.8746 18.8777 16.6799 19.6697C17.4879 20.4643 18.1866 21.131 18.2319 21.155C18.3306 21.2083 18.4319 21.2137 18.5146 21.171C18.5466 21.155 18.7332 20.979 18.9279 20.7843C19.2212 20.483 19.2799 20.411 19.2799 20.3443C19.2799 20.275 19.2052 20.1923 18.7412 19.739C18.4452 19.451 17.1919 18.2243 15.9599 17.0137C11.4932 12.6243 8.79458 10.0003 8.65591 9.899L8.55991 9.83233L8.75458 9.619C9.22125 9.09633 9.71991 8.64034 10.2612 8.23234C11.8319 7.05367 13.7172 6.35234 15.6799 6.21634C16.1252 6.187 17.0186 6.20567 17.4799 6.25634Z"
              fill="white"
            />
          </g>

          <g id="word1" fill="#fff">
            <path
              class="path"
              d="M24.0932 13.6188C23.9919 13.6695 23.4105 14.2375 21.7439 15.9042C20.5252 17.1229 19.5146 18.1469 19.4959 18.1789C19.4799 18.2109 19.4666 18.2749 19.4666 18.3229C19.4666 18.4029 19.5119 18.4562 19.8719 18.8055C20.2399 19.1655 20.2852 19.2002 20.3705 19.2002C20.4239 19.2002 20.5039 19.1762 20.5465 19.1469C20.5919 19.1202 21.1065 18.6109 21.6932 18.0189C22.2799 17.4269 23.0505 16.6615 23.4025 16.3175C24.0959 15.6455 24.2292 15.4802 24.3225 15.1735C24.3812 14.9762 24.3865 14.8695 24.3652 14.2428C24.3492 13.8055 24.3092 13.5468 24.2559 13.5468C24.2399 13.5495 24.1679 13.5815 24.0932 13.6188Z"
              fill="white"
            />
            <path
              class="path"
              d="M8.4426 13.848C8.40793 13.944 8.39726 14.088 8.39193 14.6694L8.3866 15.3734L8.4586 15.52C8.5386 15.68 8.67993 15.8267 10.2933 17.3894C11.3253 18.3894 11.9733 19.0267 14.3679 21.3814C15.3279 22.3254 16.1493 23.12 16.1946 23.1494C16.2906 23.208 16.4133 23.2134 16.4986 23.1654C16.5333 23.1467 16.7093 22.984 16.8906 22.8027C17.2453 22.4534 17.2879 22.3814 17.2186 22.248C17.1973 22.208 16.8453 21.8507 16.4373 21.4534C16.0266 21.0587 14.7466 19.8054 13.5866 18.6667C9.21326 14.376 8.55193 13.7334 8.5066 13.7334C8.49593 13.7334 8.4666 13.784 8.4426 13.848Z"
              fill="white"
            />
            <path
              class="path"
              d="M24.0372 17.5819C23.9519 17.6485 23.1465 18.4379 22.2505 19.3365C20.6932 20.8992 20.6159 20.9819 20.5225 21.1739C20.4025 21.4219 20.3625 21.6352 20.3865 21.8805C20.3972 21.9819 20.4025 22.3099 20.4025 22.6059L20.3999 23.1445L20.5519 23.0405C20.6372 22.9845 21.4719 22.1765 22.4185 21.2352C23.9945 19.6672 24.1358 19.5205 24.2105 19.3605C24.3305 19.1045 24.3492 18.9232 24.3412 18.1605L24.3332 17.4805L24.2638 17.4725C24.2158 17.4672 24.1465 17.5019 24.0372 17.5819Z"
              fill="white"
            />

            <path
              class="path"
              d="M8.45602 17.7764C8.37868 18.0644 8.37068 18.1844 8.37868 18.7524L8.38668 19.347L8.47468 19.5097C8.54668 19.643 8.81068 19.915 10.0187 21.0963C11.512 22.5576 12.128 23.147 12.16 23.147C12.1707 23.147 12.2 23.1016 12.224 23.0456C12.264 22.9576 12.2694 22.8563 12.2614 22.187L12.2534 21.427L12.1814 21.307C12.112 21.187 9.17602 18.299 8.56802 17.7497L8.48268 17.675L8.45602 17.7764Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
