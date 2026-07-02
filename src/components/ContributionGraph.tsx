"use client";
import { GitHubCalendar } from "react-github-calendar";

const ContributionGraph = () => {
  // These colors provide high visibility while maintaining a professional, muted tone
  const visibleMutedTheme = {
    light: ["#e5e7eb", "#9ca3af", "#6b7280", "#4b5563", "#374151"], // Grays
    dark: ["#1f2937", "#374151", "#4b5563", "#6b7280", "#9ca3af"], // Slate/Grays
  };

  return (
    <section className="w-full px-6 md:px-12 py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-8">
          Code Contributions
        </h2>

        <div className="p-8 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg flex justify-center bg-white dark:bg-black overflow-x-auto">
          <GitHubCalendar
            username="Newton2n"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={visibleMutedTheme}
            renderColorLegend={() => <></>}
          />
        </div>
      </div>
    </section>
  );
};

export default ContributionGraph;
