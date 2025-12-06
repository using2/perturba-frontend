import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UploadedImage {
    fileName: string;
    fileType: string;
    fileSize: number;
    assetId: number;
    preview: string;
}

interface ImageUploadState {
    uploadedImage: UploadedImage | null;
    setUploadedImage: (image: UploadedImage | null) => void;
    clearUploadedImage: () => void;
}

export const useImageUploadStore = create<ImageUploadState>()(
    persist(
        (set) => ({
            uploadedImage: null,

            setUploadedImage: (image) => set({ uploadedImage: image }),

            clearUploadedImage: () => set({ uploadedImage: null }),
        }),
        {
            name: "image-upload-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
