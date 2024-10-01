import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";



const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUP = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const HeroSection = () => {
  return (
    <motion.section 
    variants={containerVariants}
    initial="hidden"
    animate="show"
        
        className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
        variants={fadeInUP}

        
            className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </motion.div>
        <motion.h1
          variants={fadeIn}
          className="text-3xl lg:text-5xl font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>
        <motion.p 
        variants={fadeInUP}
        className="mt-6 text-neutral-400 max-w-xl">
        {HERO_CONTENT.subHeading}
        </motion.p>
        <motion.div 
            variants={fadeInUP} 
            className="mt-6 space-x-4">
            <a href="#" className="inline-block bg-blue-600 hover:bg-blue-500 
            text-white px-6 py-3 rounded-lg font-medium">
                {HERO_CONTENT.callToAction.primary}
            </a>
            <a href="#" className="inline-block border border-gray-500 hover:border-gray-400
            text-white px-6 py-3 rounded-lg font-medium">
                {HERO_CONTENT.callToAction.secondary}
            </a>
         </motion.div>
            <motion.div 
            variants={fadeIn}    
                className="py-10">
                <p className="text-gray-400 text-center mb-8">
                    {HERO_CONTENT.trustedByText}
                    </p>
                    <motion.div 
                variants={fadeInUP} 
                    className="flex flex-wrap justify-center gap-8">
                      {BRAND_LOGOS.map((logo, index) => (
                         <img key={index} src={logo.src}  alt={logo.alt} className="h-8" />
                      ))}

                    </motion.div>
            </motion.div>
            <motion.div            
        variants={fadeIn} 
            className="mt-12">
              <img src={heroImage} alt="streamer SaaS Interface" 
              className="w-full rounded-3xl border border-neutral-800
              mb-20 " />          
            </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
