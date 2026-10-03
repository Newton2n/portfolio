import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { ContactItem } from "../ContactItem";

const ConnectPage = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full px-6 md:px-12 py-24 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <h2
            id="contact-heading"
            className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight"
          >
            Contact
          </h2>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            I am currently open to new developer roles and collaborations.
            Send me a message or reach out directly through one of my contact
            channels.
          </p>
        </header>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mgojpkyv"
          method="POST"
          target="_blank"
          className="w-full grid grid-cols-1 gap-6 mb-16"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="text-sm font-bold text-neutral-900 dark:text-white"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                required
                className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-sm font-bold text-neutral-900 dark:text-white"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                required
                className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-bold text-neutral-900 dark:text-white"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
            />
          </div>

          {/* Form Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded hover:opacity-80 transition-opacity cursor-pointer"
            >
              Send Message
            </button>

            <button
              type="reset"
              className="px-8 py-4 border-2 border-neutral-200 dark:border-neutral-800 rounded font-bold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </form>

        {/* Quick Contact Channels */}
        <fieldset className="border-0 p-0 m-0">
          <legend className="sr-only">
            Contact channels
          </legend>

          <div className="grid md:grid-cols-3 gap-6">
            <ContactItem
              icon={<MdEmail className="text-xl" aria-hidden="true" />}
              label="Email"
              value="newton.bepari.dev@gmail.com"
              href="mailto:newton.bepari.dev@gmail.com"
            />

            <ContactItem
              icon={<FaPhone className="text-xl" aria-hidden="true" />}
              label="Phone"
              value="+880 161 267 6969"
              href="tel:+8801612676969"
            />

            <ContactItem
              icon={<FaWhatsapp className="text-xl" aria-hidden="true" />}
              label="WhatsApp"
              value="Chat via WhatsApp"
              href="https://wa.me/8801612676969"
              isExternal={true}
            />
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default ConnectPage;