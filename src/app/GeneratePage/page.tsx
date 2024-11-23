'use client'
import { Button } from "@/components/ui/button";
import { NavBar } from "./Components/NavBar";
import { useState } from "react";

export default function GeneratePage() {

    const [mapSize, setMapSize] = useState('')
    const [mapStyle, setMapStyle] = useState('')


    const handleSubmit = (event:any) =>{
        event.preventDefault() // prevent default submitssion
        console.log('Submitted:', {mapSize, mapStyle})
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            {/* Navbar */}
            <nav className="sticky top-0 z-50">
                <NavBar />
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow p-6">
                <div className="bg-gradient-to-br from-gray-500 to-gray-700 bg-opacity-90 shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Generate Your Map
                    </h2>
                    <form 
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Map Size */}
                        <div>
                            <label htmlFor="mapSize"  className="block text-md font-semibold mb-2">
                                Map Size
                            </label>
                            <select
                                id="mapSize"
                                value={mapSize}
                                onChange={(e) => setMapSize(e.target.value)}
                                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                            >
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                            <span className="text-xs text-gray-400">
                                Small: 50x50, Medium: 75x75, Large: 100x100
                            </span>
                        </div>

                        {/* Theme */}
                        <div>
                            <label htmlFor="theme" className="block text-md font-semibold mb-2">
                                Theme
                            </label>
                            <select
                                id="theme"
                                value={mapStyle}
                                onChange={(e) => setMapStyle(e.target.value)}
                                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                            >
                                <option>Forest</option>
                                <option>Cave</option>
                                <option>Town</option>
                            </select>
                            <span className="text-xs text-gray-400">
                                Only Cave works for now
                            </span>
                        </div>

                        {/* Randomization Level */}
                        <div>
                            <label htmlFor="randomization" className="block text-md font-semibold mb-2">
                                Randomization Level
                            </label>
                            <input
                                type="range"
                                id="randomization"
                                className="w-full slider bg-gray-700 appearance-none h-2 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                            />
                            <span className="text-xs text-gray-400">
                                Does nothing for right now
                            </span>
                        </div>

                        {/* Generate Button */}
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg shadow-md transition">
                            Generate Map
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
