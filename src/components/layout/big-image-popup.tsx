"use client"; 

import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

interface BigImagePopupProps {
  onClose: () => void;
  imageSrc: string;
}

export default function BigImagePopup({ onClose, imageSrc }: BigImagePopupProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // Closes when clicking the backdrop
    >
      <div
        className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
      >
        {/* Close Button */}
        <button
          className="absolute -top-10 right-0 text-[#FFD700] hover:scale-110 transition-transform text-3xl cursor-pointer"
          aria-label="Close"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Image Container */}
        <div className="rounded-xl overflow-hidden border-[1.5px] border-[#E2DDB4] bg-black">
          <Image
            src={imageSrc}
            alt="Expanded view"
            width={1200} 
            height={800} 
            className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}