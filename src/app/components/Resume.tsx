'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Somesh-Resume.pdf';
    link.download = 'Somesh_Bhatnagar_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />

            <div className="relative bg-gray-900 rounded-3xl border border-gray-800 p-12">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                >
                  <FileText size={48} className="text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Download My Resume
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Get a comprehensive overview of my skills, experience, and educational
                  background. Available in PDF format.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center"
                >
                  <Award className="mx-auto mb-3 text-blue-400" size={32} />
                  <h4 className="text-white font-semibold mb-2">Education</h4>
                  <p className="text-gray-400 text-sm">BCA Student</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/20 text-center"
                >
                  <Briefcase className="mx-auto mb-3 text-purple-400" size={32} />
                  <h4 className="text-white font-semibold mb-2">Experience</h4>
                  <p className="text-gray-400 text-sm">MERN Stack Projects</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-pink-500/10 rounded-xl border border-pink-500/20 text-center"
                >
                  <FileText className="mx-auto mb-3 text-pink-400" size={32} />
                  <h4 className="text-white font-semibold mb-2">Skills</h4>
                  <p className="text-gray-400 text-sm">Full Stack Development</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <button
                  onClick={downloadResume}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <Download
                    size={24}
                    className="group-hover:animate-bounce"
                  />
                  Download Resume
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>

                <p className="mt-4 text-gray-500 text-sm">PDF Format • Updated Recently</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
