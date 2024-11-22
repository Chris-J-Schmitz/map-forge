'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/GeneratePage");
    };

    return (
        <div
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-purple-800 via-black to-green-900 text-white"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg
                    viewBox="0 0 1200 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-full opacity-20"
                >
                    <circle cx="400" cy="200" r="500" fill="#4a8fe7" />
                </svg>
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"
                ></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10">
                <h1 className="text-5xl sm:text-7xl font-bold mb-4 leading-tight">
                    Forge Your Own Maps
                </h1>
                <p className="text-lg sm:text-2xl mb-8">
                    Design immersive maps for your tabletop adventures with ease.
                </p>

                {/* Action Button */}
                <Button
                    onClick={handleClick}
                    className="px-8 py-4 text-lg sm:text-xl bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg transition"
                >
                    Get Started for Free
                </Button>

                {/* Features */}
                <div className="mt-12 space-y-3 sm:space-y-4 text-base sm:text-lg">
                    <p>🌟 <span className="font-semibold">Fast & Easy:</span> Generate maps in seconds</p>
                    <p>🎨 <span className="font-semibold">Fully Customizable:</span> Add unique details</p>
                    <p>🖨️ <span className="font-semibold">High-Resolution:</span> Perfect for tabletop or virtual use</p>
                    <p>💎 <span className="font-semibold">Premium Assets:</span> Unlock exclusive designs</p>
                </div>
            </div>
        </div>
    );
}
