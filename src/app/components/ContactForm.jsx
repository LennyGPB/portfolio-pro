"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../../app/components/UI/Sparkles";
import styles from "./Presentation/Presentation.module.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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

          <div className="pt-[2rem] md:pt-[4rem] flex justify-center flex-col gap-6 relative items-center max-w-2xl w-full px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white font-aldrich text-center text-lg md:text-xl tracking-wider"
            >
              ENVOYEZ-MOI UN MESSAGE
            </motion.p>

            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label className="text-white font-aldrich text-sm tracking-wider">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-slate-50 bg-opacity-10 rounded-md backdrop-blur-sm border border-purple-500 border-opacity-30 text-white font-aldrich focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-aldrich text-sm tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-slate-50 bg-opacity-10 rounded-md backdrop-blur-sm border border-purple-500 border-opacity-30 text-white font-aldrich focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-aldrich text-sm tracking-wider">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-slate-50 bg-opacity-10 rounded-md backdrop-blur-sm border border-purple-500 border-opacity-30 text-white font-aldrich focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="Sujet du message"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-aldrich text-sm tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="px-4 py-3 bg-slate-50 bg-opacity-10 rounded-md backdrop-blur-sm border border-purple-500 border-opacity-30 text-white font-aldrich focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="px-[2rem] py-[0.7rem] text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-purple-600 to-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-purple-900 hover:ring-2 hover:ring-purple-400 hover:shadow-xl hover:scale-105 neon disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "ENVOI..." : "ENVOYER"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 font-aldrich text-center text-sm tracking-wide"
                >
                  Message envoyé avec succès !
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 font-aldrich text-center text-sm tracking-wide"
                >
                  Erreur lors de l'envoi. Réessayez.
                </motion.p>
              )}
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="text-white text-opacity-60 font-aldrich text-center text-sm mt-4 tracking-wide"
            >
              lennygomes.hp@gmail.com
            </motion.p>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
