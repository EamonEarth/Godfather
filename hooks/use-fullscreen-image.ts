import { StaticImageData } from "next/image";
import {create} from "zustand"

interface FullscreenImageStore {
    isOpen: boolean;
    src: string | StaticImageData;
    toggleOpen: () => void;
    openImage: (imageSrc: string | StaticImageData) => void;
}

export const useFullscreenImageStore = create<FullscreenImageStore>((set)=>({
    isOpen: false,
    src: "",
    toggleOpen: () => set((state) => ({isOpen: !state.isOpen})),
    openImage: (imageSrc: string | StaticImageData) => set({ src: imageSrc, isOpen: true }),

}))