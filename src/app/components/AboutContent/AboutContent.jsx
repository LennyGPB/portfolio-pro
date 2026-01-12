"use client";
import { motion } from "framer-motion";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
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
          initial={{ x: "-80%" }}
          animate={{ x: "25%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          ABOUT <span className={styles.titleName}>A PROPOS</span> ABOUT{" "}
          <span className={styles.titleName}>A PROPOS</span> ABOUT{" "}
        </motion.h2>
      </div>
      <div className={styles.container__infosMore}>
        <article className={styles.description}>
          <p>
            Mon pseudo est Jin Purple (jin_purple sur discord). Je suis développeur glua & web en freelance depuis quelques années.
            J'ai commencé par le web & le mobile, puis je me suis dirigé en parallèle vers le développement glua pour Garry's Mod.
          </p>
        </article>
        <div className={styles.skills}>
          <p>Sweps & Systèmes de combats</p>
          <p>Systèmes / Scripts</p>
          <p>Figma (Design & Interfaces Utilisateur)</p>
        </div>
      </div>
    </motion.div>
  );
}
