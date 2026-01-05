import React from 'react';
import { V6Logo } from './components/V6Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center relative overflow-hidden font-sans p-6">
      
      {/* 
        Container
        - 'flex-col' lays out the top and bottom rows.
        - The container width is defined by the widest content (Top Row).
      */}
      <div className="flex flex-col">
        
        {/* 
          Top Row: Logo + Title 
          - Sizes increased significantly as requested.
          - Logo: h-20 (80px) -> h-32 (128px)
          - Text: text-6xl (60px) -> text-9xl (128px)
          - This makes the logo box height equal to the text line-height on desktop.
        */}
        <div className="flex flex-row items-center gap-6 md:gap-10">
          <V6Logo className="h-20 md:h-32 w-auto text-black block" />
          
          {/* 
             Text Block
             line-height 1 (leading-none) keeps the box tight to the text.
          */}
          <h1 className="text-6xl md:text-9xl leading-none whitespace-nowrap flex select-none pt-2 md:pt-0">
            <span className="font-bold">V6</span>
            <span className="font-light ml-4 md:ml-6">Capital</span>
          </h1>
        </div>

        {/* 
          Bottom Row: Tagline
          - mt-8 md:mt-12: Spacing doubled relative to original, increased for larger scale.
          - justify-between: Spreads words to match the full width of the Top Row.
          - pl-1: "Tiny bit to the right" for perfect optical alignment.
        */}
        <div className="flex flex-row justify-between items-center w-full mt-8 md:mt-12 pl-2">
           <span className="text-2xl md:text-5xl font-light tracking-wide">Ambition.</span>
           <span className="text-2xl md:text-5xl font-light tracking-wide">Perspective.</span>
           <span className="text-2xl md:text-5xl font-light tracking-wide">Results.</span>
        </div>
        
      </div>

      {/* Footer */}
      <footer className="absolute bottom-12 w-full flex justify-center">
        <a 
          href="mailto:info@v6cap.com" 
          className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light tracking-wider"
        >
          info@v6cap.com
        </a>
      </footer>

    </div>
  );
};

export default App;