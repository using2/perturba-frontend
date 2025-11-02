import TransformLogTable from "@/components/TransformLogTable";

export default function ImageListPage() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col py-10 px-8 gap-16">
            <div>
                <span className="text-gray-900 text-2xl font-bold">변환된 이미지 목록</span>

                <TransformLogTable />
            </div>
        </div>
    );
};