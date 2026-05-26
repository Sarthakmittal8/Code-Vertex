import React from "react";

const RectangleSkeleton: React.FC = () => {
    return (
        <div className='space-y-2.5 animate-pulse'>
            <div className='flex items-center w-full space-x-2'>
                {/* UPDATED CLASSES:
                  - Enforced `rounded-none` to protect your customized sharp code judge style.
                  - Added border-dark-divider-border-2 and bg-dark-fill-2 with opacity control.
                */}
                <div className='h-6 w-12 rounded-none bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            </div>
        </div>
    );
};

export default RectangleSkeleton;