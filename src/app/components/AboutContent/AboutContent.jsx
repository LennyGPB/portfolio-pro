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
            Je m&apos;appelle Lenny, et je suis animé par le développement, le
            design digital, la danse & lm&apos;écriture. La fusion de toutes ces compétences
            m&apos;est utile dans chacun des projets que j&apos;entreprends. Ma soif dm&apos;apprendre est
            inépuisable, et je suis constamment à la recherche de nouvelles idées et de
            dm&apos;inspiration pour enrichir mon travail. Mon engagement dans ces domaines me
            permet d&apos;explorer et de fusionner harmonieusement les mondes du
            développement et de la création artistique.
          </p>
        </article>
        <div className={styles.skills}>
          <p>NodeJs & MySQL | MongoDb/Prisma</p>
          <p>Next.js (ReactJs) | Redux/Zustand</p>
          <p>Lua/C++/C# & Discord.js | Glua/Unity/.NET</p>
          <p>Figma (Design & Interfaces Utilisateur)</p>
          <p>Blender (3D)</p>
        </div>
      </div>
    </motion.div>
  );
}
