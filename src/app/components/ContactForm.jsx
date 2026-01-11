"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../../app/components/UI/Sparkles";
import styles from "./Presentation/Presentation.module.css";

export default function Contact() {
  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("jin_purple");
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center bg-myblack"
    >
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3}
            particleDensity={5}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <motion.section
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
          className="w-full relative h-screen flex flex-col items-center justify-center z-20"
        >
          <div className={styles.container__title}>
            <motion.h2
              className={styles.titleAndMore}
              initial={{ x: "-100%" }}
              animate={{ x: "65%" }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME
            </motion.h2>
          </div>

          <div className="pt-[2rem] md:pt-[4rem] flex justify-center flex-col gap-6 relative items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white font-aldrich text-center text-lg md:text-xl tracking-wider"
            >
              CONTACTEZ-MOI VIA DISCORD
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="px-[3rem] py-[1rem] bg-slate-50 bg-opacity-10 rounded-md backdrop-blur-sm border border-purple-500 border-opacity-30">
                <p className="text-white font-aldrich text-2xl md:text-3xl tracking-wider neon">
                  jin_purple
                </p>
              </div>

              <button
                onClick={handleCopyDiscord}
                className="px-[2rem] py-[0.5rem] text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800 hover:ring-2 hover:ring-purple-600 hover:shadow-xl hover:scale-105"
              >
                COPIER
              </button>
            </motion.div>

            <motion.a
              href="https://discord.gg/rPu6VZBSTP"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="px-[2.5rem] py-[0.7rem] text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-purple-600 to-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-purple-900 hover:ring-2 hover:ring-purple-400 hover:shadow-xl hover:scale-105 neon"
            >
              REJOINDRE MON SERVEUR
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className="text-white text-opacity-60 font-aldrich text-center text-sm mt-4 tracking-wide"
            >
              gleam-pro@proton.me
            </motion.p>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
