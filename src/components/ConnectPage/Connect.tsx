
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const ConnectPage = () => {
  return (
    <>

   <section id="contact" className="w-full bg-slate-950 px-4 md:px-16 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Connect With Me</h2>

      <p className="text-slate-400 text-center mb-12 max-w-2xl">
        I'm always interested in collaborating on projects or freelance opportunities. Reach out and let's build something amazing together.
      </p>

      <div className="flex flex-wrap justify-center max-w-full gap-6 text-2xl">
        <a href="https://github.com/Newton2n" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/newton2n" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="mailto:newton.bepari.dev@gmail.com" aria-label="Email" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <SiGmail />
        </a>
        <a href="https://www.instagram.com/webcre8or" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <FaInstagram />
        </a>
        <a href="https://x.com/NewtonYt66184" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <FaXTwitter />
        </a>
        <a href="https://wa.me/8801612676969" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <FaWhatsapp />
        </a>
      </div>
    </section>
    
    </>
  );
};

export default ConnectPage;
