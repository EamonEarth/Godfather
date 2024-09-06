import { StaticImageData } from "next/image";
import {create} from "zustand"

interface FullscreenImageStore {
    isOpen: boolean;
    src: string | StaticImageData;
    setSrc: (imageSrc: string | StaticImageData) => void;
    toggleOpen: () => void;
}

export const useFullscreenImageStore = create<FullscreenImageStore>((set)=>({
    isOpen: false,
    src: "",
    setSrc: (imageSrc) => set({src: imageSrc}),
    toggleOpen: () => set((state) => ({isOpen: !state.isOpen})) 
}))