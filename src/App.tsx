import React from "react";
// import Accordion from "@/components/samples/accordion";
// import { AnimatedBackground } from "@/components/samples/animatedBackground";
// import { AnimatedGroup } from "@/components/samples/animatedGroup";
import AnimatedNumber from "@/components/samples/animatedNumber";
// import { BorderTrail } from "@/components/samples/borderTrail";
// import { Carousel } from "@/components/samples/carousel";
// import { Cursor } from "@/components/samples/cursor";
// import { Dialog } from "@/components/samples/dialog";
// import { Disclosure } from "@/components/samples/disclosure";
// import { Dock } from "@/components/samples/dock";
// import { InfiniteSlider } from "@/components/samples/infiniteSlider";
// import { InView } from "@/components/samples/inView";
// import { Popover } from "@/components/samples/popover";
// import { ScrollProgress } from "@/components/samples/scrollProgress";
// import { TextEffect } from "@/components/samples/textEffect";
// import { ToolbarDynamic } from "@/components/samples/toolbarDynamic";
// import { ToolbarExpandable } from "@/components/samples/toolbarExpandable";
// import { TransitionPanel } from "@/components/samples/transitionPanel";

const components = [
  "Animated Number",
  // "Accordion",
  // "Animated Background",
  // "Animated Group",
  // "Border Trail",
  // "Carousel",
  // "Cursor",
  // "Dialog",
  // "Disclosure",
  // "Dock",
  // "Infinite Slider",
  // "In View",
  // "Popover",
  // "Scroll Progress",
  // "Text Effect",
  // "Toolbar Dynamic",
  // "Toolbar Expandable",
  // "Transition Panel",
];

const componentMap: { [key: string]: React.FC } = {
  // Accordion,
  // AnimatedBackground,
  // AnimatedGroup,
  // BorderTrail,
  // Carousel,
  // Cursor,
  // Dialog,
  // Disclosure,
  // Dock,
  // InfiniteSlider,
  // InView,
  // Popover,
  // ScrollProgress,
  // TextEffect,
  // ToolbarDynamic,
  // ToolbarExpandable,
  // TransitionPanel,
  AnimatedNumber,
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow p-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {components.map((componentName, index) => {
            const camelCaseName = componentName.replace(/\s+/g, "");
            const Component = componentMap[camelCaseName];

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 w-[600px] h-[400px] flex flex-col items-center justify-center"
              >
                <h2 className="text-gray-600 text-sm underline text-center font-bold mb-2">
                  {componentName}
                </h2>
                <div className="flex items-center justify-center h-full w-full">
                  {Component ? <Component /> : <p>Component not found</p>}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
