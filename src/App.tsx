import React, { useRef } from "react";
import AnimatedBackground from "@/components/samples/animatedBackground";
import AnimatedGroup from "@/components/samples/animatedGroup";
import AnimatedNumber from "@/components/samples/animatedNumber";
import Cursor from "@/components/samples/cursor";
import Dialog from "@/components/samples/dialog";
import Dock from "@/components/samples/dock";
import InfiniteSlider from "@/components/samples/infiniteSlider";
import Popover from "@/components/samples/popover";
import TextEffect from "@/components/samples/textEffect";
// import Accordion from "@/components/samples/accordion";
// import { Disclosure } from "@/components/samples/disclosure";
// import { BorderTrail } from "@/components/samples/borderTrail";
// import { Carousel } from "@/components/samples/carousel";
// import { ScrollProgress } from "@/components/samples/scrollProgress";
import { InView } from "./components/ui/in-view";
// import ToolbarDynamic from "@/components/samples/toolbarDynamic";
// import { ToolbarExpandable } from "@/components/samples/toolbarExpandable";
// import { TransitionPanel } from "@/components/samples/transitionPanel";

const components = [
  "Animated Group",
  "Animated Number",
  "Text Effect",
  "Dialog",
  "Infinite Slider",
  "Cursor",
  "Dock",
  "Popover",
  "Animated Background",

  // "Toolbar Dynamic",
  // "Accordion",
  // "Border Trail",
  // "Carousel",
  // "Disclosure",
  // "In View",
  // "Scroll Progress",
  // "Toolbar Expandable",
  // "Transition Panel",
];

const componentMap: { [key: string]: React.FC } = {
  // Accordion,
  AnimatedBackground,
  // BorderTrail,
  // Carousel,
  Cursor,
  // Disclosure,
  Dock,
  InfiniteSlider,
  // InView,
  Popover,
  // ScrollProgress,
  // ToolbarDynamic,
  // ToolbarExpandable,
  // TransitionPanel,
  AnimatedNumber,
  TextEffect,
  Dialog,
  AnimatedGroup,
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <div className="pointer-events-none absolute left-0 top-0 w-full"></div>
      <main className="flex-grow p-4 flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {components.map((componentName, index) => {
            const camelCaseName = componentName.replace(/\s+/g, "");
            const Component = componentMap[camelCaseName];

            return (
              <InView
                viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.09,
                    },
                  },
                }}
              >
                <div
                  key={index}
                  className="bg-gray-200 shadow-md rounded-lg p-4 w-[600px] h-[400px] flex flex-col items-center justify-center"
                >
                  <h2 className="text-gray-600 text-sm underline text-center font-bold mb-2">
                    {componentName}
                  </h2>
                  <div className="flex items-center justify-center h-full w-full">
                    {Component ? <Component /> : <p>Component not found</p>}
                  </div>
                </div>
              </InView>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
