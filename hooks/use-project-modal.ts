import {create} from "zustand"

interface ProjectModalStore {
    isOpen: boolean;
    toggleOpen: () => void;
}

export const useProjectModalStore = create<ProjectModalStore>((set)=>({
    isOpen: false,
    
})) 