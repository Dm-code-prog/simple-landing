import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

import "@/scripts/index";
import bgMetal from "@/images/bg-metal.png";
import styles from "./get-tx.module.css";

const MOCK_TX = {
  id: "1c381b5b-0488-4680-a92d-53f7f5f29474",
  sender_phone: "6516", // sender_phone: "+37433216516",
  amount: 85.22,
  fee: 0.1,
};

export default function Home() {
  const {
    query: { tx },
  } = useRouter();

  // useEffect(() => {
  //   if (process.browser) {
  //     const navbar = document.getElementById("landing-nav");

  //     document.addEventListener("scroll", navbarControl);

  //     function navbarControl() {
  //       if (scrollY > 75) {
  //         navbar.classList.add("navbar-background");
  //       } else {
  //         navbar.classList.remove("navbar-background");
  //       }
  //     }
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>New transfer via simple</title>
        <meta
          name="description"
          content="Simple way to transfer assets with zero crypto knowledge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Image
        style={{ objectFit: "cover", filter: "brightness(0.6)" }}
        fill
        placeholder="blur"
        alt="metal-bg"
        src={bgMetal}
      />
      <div className={styles.bgImgContainer}>
        <main className={styles.getTxPage}>
          <h1 className={styles.receivedHeader}>${MOCK_TX.amount - MOCK_TX.fee}</h1>

          <span className={styles.senderNumber}>
            from  <span className={styles.hiddenData}>+xxxxxxx</span>{MOCK_TX.sender_phone}
          </span>

          <h6 className={styles.commentLabel}>comment:</h6>
          <span className={styles.commentData}>App sympl money</span>

          <button className={styles.receiveButton}>Receive the funds</button>
        </main>
      </div>
    </>
  );
}
