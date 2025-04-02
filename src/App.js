import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FireIcon,
  XMarkIcon,
  ComputerDesktopIcon,
  ClockIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/50 rounded-xl p-8 max-w-2xl w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Front Desk",
      company: "Five Points Fitness",
      period: "2022 - Present",
      image: "/RIMAGE/FIVE.jpg",
      details: {
        contact: "Bryan Lefebure",
        position: "Owner",
        location: "5651 Paradise Drive, Corte Madera, CA 94925",
        phone: "(415)-927-9494 (Corte Madera)",
        linkedin: "Bryan Lefebure"
      }
    },
    {
      title: "Kitchen Staff",
      company: "Amy's Drive Thru",
      period: "2021 - 2022",
      image: "/RIMAGE/AMY.png",
      details: {
        location: "5839 Paradise Dr, Corte Madera, CA 94925",
        phone: "(415) 737-6055",
        email: "paul.schiefer@amys.com",
        website: "http://www.amysdrivethru.com"
      }
    },
    {
      title: "Backwaiter/Host",
      company: "Ditas Marin",
      period: "2020 - 2021",
      image: "/RIMAGE/DITAS.png",
      details: {
        location: "562 Bridgeway, Sausalito, CA 94965",
        phone: "(415) 332-9535",
        email: "info@ditasmarin.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-['Space_Grotesk']">
      {/* Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-crimson/20 rounded-full blur-3xl top-1/4 left-1/4"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl top-1/3 right-1/4"
          animate={{
            x: [100, 0, 100],
            y: [50, 0, 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-2xl bottom-1/4 left-1/3"
          animate={{
            x: [50, -50, 50],
            y: [-30, 30, -30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-yellow-500/20 rounded-full blur-2xl top-2/3 right-1/3"
          animate={{
            x: [-100, 100, -100],
            y: [100, -100, 100],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-2xl bottom-1/3 left-2/3"
          animate={{
            x: [0, 150, 0],
            y: [150, 0, 150],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-pink-500/20 rounded-full blur-xl top-1/2 right-1/2"
          animate={{
            x: [-80, 80, -80],
            y: [-80, 80, -80],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-crimson to-neon-blue tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luke Harding
          </motion.h1>
          <motion.p 
            className="text-xl text-chrome-silver mb-8 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Virtual Resume
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="tel:+14158588783" className="hover:text-neon-blue transition-colors">📱 (415) 858-8783</a>
            <a href="mailto:lukeharding264@gmail.com" className="hover:text-neon-blue transition-colors">✉️ lukeharding264@gmail.com</a>
            <span>📍 San Francisco Bay Area</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-96 h-96 mb-8">
              {/* Border gradient effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue to-crimson p-[2px]">
                <div className="absolute inset-[2px] bg-black rounded-lg"></div>
              </div>
              <img 
                src="/RIMAGE/ru.png" 
                alt="Profile" 
                className="relative w-full h-full object-contain rounded-lg z-10 p-4"
              />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl font-bold mb-12 text-crimson tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-chrome-silver mb-12 max-w-3xl mx-auto">
              I'm passionate about fitness, technology, and creating positive experiences for others. 
              My background in athletics and customer service has shaped me into an energetic, 
              adaptable professional who thrives in dynamic environments.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <CpuChipIcon className="w-12 h-12" />, text: "Logical Thinking", color: "from-blue-500 to-cyan-500" },
                { icon: <ChatBubbleLeftRightIcon className="w-12 h-12" />, text: "Social Speaking", color: "from-purple-500 to-pink-500" },
                { icon: <BoltIcon className="w-12 h-12" />, text: "Adapting", color: "from-yellow-500 to-orange-500" },
                { icon: <HeartIcon className="w-12 h-12" />, text: "Listening", color: "from-red-500 to-pink-500" },
                { icon: <FireIcon className="w-12 h-12" />, text: "Lifting", color: "from-crimson to-red-500" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 bg-black/50 rounded-xl hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`mb-4 bg-gradient-to-r ${skill.color} p-3 rounded-lg`}>
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-center">{skill.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neon-blue mb-12">Hobbies</h3>
            <div className="space-y-8">
              {/* Gym */}
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8 bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-chrome-silver/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-crimson to-red-500 rounded-xl p-4 flex items-center justify-center flex-shrink-0">
                  <FireIcon className="w-16 h-16 text-white" />
                </div>
                <p className="text-lg text-chrome-silver text-left">
                  Going to the gym is a huge part of who I am and how I live today. Ever since the beginning of sophomore year I have been training hard to become as strong and healthy as possible.
                </p>
              </motion.div>

              {/* Reading */}
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8 bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-chrome-silver/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 flex items-center justify-center flex-shrink-0">
                  <BookmarkIcon className="w-16 h-16 text-white" />
                </div>
                <p className="text-lg text-chrome-silver text-left">
                  Reading is an important part of getting your mindset straight and not over stimulating it like with a phone or other device.
                </p>
              </motion.div>

              {/* Art & Creativity */}
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-8 bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-chrome-silver/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 flex items-center justify-center flex-shrink-0">
                    <PaintBrushIcon className="w-16 h-16 text-white" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 flex items-center justify-center flex-shrink-0">
                    <VideoCameraIcon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <p className="text-lg text-chrome-silver text-left">
                  Art and everything creative puts my brain into a focused happy state. Also creating interesting and funny videos or any sort of content.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <ComputerDesktopIcon className="w-8 h-8 text-neon-blue" />
                  <h3 className="text-2xl font-bold text-neon-blue">Current Ventures</h3>
                </div>
                <p className="text-lg text-chrome-silver leading-relaxed">
                  I'm currently pursuing a dream of mine with entrepreneurial spirit! I offer web design and backend coding services locally or internationally. I also am in the process of starting my own online business and I need some extra capital.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-crimson opacity-10 blur rounded-xl"></div>
                  <img 
                    src="/RIMAGE/PUT.png" 
                    alt="Modern Monitor Display" 
                    className="relative rounded-xl w-full h-auto z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 
            className="text-4xl font-bold mb-2 text-crimson tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-gray-500 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Click Me!
          </motion.p>
          <div className="space-y-8 max-w-3xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="p-8 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-48 h-48 md:w-32 md:h-32 flex-shrink-0">
                    <img 
                      src={job.image} 
                      alt={job.company}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-neon-blue mb-2">{job.title}</h3>
                    <p className="text-xl text-chrome-silver mb-2">{job.company}</p>
                    <p className="text-lg text-gray-400">{job.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-crimson tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hours
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Available Hours */}
            <motion.div
              className="bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-chrome-silver/30"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-6 text-center">Hours I Can Work</h3>
              <div className="space-y-4">
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Monday:</span> Anytime
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Tuesday:</span> Anytime
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Wednesday:</span> 6am - 2pm
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Thursday:</span> NA
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Friday:</span> Anytime
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Saturday:</span> Anytime
                </p>
                <p className="text-chrome-silver flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-neon-blue" />
                  <span className="font-bold">Sunday:</span> Anytime
                </p>
              </div>
            </motion.div>

            {/* Looking For */}
            <motion.div
              className="bg-black/30 rounded-xl p-8 backdrop-blur-sm border border-chrome-silver/30"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-6 text-center">Hours I'm Looking For</h3>
              <div className="space-y-4 text-center">
                <p className="text-chrome-silver text-lg mb-4">Whatever is available</p>
                <p className="text-chrome-silver text-lg">I am free when not in class</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-crimson tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                school: "Tamalpais High School",
                degree: "High Honors Diploma",
                period: "2018 - 2022",
              },
              {
                school: "Butte College",
                degree: "Business Administration",
                period: "2022 - Present",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="p-8 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-neon-blue mb-2">{edu.school}</h3>
                <p className="text-xl text-chrome-silver mb-2">{edu.degree}</p>
                <p className="text-lg text-gray-400">{edu.period}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-crimson opacity-20 blur-xl rounded-3xl"></div>
              <img 
                src="/RIMAGE/arm.png" 
                alt="Decorative Arm Illustration" 
                className="relative w-full h-auto rounded-2xl z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why I Want to Work Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            className="p-12 bg-black/30 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl text-center italic text-chrome-silver leading-relaxed">
              "I love lifting, and being in a gym has always been a fond memory for me. 
              I'm energetic, approachable, and aim to make people feel welcomed and appreciated."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-crimson tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.form
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-black/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-black/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <input
              type="text"
              placeholder="Business"
              className="w-full p-4 bg-black/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <input
              type="text"
              placeholder="Position"
              className="w-full p-4 bg-black/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 bg-black/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-crimson text-white rounded-xl font-bold text-lg hover:bg-crimson/90 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
          <motion.div
            className="mt-12 text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">808 West 2cd Ave Acacia Apartments, Chico, CA 95926</p>
            <p className="text-gray-500">(415) 858-8783</p>
            <p className="text-gray-500">Lukeharding264@gmail.com</p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-neon-blue">{selectedJob.company}</h3>
            <div className="space-y-4">
              {selectedJob.details.contact && (
                <div>
                  <h4 className="text-xl font-semibold text-crimson">Contact</h4>
                  <p className="text-chrome-silver">{selectedJob.details.contact}</p>
                </div>
              )}
              {selectedJob.details.position && (
                <div>
                  <h4 className="text-xl font-semibold text-crimson">Position</h4>
                  <p className="text-chrome-silver">{selectedJob.details.position}</p>
                </div>
              )}
              <div>
                <h4 className="text-xl font-semibold text-crimson">Location</h4>
                <p className="text-chrome-silver">{selectedJob.details.location}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-crimson">Phone</h4>
                <p className="text-chrome-silver">{selectedJob.details.phone}</p>
              </div>
              {selectedJob.details.email && (
                <div>
                  <h4 className="text-xl font-semibold text-crimson">Email</h4>
                  <p className="text-chrome-silver">{selectedJob.details.email}</p>
                </div>
              )}
              {selectedJob.details.website && (
                <div>
                  <h4 className="text-xl font-semibold text-crimson">Website</h4>
                  <a href={selectedJob.details.website} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:text-neon-blue/80 transition-colors">
                    {selectedJob.details.website}
                  </a>
                </div>
              )}
              {selectedJob.details.linkedin && (
                <div>
                  <h4 className="text-xl font-semibold text-crimson">LinkedIn</h4>
                  <p className="text-chrome-silver">{selectedJob.details.linkedin}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App; 