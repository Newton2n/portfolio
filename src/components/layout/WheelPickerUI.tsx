"use client";
import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
} from "../ui/WheelPicker";
import { useState } from "react";
const options: WheelPickerOption[] = [
  // Core Technologies
  { label: "HTML5", value: "html5" },
  { label: "CSS3", value: "css3" },
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },

  // Styling
  { label: "Tailwind CSS", value: "tailwind-css" },
  { label: "shadcn/ui", value: "shadcn-ui" },
  { label: "Framer Motion", value: "framer-motion" },

  // Frontend
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "React Router", value: "react-router" },
  { label: "Redux", value: "redux" },

  // Backend
  { label: "Node.js", value: "nodejs" },
  { label: "Express.js", value: "expressjs" },
  { label: "MongoDB", value: "mongodb" },
  { label: "Mongoose", value: "mongoose" },

  // Tools
  { label: "Git", value: "git" },
  { label: "GitHub", value: "github" },

  // Concepts
  { label: "REST APIs", value: "rest-api" },
  { label: "Responsive Design", value: "responsive-design" },

  // Design Tools
  { label: "Figma", value: "figma" },
  { label: "Adobe Photoshop", value: "adobe-photoshop" },
];

export default function WheelPickerUi() {
  const [value, setValue] = useState("nextjs");

  return (
    <WheelPickerWrapper>
      <WheelPicker options={options} value={value} onValueChange={setValue} />
    </WheelPickerWrapper>
  );
}
