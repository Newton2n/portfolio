"use client";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactItem } from "../ContactItem";

const ConnectPage = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-12 py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">
            Contact
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            I am currently open to new roles and collaborations. Use the form below or reach out via my contact channels.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          action="https://formspree.io/f/mgojpkyv" 
          method="POST" 
          target="_blank"
          className="w-full grid grid-cols-1 gap-6 mb-16"
        >

          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" 
            />
          </div>

          {/* Row 2: Message (The Down Box) */}
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={5} 
            required 
            className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white resize-none"
          ></textarea>

          {/* Row 3: Buttons */}
          <div className="flex gap-4">
            <button 
              type="submit" 
              className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
            <button 
              type="reset" 
              className="px-8 py-4 border-2 border-neutral-200 dark:border-neutral-800 rounded font-bold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Clear All
            </button>
          </div>
        </form>

        {/* Quick Channels */}
        <div className="grid md:grid-cols-3 gap-6">
          <ContactItem 
            icon={<MdEmail className="text-xl" />} 
            label="Email" 
            value="newton.bepari.dev@gmail.com" 
            href="mailto:newton.bepari.dev@gmail.com" 
          />
          <ContactItem 
            icon={<FaPhone className="text-xl" />} 
            label="Phone" 
            value="+880 161 267 6969" 
            href="tel:+8801612676969" 
          />
          <ContactItem 
            icon={<FaWhatsapp className="text-xl" />} 
            label="WhatsApp" 
            value="Chat via WhatsApp" 
            href="https://wa.me/8801612676969" 
            isExternal={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;