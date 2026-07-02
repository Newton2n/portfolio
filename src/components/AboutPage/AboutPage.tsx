"use client";
import { useState } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Aligned with your specific Express/Full-Stack toolkit
  const technicalSkills = ["Express.js", "Node.js", "Next.js","TypeScript", "PostgreSQL", "Prisma"];
  
  const stats = [
    { number: "03+", label: "Years Project Experience" },
    { number: "08+", label: "Integrated Techs" },
    { number: "07+", label: "Total Projects" },
  ];

  return (
    <>
      <section id="about" className="w-full px-6 md:px-12 py-20 md:py-32 bg-white dark:bg-black transition-colors duration-200">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white mb-6 tracking-tight leading-none">
              Engineering Scalable Logic
            </h2>
            <p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed max-w-4xl">
              <span className="font-extrabold text-neutral-950 dark:text-white">Express.js Developer</span> & full-stack architect. I build secure server-side foundations and high-performance user interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
            
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-widest border-b-2 border-neutral-900 dark:border-white pb-2 inline-block">
                Technical Specialization
              </h3>
              <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                I specialize in the <span className="font-extrabold text-neutral-950 dark:text-white">Express.js ecosystem</span>, crafting secure and modular backend systems. From building RESTful API architectures to complex database modeling with <span className="font-extrabold text-neutral-950 dark:text-white">Prisma and PostgreSQL</span>, I focus on creating server-side logic that is both maintainable and performant.
              </p>
              <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                My full-stack approach seamlessly integrates server logic with modern frontend frameworks like <span className="font-extrabold text-neutral-950 dark:text-white">Next.js and Tailwind CSS</span>. Whether it's implementing secure <span className="font-extrabold text-neutral-950 dark:text-white">Stripe payment workflows</span> or managing state via TypeScript, I bridge the gap between robust data processing and seamless user experiences.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="w-full rounded border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 p-6 font-mono text-sm text-neutral-700 dark:text-neutral-300 space-y-4 shadow-md">
                <div className="flex items-center gap-2 border-b border-neutral-300 dark:border-neutral-800 pb-3">
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <span className="ml-2 font-sans font-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">api_config.sh</span>
                </div>
                <div className="space-y-2 text-sm leading-relaxed font-semibold">
                  <p><span className="text-neutral-400 dark:text-neutral-600 mr-2">1</span><span className="text-neutral-900 dark:text-white">const</span> server = &#123;</p>
                  <p><span className="text-neutral-400 dark:text-neutral-600 mr-2">2</span>&nbsp;&nbsp;framework: <span className="text-neutral-900 dark:text-neutral-100">&quot;Express.js&quot;</span>,</p>
                  <p><span className="text-neutral-400 dark:text-neutral-600 mr-2">3</span>&nbsp;&nbsp;orm: <span className="text-neutral-900 dark:text-neutral-100">&quot;Prisma/PostgreSQL&quot;</span>,</p>
                  <p><span className="text-neutral-400 dark:text-neutral-600 mr-2">4</span>&nbsp;&nbsp;payments: <span className="text-neutral-900 dark:text-neutral-100">&quot;Stripe Ready&quot;</span></p>
                  <p><span className="text-neutral-400 dark:text-neutral-600 mr-2">5</span>&#125;;</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full text-center py-3 mt-2 block border-2 border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black font-sans font-bold text-sm tracking-wide transition-all rounded shadow active:scale-[0.98] cursor-pointer"
                >
                  View Engineering Matrix
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="pb-12 border-b-2 border-neutral-200 dark:border-neutral-800">
              <h4 className="text-sm font-bold text-neutral-950 dark:text-white mb-8 uppercase tracking-widest">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-y-4 items-center">
                {technicalSkills.map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span className="text-neutral-900 dark:text-white font-bold text-base md:text-lg tracking-wide">{skill}</span>
                    {index < technicalSkills.length - 1 && (
                      <div className="w-[2px] h-5 bg-neutral-300 dark:bg-neutral-700 mx-5 md:mx-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-left">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" />
          <div className="relative w-full max-w-xl rounded border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black p-8 md:p-10 shadow-2xl space-y-6 z-10 text-neutral-900 dark:text-white animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 p-2 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 rounded text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
              <CloseIcon className="text-2xl" />
            </button>
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight border-b-2 border-neutral-100 dark:border-neutral-900 pb-3">
                Full-Stack Architecture
              </h3>
              <div className="pt-2 space-y-4 text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-normal">
                <p>I build systems with <span className="font-extrabold text-neutral-950 dark:text-white">Express.js</span> at the core, utilizing Prisma for type-safe database migrations and relations.</p>
                <p>From secure authentication flows to <span className="font-extrabold text-neutral-950 dark:text-white">Stripe-integrated billing systems</span>, I ensure every line of code contributes to a performant, reliable, and scalable production environment.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;