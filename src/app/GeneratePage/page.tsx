import { NavBar } from "./Components/NavBar";

export default function GeneratePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="sticky top-0 z-50">
                <NavBar />
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow p-6">
                <form className="space-y-6 max-w-lg w-full">
                    {/* Map Details */}
                    <div>
                        <label htmlFor="mapName" className="block text-sm font-medium mb-2">
                            Map Name
                        </label>
                        <input
                            type="text"
                            id="mapName"
                            placeholder="Enter map name"
                            className="input w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="mapSize" className="block text-sm font-medium mb-2">
                            Map Size
                        </label>
                        <select id="mapSize" className="dropdown w-full p-2 border border-gray-300 rounded">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="theme" className="block text-sm font-medium mb-2">
                            Theme
                        </label>
                        <select id="theme" className="dropdown w-full p-2 border border-gray-300 rounded">
                            <option>Forest</option>
                            <option>Dungeon</option>
                            <option>Desert</option>
                        </select>
                    </div>

                    {/* Randomization */}
                    <div>
                        <label htmlFor="randomization" className="block text-sm font-medium mb-2">
                            Randomization Level
                        </label>
                        <input type="range" id="randomization" className="slider w-full" />
                    </div>

                    {/* Export Settings */}
                    <div>
                        <label htmlFor="exportFormat" className="block text-sm font-medium mb-2">
                            File Format
                        </label>
                        <select id="exportFormat" className="dropdown w-full p-2 border border-gray-300 rounded">
                            <option>PNG</option>
                            <option>JPG</option>
                            <option>PDF</option>
                        </select>
                    </div>

                    {/* Generate Button */}
                    <button
                        type="submit"
                        className="btn-primary w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Generate Map
                    </button>
                </form>
            </main>
        </div>
    );
}
