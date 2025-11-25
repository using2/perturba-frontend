"use client";

import TransformStatusModal from "@/components/TransformStatusModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiDotsVerticalRounded, BiImage } from "react-icons/bi";

export default function ResponsiveImageUploadPage() {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showStatus, setShowStatus] = useState(false);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSelectedFile(file);

        const fileUrl = URL.createObjectURL(file);
        router.push(`/image-transform?file=${encodeURIComponent(fileUrl)}`);
    };

    return (
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
            <div className="flex relative items-center justify-between px-3 sm:px-4 md:px-16 py-3 sm:py-4 md:py-6 bg-white md:bg-gray-50">
                <h1 className="text-sm sm:text-base md:text-2xl font-semibold md:font-bold text-gray-900">
                    파일 업로드 하기
                </h1>
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center p-2"
                    aria-label="변환 진행 상태"
                    onClick={() => setShowStatus((v) => !v)}
                >
                    <BiDotsVerticalRounded size={28} color="white" />
                </button>
                {showStatus && (
                    <TransformStatusModal
                        files={[
                            { fileName: "example.jpeg", status: "processing" },
                            { fileName: "example.jpeg", status: "done" }
                        ]}
                    />
                )}
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <label className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[698px] bg-slate-100 border-2 md:border-4 border-dashed border-blue-500 rounded-2xl py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 cursor-pointer shadow-md md:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.20)]">
                    <input
                        type="file"
                        accept="image/jpeg"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 md:mb-2">
                        <BiImage size={40} className="text-blue-500 sm:w-12 sm:h-12" />
                    </div>
                    <span className="text-[11px] sm:text-xs md:text-base font-medium text-gray-900 text-center px-3 sm:px-4 md:px-8 leading-tight sm:leading-normal">
                        파일을 업로드하려면 클릭하거나 끌어다 놓으세요
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 text-center">
                        지원 조건: 244×244px · JPEG · ?MB 이하
                    </span>
                </label>
            </div>

            <div className="px-4 sm:px-6 md:px-16 pb-6">
                <div className="w-full max-w-[328px] sm:max-w-[360px] md:max-w-[840px] mx-auto bg-white rounded-2xl overflow-hidden shadow-sm md:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] border-2 border-indigo-100">
                    <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-slate-100 border-b-2 border-indigo-100">
                        <h2 className="text-sm sm:text-base font-bold text-gray-900">지원 파일 조건</h2>
                    </div>

                    <div className="md:hidden px-4 sm:px-6 py-4 sm:py-6 bg-slate-100 border-l-2 border-r-2 border-b-2 border-indigo-100 space-y-3 sm:space-y-4">
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                            <span className="text-xs sm:text-sm text-gray-600">파일형식</span>
                            <span className="text-sm sm:text-base font-medium text-gray-900">JPEG</span>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                            <span className="text-xs sm:text-sm text-gray-600">최대 파일 사이즈</span>
                            <span className="text-sm sm:text-base font-medium text-slate-950">?MB</span>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                            <span className="text-xs sm:text-sm text-gray-600">최대 해상도</span>
                            <span className="text-sm sm:text-base font-medium text-gray-900">224px x 224px</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="px-20 py-2.5 bg-indigo-100 flex justify-between">
                            <span className="flex-1 text-center text-base font-medium text-gray-900">파일형식</span>
                            <span className="flex-1 text-center text-base font-medium text-gray-900">최대 파일 사이즈</span>
                            <span className="flex-1 text-center text-base font-medium text-gray-900">최대 해상도</span>
                        </div>
                        <div className="px-16 py-3 bg-slate-100 border-l-2 border-r-2 border-b-2 border-indigo-100 flex justify-between">
                            <span className="flex-1 text-center text-base font-medium text-gray-900">JPEG</span>
                            <span className="flex-1 text-center text-base font-medium text-slate-950">?MB</span>
                            <span className="flex-1 text-center text-base font-medium text-gray-900">224px x 224px</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
