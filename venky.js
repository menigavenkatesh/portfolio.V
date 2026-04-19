"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/menigavenkatesh/repos")
      .then(res => res.json())
      .then(data => {
        const customProject = {
          id: 'my web',
          name: 'Secure Cloud Data Storage using Hybrid Encryption',
          description: 'High level security with hybrid encryption, direct cloud storage, private key for data security, decryption and encryption.',
          html_url: 'http://127.0.0.1:5000/'
        };
        setRepos([...data.slice(0, 5), customProject]);
      });
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{opacity:0.5, y:50}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:1}}
          className="text-5xl font-bold"
        >
          Hi, I'm Venkatesh
        </motion.h1>

        <motion.p 
          initial={{opacity:0.5}} 
          animate={{opacity:1}} 
          transition={{delay:0.5, duration:1}}
          className="mt-4 text-red-400"
        >
          Full Stack Developer | UI/UX Designer | Video Editor
        </motion.p>

        <a href="#projects" className="mt-4 px-3 py-1 bg-white text-blue rounded-lg">
                        projects
        </a>
      </section>

      {/* ABOUT */}
      <section className="p-10 text-center">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-3xl">
          About Me
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.2, duration:0.8}}
          className="mt-4 text-white-400"
        >
          I build modern websites using React, Next.js and animations. Passionate about UI/UX design and video editing.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section className="p-10 text-center">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-3xl">
          Skills
        </motion.h2>
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          {["HTML","CSS","JavaScript","React","Next.js","UI/UX Design","Video Editing","Git"].map(skill => (
            <motion.span 
              whileHover={{scale:1.2}} 
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10 text-center">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-3xl">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {repos.map(repo => (
            <motion.div 
              key={repo.id}
              whileHover={{scale:1.05}}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <h3 className="font-bold">{repo.name}</h3>
              <p className="text-gray-400 text-sm">
                {repo.description || "No description"}
              </p>
              <a 
                href={repo.html_url} 
                target="_blank"
                className="text-blue-400 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> View Code
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-3xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Contact
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:45}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.2, duration:0.8}}
          className="mt-4 text-yellow-400"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> <a href="mailto:menigavenkates94@email.com">menigavenkates94@email.com</a>
        </motion.p>
        <motion.p 
          initial={{opacity:0, y:50}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.4, duration:0.8}}
          className="text-yellow-400"
        >
         <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75 1.25 1.25 0 0 1 17.25 5.5M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg> <a href="https://instagram.com/thevenky10" target="_blank">@thevenky10</a>
        </motion.p>
      </section>

    </main>
  );
}