import LazySection from "../ui/LazySection";
import AboutPage from "../AboutPage/AboutPage";
import ConnectPage from "../ConnectPage/Connect";
import ProjectSection from "../ProjectPage/ProjectSection";

const AllPage = () => {
  return (
    <>
      <LazySection minHeight="min-h-[1920px] md:min-h-[1420px]">
        {/* Delays rendering until the section is near the viewport to improve initial page performance */}
        <AboutPage />
      </LazySection>

      <LazySection >
        {/* Delays rendering until the section is near the viewport to improve initial page performance */}
        <ConnectPage />
      </LazySection>

      <LazySection minHeight="min-h-[500px] md:min-h-[400px]">
        {/* Delays rendering until the section is near the viewport to improve initial page performance */}
        <ProjectSection />
      </LazySection>
    </>
  );
};

export default AllPage;
