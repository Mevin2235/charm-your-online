
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean code and creative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
