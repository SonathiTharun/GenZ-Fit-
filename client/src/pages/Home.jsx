import { motion } from "framer-motion";
import FullscreenVideoHero from "../components/FullscreenVideoHero";
import Carousel from "../components/Carousel";
import { HOMEPAGE_VIDEO, HOMEPAGE_POSTER } from "../constants";


export default function Home() {
  return (
    <main>
      <FullscreenVideoHero
        videoUrl={HOMEPAGE_VIDEO}
        poster={HOMEPAGE_POSTER}
        title="GenZ.Fit"
        subtitle="Train smarter. Move better. Live stronger."
      />

      <section className="container pad-xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Highlights
        </motion.h2>
        <Carousel />
      </section>

      <section id="features" className="container pad-xl">
        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Personalized Programs</h3>
            <p className="muted">
              Adaptive plans for strength, cardio, mobility and recovery.
            </p>
          </motion.div>
          <motion.div
            className="glass"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </div>
      </section>

      <section id="gyms" className="container grid-2 pad-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Gyms</h3>
          <p>Discover locations, facilities, and membership options.</p>
          <a className="btn btn-ghost" href="/gyms">
            Find a gym
          </a>
        </motion.div>
        <motion.div
          className="glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </section>

      <section id="classes" className="container grid-2 pad-xl">
        <motion.div
          className="glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Classes</h3>
          <p>Browse schedules, styles, and book your next session.</p>
          <a className="btn btn-ghost" href="/classes">
            See classes
          </a>
        </motion.div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to level up?</h2>
          <p>Join GenZ.Fit today and get your personalized plan.</p>
          <div
            className="btn-group"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a className="btn btn-primary" href="/classes">
              Get Started
            </a>
            <a className="btn btn-secondary" href="/login">
              Login
            </a>
            <a className="btn btn-secondary" href="/register">
              Register
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
