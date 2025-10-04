import { motion } from "framer-motion";
import Easy from "../../assets/Easy.svg";
import Medium from "../../assets/Medium.svg";
import Hard from "../../assets/Hard.svg";
import ButtonCardText from "../../helpers/button/buttonCard";
import { assets } from "../../assets/assets";

const ProjectsData = () => {
  const levels = [
    {
      id: 1,
      title: "Responsive UI Essentials",
      description:
        "Develop responsive layouts, refine your design sense, and ensure seamless user experiences across desktops, tablets, and mobile platforms.",
      difficulty: "Easy",
      image: Easy,
      color: "text-green-500",
      borderColor: "border-green-500",
      electricColor: "green",
      buttonText: "Count Me In",
      locked: false,
    },
    {
      id: 2,
      title: "Logic Building Fundamentals",
      description:
        "Explore patterns, algorithms, and hands-on challenges that boost your analytical mindset, preparing you for tackling more advanced coding tasks with confidence.",
      difficulty: "Medium",
      image: Medium,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
      electricColor: "yellow",
      buttonText: "Count Me In",
      locked: false,
    },
    {
      id: 3,
      title: "Performance Mastery",
      description:
        "Take your development skills to the next level by focusing on performance, optimization, and advanced concepts.",
      difficulty: "Hard",
      image: Hard,
      color: "text-red-500",
      borderColor: "border-red-500",
      electricColor: "red",
      buttonText: "Count Me In",
      locked: false,
    },
  ];

  const electricColors = {
    green: {
      light: "rgba(34, 197, 94, 0.8)",
      medium: "rgba(34, 197, 94, 0.6)",
      dark: "rgba(34, 197, 94, 0.4)",
    },
    yellow: {
      light: "rgba(250, 204, 21, 0.8)",
      medium: "rgba(250, 204, 21, 0.6)",
      dark: "rgba(250, 204, 21, 0.4)",
    },
    red: {
      light: "rgba(239, 68, 68, 0.8)",
      medium: "rgba(239, 68, 68, 0.6)",
      dark: "rgba(239, 68, 68, 0.4)",
    },
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 mb-5 px-4">

      <div className="flex flex-col items-center mb-5 md:mb-10">
        <motion.h1
          className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Levels
        </motion.h1>
        <img src={assets.mainText} alt="mainText" />
      </div>

      <div className="w-full flex items-center justify-center gap-8 flex-wrap relative">
        {levels.map((level, idx) => {
          const colors = electricColors[level.electricColor];

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group w-full md:w-[400px]"
            >
              <div
                className="relative p-[2px] rounded-xl backdrop-blur-sm"
                style={{
                  background: `linear-gradient(-30deg, ${colors.dark}, transparent, ${colors.dark})`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl blur-2xl opacity-30 scale-105 -z-10 transition-all duration-300 group-hover:opacity-50"
                  style={{
                    background: `linear-gradient(-30deg, ${colors.light}, transparent, ${colors.light})`,
                  }}
                />

                {/* Card */}
                <div className="relative rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-md overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-xl border-2 opacity-50"
                    style={{ borderColor: colors.medium }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl border-2 blur-sm opacity-60"
                    style={{ borderColor: colors.medium }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl border-2 blur opacity-80"
                    style={{ borderColor: colors.light }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl border-2 opacity-90"
                    style={{
                      borderColor: colors.light,
                      filter: "url(#turbulent-displace)",
                    }}
                  />

                  {/* Glow hover overlays */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 mix-blend-overlay scale-105 blur-md transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-50 mix-blend-overlay scale-105 blur transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 w-full h-full p-6 flex flex-col min-h-[300px]">
                    {/* Difficulty badge */}
                    <div
                      className={`absolute w-full md:w-[100px] flex items-center justify-center text-center top-4 left-auto md:left-63 px-4 py-1 border-2 ${level.borderColor} ${level.color} rounded-full font-semibold text-sm backdrop-blur-md relative overflow-hidden group/badge`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 ${level.borderColor.replace(
                          "border",
                          "bg"
                        )} blur-sm`}
                      />
                      <span className="relative z-10">{level.difficulty}</span>
                    </div>

                    {/* Image + Text */}
                    <div className="flex flex-col flex-1 justify-center mt-2">
                      <div className="flex justify-center">
                        <div className="relative w-48 h-48 mt-5 mb-5">
                          <img
                            src={level.image}
                            alt={level.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <motion.h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                        {level.title}
                      </motion.h2>
                      <motion.p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        {level.description}
                      </motion.p>

                      {/* Button */}
                      {level.locked === true ? (
                        <ButtonCardText text={"Count Me In"} disabled={level.locked} />
                      ): (
                        <ButtonCardText text={"Locked"} disabled={level.locked} />
                      )}
                    </div>

                    {/* Hover underline animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100"
                      style={{ color: colors.light }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute inset-0 rounded-xl overflow-hidden -z-20">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: colors.light,
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsData;
