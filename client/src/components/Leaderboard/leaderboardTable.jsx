import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const colors = [
  '#FFB900', '#69797E', '#847545', '#E74856', '#0078D7', '#0099BC',
  '#7A7574', '#767676', '#FF8C00', '#E81123', '#0063B1', '#2D7D9A',
  '#5D5A58', '#4C4A48', '#F7630C', '#EA005E', '#8E8CD8', '#00B7C3',
  '#68768A', '#CA5010', '#C30052', '#6B69D6', '#038387', '#515C6B'
];

const TrophyIcon = () => (
  <svg
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    viewBox="0 0 32 32"
  >
    <path d="M 16 3 C 14.354991 3 13 4.3549901 13 6 C 13 7.125993 13.63434 8.112309 14.5625 8.625 L 11.625 14.5 L 7.03125 11.21875 C 7.6313215 10.668557 8 9.8696776 8 9 C 8 7.3549904 6.6450096 6 5 6 C 3.3549904 6 2 7.3549904 2 9 C 2 10.346851 2.9241199 11.470238 4.15625 11.84375 L 6 22 L 6 26 L 6 27 L 7 27 L 25 27 L 26 27 L 26 26 L 26 22 L 27.84375 11.84375 C 29.07588 11.470238 30 10.346852 30 9 C 30 7.3549901 28.645009 6 27 6 C 25.354991 6 24 7.3549901 24 9 C 24 9.8696781 24.368679 10.668557 24.96875 11.21875 L 20.375 14.5 L 17.4375 8.625 C 18.36566 8.112309 19 7.125993 19 6 C 19 4.3549901 17.645009 3 16 3 z M 16 5 C 16.564129 5 17 5.4358709 17 6 C 17 6.5641291 16.564129 7 16 7 C 15.435871 7 15 6.5641291 15 6 C 15 5.4358709 15.435871 5 16 5 z M 5 8 C 5.5641294 8 6 8.4358706 6 9 C 6 9.5641286 5.5641291 10 5 10 C 4.4358709 10 4 9.5641286 4 9 C 4 8.4358706 4.4358706 8 5 8 z M 27 8 C 27.564129 8 28 8.4358709 28 9 C 28 9.5641283 27.564128 10 27 10 C 26.435872 10 26 9.5641283 26 9 C 26 8.4358709 26.435871 8 27 8 z M 16 10.25 L 19.09375 16.4375 L 20.59375 16.8125 L 25.59375 13.25 L 24.1875 21 L 7.8125 21 L 6.40625 13.25 L 11.40625 16.8125 L 12.90625 16.4375 L 16 10.25 z M 8 23 L 24 23 L 24 25 L 8 25 L 8 23 z" />
  </svg>
);

const CoinIcon = () => (
  <svg
    fill="#E6AC00"
    height="20"
    viewBox="0 0 493 493"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M247,468 C369.05493,468 468,369.05493 468,247 C468,124.94507 369.05493,26 247,26 C124.94507,26 26,124.94507 26,247 C26,369.05493 124.94507,468 247,468 Z M236.497159,231.653661 L333.872526,231.653661 L333.872526,358.913192 C318.090922,364.0618 303.232933,367.671368 289.298112,369.742004 C275.363292,371.81264 261.120888,372.847943 246.570473,372.847943 C209.522878,372.847943 181.233938,361.963276 161.702804,340.193617 C142.17167,318.423958 132.40625,287.169016 132.40625,246.427855 C132.40625,206.805956 143.738615,175.914769 166.403684,153.753368 C189.068753,131.591967 220.491582,120.511432 260.673112,120.511432 C285.856523,120.511432 310.144158,125.548039 333.536749,135.621403 L316.244227,177.257767 C298.336024,168.303665 279.700579,163.826682 260.337335,163.826682 C237.840155,163.826682 219.820296,171.381591 206.277218,186.491638 C192.734139,201.601684 185.962702,221.915997 185.962702,247.435186 C185.962702,274.073638 191.419025,294.415932 202.331837,308.462679 C213.244648,322.509425 229.109958,329.532693 249.928244,329.532693 C260.785092,329.532693 271.809664,328.413447 283.002291,326.174922 L283.002291,274.96891 L236.497159,274.96891 L236.497159,231.653661 Z"></path>
  </svg>
);

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [maxScore, setMaxScore] = useState(500);

  const getData = () => {
    const data = {
      success: true,
      leaders: [
        { id: 1, shortForm: 'AM', name: 'Arjun Mehta', score: 285 },
        { id: 2, shortForm: 'RS', name: 'Ravi Sharma', score: 255 },
        { id: 3, shortForm: 'NP', name: 'Neha Patel', score: 220 },
        { id: 4, shortForm: 'RD', name: 'Rohan Das', score: 213 },
        { id: 5, shortForm: 'PA', name: 'Priya Anand', score: 202 }
      ],
      maxScore: 300
    };
    setLeaders(data.leaders);
    setMaxScore(data.maxScore);
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 180000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4">
        {/* Leaderboard */}
        <div className="space-y-4">
          {leaders.length > 0 ? (
            leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                className="bg-white/4 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-violet-700/50"
              >
                <div className="flex items-center gap-4">
                  {/* Trophy for top 3 */}
                  {index < 3 && (
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center relative"
                      style={{ backgroundColor: colors[index] }}
                    >
                      <TrophyIcon />
                      <div 
                        className="absolute -bottom-1 left-0 right-0 h-1.5"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-white font-semibold text-lg mb-2">
                      <div className='flex items-center justify-center gap-4'>
                        <div className='w-8 md:w-12 h-8 md:h-12 rounded-full p-1 border border-violet-600 flex items-center justify-center'>
                            <span className='w-full h-full text-xs md:text-sm flex items-center justify-center bg-violet-600 rounded-full'>{leader.shortForm}</span>
                        </div>
                        <span>{leader.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 opacity-80">
                        <CoinIcon />
                        <span className="font-medium">{leader.score}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.2,
                    ease: [0.6, 0.2, 0.1, 1]
                  }}
                  className="mt-3 h-1 bg-white/90 rounded-full overflow-hidden origin-left"
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: colors[index],
                      width: `${(leader.score / maxScore) * 100}%`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-400 py-12">
              No data available
            </div>
          )}
        </div>
      </div>
  );
};

export default Leaderboard;