import { useFullscreenImageStore } from '@/hooks/use-fullscreen-image';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface FullscreenImageModalProps {
    // isOpen: boolean;
    // src: string;
}

const FullscreenImageModal:React.FC<FullscreenImageModalProps> = () => {
    const { isOpen, toggleOpen, src } = useFullscreenImageStore() 
    console.log("isOpen, src ", isOpen, src)
  return (
    <div 
    // onClick={toggleOpen}
    style={{transform: "maxHeight 0.5s ease-in-out"}}
    className={cn("flex justify-center items-center fixed top-0 left-0 z-[999] object-contain bg-black/50", isOpen ? "w-screen h-screen max-h-screen" : "w-0 h-0 max-h-0")}>
        <div className="absolute top-2 right-2 bg-white text-red z-[1000]">
            <X onClick={toggleOpen} size="16" />
        </div>
       <Image alt="Fullscreen Image" src={src} fill objectFit='contain'/>
    </div>
  )
}

export default FullscreenImageModal