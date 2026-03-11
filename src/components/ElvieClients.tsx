import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Import all logos ──
import logo17 from "../assets/FEATURE_CLIENTS/17-0117194.png";
import logo18 from "../assets/FEATURE_CLIENTS/18-0117195.png";
import logo19 from "../assets/FEATURE_CLIENTS/19-0117195.png";
import logo20 from "../assets/FEATURE_CLIENTS/20-0117195.png";
import logo21 from "../assets/FEATURE_CLIENTS/21-0117195.png";
import logo22 from "../assets/FEATURE_CLIENTS/22-0117195.png";
import logo23 from "../assets/FEATURE_CLIENTS/23-0117196.png";
import logo24 from "../assets/FEATURE_CLIENTS/24-0117196.png";
import logo25 from "../assets/FEATURE_CLIENTS/25-0117196.png";
import logo26 from "../assets/FEATURE_CLIENTS/26-0117196.png";
import logo27 from "../assets/FEATURE_CLIENTS/27-0117196.png";
import logo28 from "../assets/FEATURE_CLIENTS/28-0117197.png";
import logo29 from "../assets/FEATURE_CLIENTS/29-0117197.png";
import logo30 from "../assets/FEATURE_CLIENTS/30-0117197.png";
import logo31 from "../assets/FEATURE_CLIENTS/31-0117197.png";
import logo32 from "../assets/FEATURE_CLIENTS/32-0290324.png";
import logo33 from "../assets/FEATURE_CLIENTS/33-0290324.png";
import logo34 from "../assets/FEATURE_CLIENTS/34-0290324.png";
import logo35 from "../assets/FEATURE_CLIENTS/35-0290324.png";
import logo36 from "../assets/FEATURE_CLIENTS/36-0290324.png";
import logo37 from "../assets/FEATURE_CLIENTS/37-0290325.png";
import logo38 from "../assets/FEATURE_CLIENTS/38-0290325.png";
import logo39 from "../assets/FEATURE_CLIENTS/39-0290325.png";
import logo40 from "../assets/FEATURE_CLIENTS/40-0290325.png";
import logo41 from "../assets/FEATURE_CLIENTS/41-0290325.png";
import logo42 from "../assets/FEATURE_CLIENTS/42-0290326.png";
import logo43 from "../assets/FEATURE_CLIENTS/43-0290326.png";
import logo44 from "../assets/FEATURE_CLIENTS/44-0290326.png";
import logo45 from "../assets/FEATURE_CLIENTS/45-0290326.png";
import logo46 from "../assets/FEATURE_CLIENTS/46-0290326.png";
import logo47 from "../assets/FEATURE_CLIENTS/47-0290327.png";
import logo48 from "../assets/FEATURE_CLIENTS/48-0290327.png";
import logo49 from "../assets/FEATURE_CLIENTS/49-0290327.png";
import logo50 from "../assets/FEATURE_CLIENTS/50-0290327.png";
import logo51 from "../assets/FEATURE_CLIENTS/51-0290328.png";
import logo52 from "../assets/FEATURE_CLIENTS/52-0290328.png";
import logo53 from "../assets/FEATURE_CLIENTS/53-0290328.png";
import logo54 from "../assets/FEATURE_CLIENTS/54-0290328.png";
import logo55 from "../assets/FEATURE_CLIENTS/55-0290328.png";
import logo56 from "../assets/FEATURE_CLIENTS/56-0290329.png";
import logo57 from "../assets/FEATURE_CLIENTS/57-0290329.png";

const logos: string[] = [
  logo17, logo18, logo19, logo20, logo21, logo22, logo23,
  logo24, logo25, logo26, logo27, logo28, logo29, logo30,
  logo31, logo32, logo33, logo34, logo35, logo36, logo37,
  logo38, logo39, logo40, logo41, logo42, logo43, logo44,
  logo45, logo46, logo47, logo48, logo49, logo50, logo51,
  logo52, logo53, logo54, logo55, logo56, logo57,
];

const LOGOS_PER_PAGE = 6;

const pages: string[][] = [];
for (let i = 0; i < logos.length; i += LOGOS_PER_PAGE) {
  pages.push(logos.slice(i, i + LOGOS_PER_PAGE));
}

const TOTAL_PAGES = pages.length;

const variants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const ElvieClients = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % TOTAL_PAGES);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-background" ref={ref}>

      {/* Heading */}

      <div className="container mx-auto px-4 text-center mb-12">

        <motion.h2
          className="text-2xl md:text-3xl font-bold tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Clients
        </motion.h2>

        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Big names, bigger results. See who's onboard.
        </motion.p>

      </div>

      {/* Slider */}

      <div className="relative overflow-hidden w-full">

        <AnimatePresence mode="wait">

          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-12 px-10 items-center"
          >

            {pages[page].map((src, i) => (

              <motion.div
                key={i}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >

                <img
                  src={src}
                  alt="client logo"
                  className="h-28 md:h-32 lg:h-36 w-auto object-contain"
                  draggable={false}
                />

              </motion.div>

            ))}

          </motion.div>

        </AnimatePresence>

      </div>

      {/* Dots */}

      <div className="flex justify-center gap-2 mt-10">

        {pages.map((_, i) => (

          <button
            key={i}
            onClick={() => setPage(i)}
            className="rounded-full transition-all"
            style={{
              width: i === page ? "22px" : "8px",
              height: "8px",
              background: i === page ? "#1a3c6e" : "#d1d5db",
            }}
          />

        ))}

      </div>

    </section>
  );
};

export default ElvieClients;