"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated, loginType } = useAuthStore();

    const isGuest = loginType === "GUEST";
    const guestAllowedPaths = ["/dashboard/image-upload"];
    const isGuestAllowedPath = guestAllowedPaths.includes(pathname);

    useEffect(() => {
        if (!isAuthenticated && !isGuest) {
            router.replace("/");
            return;
        }

        if (isGuest && !isGuestAllowedPath) {
            router.replace("/dashboard/image-upload");
            return;
        }
    }, [isAuthenticated, isGuest, router]);

    return (
        <div className="flex-1 min-h-0 flex flex-col">
            {children}
        </div>
    );
}