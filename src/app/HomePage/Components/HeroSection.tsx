import { Button } from "@/components/ui/button";



export function HeroSection() {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-balance bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            // style={{
            //     background: "radial-gradient(circle, #b88917, #f1c75e, hsl(var(--background)) 60%)",
            // }}
        >
            <h1 className="text-7xl font-bold mb-4">Forge Your Own Maps</h1>
            <p className="text-2xl mb-8">Quickly generate and customize maps for your tabletop adventures.</p>
            <Button className="px-12 py-6 text-xl bg-[#b88917] text-white font-semibold rounded hover:bg-[#a07815] hover:text-black transition">
                Get Started for Free
            </Button>
            <div className="mt-12 space-y-4 text-lg ">
                <p>🌟 Fast & Easy: Generate maps in seconds</p>
                <p>🎨 Fully Customizable: Add unique details for every adventure</p>
                <p>🖨️ High-Resolution Exports: Perfect for tabletop or virtual use</p>
                <p>💎 Premium Map Assets: Access exclusive assets with Pro</p>
            </div>
        </div>
    );
}


