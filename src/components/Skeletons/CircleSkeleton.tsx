import React from "react";

const CircleSkeleton: React.FC = () => {
    return (
        <div className='space-y-2.5 animate-pulse max-w-lg'>
            <div className='flex items-center w-full space-x-2'>
                {/* UPDATED CLASSES:
                  - bg-dark-fill-2 instead of fill-3 for a slightly brighter neon opacity footprint.
                  - Added border border-dark-divider-border-2 to give structural definition to the shape.
                  - Added opacity-60 to smoothly blend the glow state into the page background.
                */}
                <div className='w-6 h-6 rounded-full bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            </div>
        </div>
    );
};

export default CircleSkeleton;