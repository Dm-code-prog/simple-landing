import Head from "next/head";
import Image from "next/image";
import logo from "@/images/simple.svg";
import phoneImg from "@/images/iphone-dimension.png";
import howItWorksImg from "@/images/iphone-screen.png";
import footerPhoneImg from "@/images/iphone.png";
import "@/scripts/index";
import { useEffect, useState } from "react";
import Link from "next/link";

import Tilt from "react-parallax-tilt";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import TransferCards from "@/components/TransferCards";

const transfersText = [
  {
    header: "Phone number is a User Identity",
    p: "Automatically create a crypto wallet or add your existing one and link it with your phone number.",
  },
  {
    header: "Transfer to friends directly from messages",
    p: "Find your friends in the contact list and send crypto simple as a message. View the history of transfers with your friends in a form of a chat.",
  },
  {
    header: "Simple Protocol",
    p: "Transfer crypto from and to any network. We will cover everything for you.",
  },
  {
    header: "Pay by a debit card in crypto",
    p: "Issuing a Simple debit card and pay with your cryptocurrencies anywhere",
  },
  {
    header: "Receive payments for self-employed",
    p: "Accept payments in crypto in any situation you want.",
  },
  {
    header: "Seamless fiat to crypto conversion",
    p: "Send crypto and receive fiat money just in one transaction.",
  },
];

export default function Home() {
  const [number, setNumber] = useState();
  console.log(number);

  useEffect(() => {
    if (process.browser) {
      const navbar = document.getElementById("landing-nav");

      document.addEventListener("scroll", navbarControl);

      function navbarControl() {
        if (scrollY > 75) {
          navbar.classList.add("navbar-background");
        } else {
          navbar.classList.remove("navbar-background");
        }
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>simple</title>
        <meta name="description" content="Simple way to transfer money with zero crypto knowledge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header class="landing-header-container">
        <nav id="landing-nav" class="nav-container">
          <div class="logo-container">
            <Image class="logo-img" src={logo} />
            <span class="logo-text">simple</span>
          </div>
          <div class="nav-wrapper">
            <a class="nav-item" href="#work">
              How it works
            </a>
            <a class="nav-item" href="#about-us">
              About Us
            </a>
            <Link
              class="nav-item nav-item-button nav-item-mobile-only"
              target="_blank"
              href="https://simp1e-demo.netlify.app/"
            >
              Web Demo
            </Link>
          </div>
          <div class="decorate-item">
            <Link
              class="nav-item nav-item-button nav-item-pc-only"
              target="_blank"
              href="https://simp1e-demo.netlify.app/"
            >
              Web Demo
            </Link>
          </div>
        </nav>

        <div class="hero-container">
          <div class="key-visual-container">
            <h1 class="header">Simple crypto payments by phone number</h1>
            {/* <form id="contact-container"> */}
            {/* <input class="tel" type="tel" placeholder="Your phone number" /> */}
            <a target="_blank" rel="noreferrer" href="https://simp1e-demo.netlify.app/" class="button">
              Try demo
            </a>
            {/* </form> */}
          </div>
          <div class="phone-decoration-container">
            <Image class="phone-decoration" src={phoneImg} />
          </div>
        </div>
      </header>

      <section class="work-container">
        <p class="anchor" id="work"></p>
        <div class="item-container">
          <h3 class="header">How it works</h3>
          <div class="top-item-container">
            <p>Select the contact from the list</p>
            <p>Select the amount of money</p>
            <p>Transfer money</p>
          </div>
          <div class="image-wrapper">
            <Image src={howItWorksImg} draggable="false" />
          </div>
        </div>
      </section>

      <section class="functional-container">
        <p class="anchor" id="about-us"></p>
        <h3 class="header">Transfers made simple</h3>
        <div class="functional-item-container">
          <TransferCards textArray={transfersText} />
        </div>
      </section>

      <section id="get-app" class="get-app-wrapper">
        <div class="get-app-container">
          <div class="item-container">
            <h3 class="header">Get the app</h3>
            <p class="paragraph">Leave your phone number — we will send a link to the app</p>
            <form id="form-container">
              <PhoneInput className="tel" placeholder="+971 50 060 600" value={number} onChange={setNumber} />
              <button
                class="button"
                onClick={() =>
                  /* 
                  function(number){
                    your code
                  }
                  */
                  alert("Thank you! We will share the link with you as soon as possible.")
                }
              >
                Get link
              </button>
            </form>
            <button className="mobile-button">Get link</button>
            <p class="policy">
              By clicking the button, you consent to the processing of personal data in accordance with the
              rules for the
              <Link target="_blank" href="/privacy-policy">
                <b>&nbsp;the privacy policy.</b>
              </Link>
            </p>
          </div>
          <div class="decoration-container">
            <Image class="decoration-item" src={footerPhoneImg} alt="" />
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>
          All rights are reserved by SIMPLE PROTOCOL TECHNOLOGIES LLC registered in SCHON BUSINESS PARK,
          DIP-1, Dubai, UAE, 346-019
        </p>
      </footer>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
