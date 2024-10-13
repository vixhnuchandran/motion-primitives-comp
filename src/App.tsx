import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="p-4 bg-gray-600 text-white text-lg font-bold"></header>
      <main className="flex-grow p-4 flex items-center justify-center">
        {" "}
        {/* Centering the content */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-md text-center font-bold mb-2">Accordion</h2>
            {/* <Accordion /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Animated Background
            </h2>
            {/* <AnimatedBackground /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Animated Group
            </h2>
            {/* <AnimatedGroup /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Animated Number
            </h2>
            {/* <AnimatedNumber /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Border Trail</h2>
            {/* <BorderTrail /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Carousel</h2>
            {/* <Carousel /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Cursor</h2>
            {/* <Cursor /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Dialog</h2>
            {/* <Dialog /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Disclosure</h2>
            {/* <Disclosure /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Dock</h2>
            {/* <Dock /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Infinite Slider
            </h2>
            {/* <InfiniteSlider /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">In View</h2>
            {/* <InView /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Popover</h2>
            {/* <Popover /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Scroll Progress
            </h2>
            {/* <ScrollProgress /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">Text Effect</h2>
            {/* <TextEffect /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Toolbar Dynamic
            </h2>
            {/* <ToolbarDynamic /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Toolbar Expandable
            </h2>
            {/* <ToolbarExpandable /> */}
          </div>
          <div>
            <h2 className="text-md text-center font-bold mb-2">
              Transition Panel
            </h2>
            {/* <TransitionPanel /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
