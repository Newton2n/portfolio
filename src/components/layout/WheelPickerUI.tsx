"use client";
import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
} from "../ui/WheelPicker";
import { useState } from "react";
const options: WheelPickerOption[] = [
  {
    label: "HTML5",
    value: "html5",
  },
  {
    label: "CSS3",
    value: "css3",
  },
  // Core / Programming Languages

  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  // Frontend Frameworks / Libraries
  {
    label: "React",
    value: "react",
  },
  {
    label: "React Router",
    value: "react-router",
  },
  {
    label: "Redux",
    value: "redux",
  },
  {
    label: "Next.js ",
    value: "nextjs",
  },

  // Styling / UI Frameworks
  {
    label: "Tailwind CSS",
    value: "tailwind-css",
  },
  {
    label: "shadcn/ui",
    value: "shadcn-ui",
  },
  {
    label: "Motion",
    value: "motion",
  },
  {
    label: "Sass / SCSS",
    value: "sass",
  },
  // Backend / Fullstack Tools
  {
    label: "Appwrite",
    value: "appwrite",
  },

  // Version Control & Collaboration
  {
    label: "Git",
    value: "git",
  },
  {
    label: "GitHub",
    value: "github",
  },

  // General / Optional
  {
    label: "Problem Solving",
    value: "problem-solving",
  },
  {
    label: "Responsive Design",
    value: "responsive-design",
  },
  {
    label: "UI/UX Design",
    value: "ui-ux-design",
  },

  
  // Design & Prototyping Tools
  {
    label: "Figma",
    value: "figma",
  },
  {
    label: "Adobe Photoshop",
    value: "adobe-photoshop",
  },
  // Section Title (Optional)
  {
    label: "Creative Thinker",
    value: "creative thinker",
  },
];

export default function WheelPickerUi() {
  const [value, setValue] = useState("nextjs");

  return (
    <WheelPickerWrapper>
      <WheelPicker options={options} value={value} onValueChange={setValue} />
    </WheelPickerWrapper>
  );
}
