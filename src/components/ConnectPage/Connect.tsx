
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const ConnectPage = () => {
  return (
    <>

   <section className="w-full overflow-hidden bg-black text-[#E2DDB4]  px-4 md:px-16 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Connect With Me
      </h2>

      <p className="text-[#E2DDB4]/90 text-center mb-8 max-w-2xl">
        I'm always interested in collaborating on projects or freelance
        opportunities. Send me a message and I'll get back to you as soon as
        possible.
      </p>

      <div className="flex flex-wrap justify-center max-w-full gap-8 mt-12 text-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/Newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton GitHub Account"
          className="relative flex items-center group  overflow-hidden"
        >
          <FaGithub className="group-hover:text-[#FFD700] transition-colors" />
      
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton LinkedIn Profile"
          className="relative flex items-center group"
        >
          <FaLinkedin className="group-hover:text-[#FFD700] transition-colors" />
          
        </a>

        {/* Email */}
        <a
          href="mailto:newtonyt04@gmail.com"
          aria-label="Newton Email Address"
          className="relative flex items-center group"
        >
          <SiGmail className="group-hover:text-[#FFD700] transition-colors" />
         
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/webcre8or"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton Instagram Profile"
          className="relative flex items-center group"
        >
          <FaInstagram className="group-hover:text-[#FFD700] transition-colors" />
          
        </a>

        {/* X */}
        <a
          href="https://x.com/NewtonYt66184"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton Twitter(X) Account"
          className="relative flex items-center group"
        >
          <FaXTwitter className="group-hover:text-[#FFD700] transition-colors" />
          
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801612676969"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton WhatsApp Account"
          className="relative flex items-center group"
        >
          <FaWhatsapp className="group-hover:text-[#FFD700] transition-colors" />
          
        </a>
      </div>
    </section>
    
    </>
  );
};

export default ConnectPage;
