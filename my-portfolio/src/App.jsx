import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center p-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-neon-blue mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mrituyanjay Sharma
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-neon-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Crafting Smart Code with AI and Precision
        </motion.p>
        <div className="flex gap-4 mt-6">
          <a href="/CV4.pdf" download>
            <Button className="bg-neon-purple hover:bg-neon-blue">Download Resume</Button>
          </a>
          <Button className="bg-neon-green hover:bg-neon-blue">Hire Me</Button>
        </div>
        <div className="flex gap-6 mt-6 text-2xl">
          <a href="https://github.com/Mjsharma1234" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-neon-blue" />
          </a>
          <a href="https://www.linkedin.com/in/mrituyanjaysharma" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-neon-green" />
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <motion.h2
          className="text-3xl font-semibold text-neon-purple mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blog Insights
        </motion.h2>
        <div className="space-y-8">
          <BlogPost
            title="Discipline Meets Code"
            content="Growing up as an army brat, discipline is in my blood. It reflects in how I build, debug, and document code — with precision and purpose."
          />
          <BlogPost
            title="Why AI Is More Than Just Algorithms"
            content="To me, AI is a tool to uplift — from predicting careers to improving lives. Every model I build carries that mission."
          />
          <BlogPost
            title="How I Think Like a Soldier and Build Like a Developer"
            content="Focus. Adaptability. Execution. The military mindset drives the way I work on projects, lead teams, and meet deadlines."
          />
        </div>
      </section>
    </main>
  );
}

function BlogPost({ title, content }) {
  return (
    <motion.div
      className="p-6 rounded-lg border border-neon-blue bg-gray-900/40 shadow-neon"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-semibold text-neon-green mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
}
