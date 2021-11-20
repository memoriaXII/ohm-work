import logo from "./assets/logo.svg";
import "./App.scss";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import heroImage from "./assets/heroImage.png";
import coinImage from "./assets/Cam2.png";

import ScrollOut from "scroll-out";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

function App() {
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

      t1.from(
        ".imsrk2",
        {
          yPercent: -50,
          duration: 2,
          ease: "power1.out",
          scale: 3,
          autoAlpha: 1,
        },
        0
      );

      gsap.to(
        ".imsrk2",
        {
          autoAlpha: 0,
        },
        3
      );

      //in 2 seconds, fade back in with visibility:visible
      // gsap.to(element, { duration: 2, autoAlpha: 1, delay: 2 });

      // t1.fromTo(
      //   ".imsrk2",
      //   2,
      //   { y: 0, autoAlpha: 1 },
      //   { y: 0, autoAlpha: 0 },
      //   1
      // );

      // fromTo(content, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0});

      t1.fromTo(".cover-5", 2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });

      // t1.from(
      //   ".cover-5",
      //   {
      //     yPercent: -100,
      //     duration: 0.8,
      //     ease: "power1.out",
      //     delay: 0.2,
      //     opacity: 1,
      //   },
      //   1
      // );

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
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        3
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
        ".header-img",
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        2.2
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
      <nav id="nav-main" class="skew">
        <ul>
          <li class="link">Link</li>
          <li class="link">Link</li>
          <li class="link">Link</li>
          <li class="link">Link longer</li>
        </ul>
      </nav>
      <div class="cover-5">
        <button
          id="menu-button"
          class="menu-button"
          style={{ mixBlendMode: "exclusion" }}
        >
          +
        </button>
        <div class="gradient-block"></div>
        <header>
          {/* <img class="logo" src={logo} alt="" /> */}

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
              Learn More
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
                  <h4 class="card-title">Total OHM Staked</h4>
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
                <h1 className="title">Introducing Morse DAO</h1>
                <p class="des">
                  We’re bringing Protocol Owned Liquidity to a DAO near you.
                  Learn about <span>Morse DAO</span>, our Bonds-as-a-Service
                  protocol.
                </p>
                {/* <p class="sub-des">
                  This will enable us to create a DAO which will make key
                  decisions, operate the treasury, and direct the Guild in a
                  fair and equitable manner.
                </p> */}
              </div>
              <div class="dao-inner-wrapper">
                <img src={coinImage} />
                {/* <img src="/static/media/daoChart.52f735e2.png" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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
