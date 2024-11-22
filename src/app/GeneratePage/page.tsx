import { Button } from "@/components/ui/button";
import { NavBar } from "./Components/NavBar";

export default function GeneratePage() {
    return (
        <div className="flex flex-col min-h-screen ">
            {/* Navbar */}
            <nav className="sticky top-0 z-50">
                <NavBar />
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow p-6">
                <form className="space-y-6 max-w-lg w-full ">
                    {/* Map Details */}
                    
                    <div>
                        <label htmlFor="mapSize" className="block text-sm font-medium mb-2">
                            Map Size
                        </label>
                        <select id="mapSize" className="dropdown w-full p-2 border border-gray-300 rounded">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <span className="text-xs pl-2">small: 50x50, medium: 75x75, large: 100x100</span>
                    </div>

                    <div>
                        <label htmlFor="theme" className="block text-sm font-medium mb-2">
                            Theme
                        </label>
                        <select id="theme" className="dropdown w-full p-2 border border-gray-300 rounded">
                            <option>Forest</option>
                            <option>Cave</option>
                            <option>Town</option>
                        </select>
                        <span className="text-xs pl-2">Only cave works for now</span>
                    </div>

                    {/* Randomization */}
                    <div>
                        <label htmlFor="randomization" className="block text-sm font-medium mb-2">
                            Randomization Level
                        </label>
                        <input type="range" id="randomization" className="slider w-full" />
                        <span className="text-xs pl-2">Does nothing for right now</span>
                    </div>

                    {/* Generate Button */}
                    <Button className="w-full">
                        Generate Map
                    </Button>
                </form>
            </main>
        </div>
    );
}
