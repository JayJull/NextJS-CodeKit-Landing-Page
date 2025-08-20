"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ComingSoon(): React.ReactElement {
  const [isClient, setIsClient] = useState(false);
  const [floatingPositions, setFloatingPositions] = useState<
    Array<{ left: number; top: number }>
  >([]);
  const [starPositions, setStarPositions] = useState<Array<{ top: number }>>(
    []
  );

  useEffect(() => {
    setIsClient(true);
    const positions = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setFloatingPositions(positions);

    const stars = Array.from({ length: 3 }, () => ({
      top: Math.random() * 50,
    }));
    setStarPositions(stars);
  }, []);

  const letters = "COMING SOON".split("");

  const floatingElements = floatingPositions.map((pos, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"
      style={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, (pos.left % 30) - 15, 0],
        scale: [1, 1.5, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 4 + (pos.left % 20) / 10,
        repeat: Infinity,
        delay: (pos.top % 30) / 10,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.button
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.history.back()}
      >
        <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
          <motion.div
            className="w-5 h-5 sm:w-6 sm:h-6"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full text-white/70 group-hover:text-white transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.div>
          <span className="text-sm sm:text-base text-white/70 group-hover:text-white font-medium transition-colors duration-300">
            Back
          </span>
        </div>
      </motion.button>

      <div className="absolute inset-0">
        {isClient && floatingElements}

        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "30px 30px sm:40px sm:40px lg:50px lg:50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px", "0px 0px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-10 left-4 sm:top-16 sm:left-12 lg:top-20 lg:left-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl lg:blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-4 sm:bottom-16 sm:right-12 lg:bottom-20 lg:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-xl lg:blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-none"
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: -90,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(147, 197, 253, 0.3)) sm:drop-shadow(0 0 15px rgba(147, 197, 253, 0.4)) lg:drop-shadow(0 0 20px rgba(147, 197, 253, 0.5))",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Something amazing is on the way...
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center space-x-1.5 sm:space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute border border-white/10 rounded-full"
              style={{
                width: "120px",
                height: "120px",
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                delay: index * 1,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {isClient &&
        starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: "-10px",
            }}
            animate={{
              x: ["0px", "100vw"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 3 + i * 2,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeOut",
            }}
          />
        ))}
    </div>
  );
}
