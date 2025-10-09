import { motion } from "framer-motion";

export default function ScrollFadeIn({
  children,
  className,
  immediate = false,   // use for top/hero only
  amount = 0.2,        // how much of element must be visible (0–1)
}) {
  const variants = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  const inViewProps = immediate
    ? { animate: "show" } // play immediately on mount
    : {
        whileInView: "show",
        viewport: {
          once: true,
          amount,                        // trigger when ~20% visible
          margin: "-10% 0px -10% 0px",   // fire a bit early
        }
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={variants}
      {...inViewProps}
    >
      {children}
    </motion.div>
  );
}
