import { motion, useScroll } from "framer-motion";
import { LoremIpsum } from "../components/LoremIpsum";
import '../Styles.css'

export default function Home2() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
}
