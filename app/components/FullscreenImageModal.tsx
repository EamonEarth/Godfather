import { useFullscreenImageStore } from '@/hooks/use-fullscreen-image';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface FullscreenImageModalProps {
    // isOpen: boolean;
    // src: string;
}

const FullscreenImageModal:React.FC<FullscreenImageModalProps> = () => {
    const { isOpen, toggleOpen, src } = useFullscreenImageStore() 

    
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
    
    console.log("isOpen, src ", isOpen, src)
    if (!isOpen) return null 

    console.log("count")
    console.count()
  return (
    <div 
    onClick={toggleOpen}
    style={{ 
        touchAction: 'none', // Disable all touch gestures
        userSelect: 'none', // Prevent text/image selection and dragging
        overflow: 'hidden', // Prevent scroll within the modal
     }}
    className={cn("flex justify-center items-center fixed inset-0 z-[999] object-fit bg-gradient-to-br from-teal-500 to-teal-800 overflow-hidden", isOpen ? "w-screen h-screen" : "w-0 h-0")}
    >
      <div className="p-8">
        <Image alt="Fullscreen Image" src={src}  className="object-contain w-full rounded-3xl border-[10px] border-slate-900"/>       
      </div>

      
    </div>
  )
}

export default FullscreenImageModal