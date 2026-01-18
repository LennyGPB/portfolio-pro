"use client";
import { motion } from "framer-motion";
import Player1 from "../Player/Player1";
import styles from "./Presentation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Presentation() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          delay: 0.5,
          transition: { ease: "easeOut", duration: 3 },
        },
      }}
      className={styles.container}
    >
      <div className={styles.container__title}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-100%" }}
          animate={{ x: "40%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          GOMES LENNY{" "}
          <span className={styles.titleName}>GOMES LENNY</span> GOMES LENNY {" "}
          <span className={styles.titleName}>GOMES LENNY</span> GOMES LENNY
        </motion.h2>
      </div>
      <div className={styles.container__title2}>
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className={styles.otherTitle}
        >
          WEB DEVELOPER <span className={styles.titleName}>DANCER</span>{" "}
          DEVELOPPEUR WEB <span className={styles.titleName}>Danseur</span> WEB
          DEVELOPER
        </motion.h2>
      </div>
      <div className={styles.container__infosMore}>
        <Player1 />
        <p className={styles.container__description}>
          Donner vie aux visions & rentrer dans un paysage numérique où son
          univers s’exprime... <br /> Mon art réside dans l’exploration infinie
          des possibles où la lueur prend vie et illumine le regard de ceux qui
          la contemplent... <br />{" "}
        </p>
        <p className={styles.name}>
          Lenny GOMES  — Web & Game Developer || Dancer
        </p>
        <div className={styles.container__socials}>
          {/* <Link
            href="mailto:lennygomes.hp@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.socials__link}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link> */}
          {/* <Link
            href="https://www.linkedin.com/in/LENNY-gomes-pinto-barreto/"
            target="_blank"
            rel="noreferrer"
            className={styles.socials__link}
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </Link> */}
          {/* <Link
            href="https://github.com/lennyGPB"
            target="_blank"
            rel="noreferrer"
            className={styles.socials__link}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link> */}
        </div>
        {/* <Link href="/mentions-legales">Mentions Légales</Link> */}
      </div>
    </motion.div>
  );
}
