import { motion } from 'framer-motion';
// import HexGrid from '../elements/Hexagon/HexGrid';
// import ProfilePic from '../elements/ProfilePic';
import Hexagon from '../elements/Hexagon/Hexagon';

function Hero() {
  return (<div className="snap-start flex justify-center items-center flex-col h-screen bg-gradient-to-r from-purple-600 to-blue-600">
    
    <div className="flex relative w-full h-full items-center justify-center">
      <Hexagon image={"./content/arcreactor.gif"} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-50 pointer-events-none text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-[72px] font-bold">Hi, I'm Dennis</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-[48px]">A developer who brings ideas to life</p>
        </motion.div>
      </div>
    </div>

  </div>);
}

export default Hero;