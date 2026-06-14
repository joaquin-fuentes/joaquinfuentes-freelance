"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Carousel({
  items,
  renderSlide,
  autoPlayMs = 6000,
  className = "",
}) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection) => {
      setIndex(([prev]) => {
        let next = prev + newDirection;
        if (next < 0) next = items.length - 1;
        if (next >= items.length) next = 0;
        return [next, newDirection];
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (!autoPlayMs) return;
    const timer = setInterval(() => paginate(1), autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, paginate]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) paginate(1);
              else if (info.offset.x > 80) paginate(-1);
            }}
          >
            {renderSlide(items[index], index)}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => paginate(-1)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-night/80 border border-white/20 text-white flex items-center justify-center hover:bg-teal/20 hover:border-teal/50 transition-colors backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        type="button"
        onClick={() => paginate(1)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-night/80 border border-white/20 text-white flex items-center justify-center hover:bg-teal/20 hover:border-teal/50 transition-colors backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() =>
              setIndex(([prev]) => [i, i > prev ? 1 : -1])
            }
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-teal"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
