import "./hero.scss"
import { motion } from "framer-motion"

 const textVariants = {
    initial:{
       x:-500,
       opacity:0 ,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2.5,
          repeat: Infinity,
        },
      },
}

const sliderVariants = {
    initial:{
       x:0,
    },
    animate:{
        x:"-400%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            staggerChildren:0.1,
        },
    },
}

const Hero = () => {
  return (
    <div className="hero">
        <motion.div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>MATEUSZ WOJNOWSKI</motion.h2>
                <motion.h1 variants={textVariants}>Iluzjonista na każdą okazję</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Ostatnie opinie</motion.button>
                    <motion.button variants={textVariants}>Kontakt</motion.button>
                </motion.div>
                <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
            </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Iluzjonista Mentalista Performer
        </motion.div>
        <div className="imageContainer">
            <img src="./hero.png" alt="hero" />
        </div>
    </div>
  )
}

export default Hero