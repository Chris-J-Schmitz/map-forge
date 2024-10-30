import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex items-center justify-between container mx-auto px-6 font-semibold">
                {/* Logo Section */}
                <div className="ml-10">
                    <Link href="#" aria-label="Map Forge Home" className="text-2xl font-bold">
                        Map Forge
                    </Link>
                </div>
                
                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <Link href="#features" className="text-xl" aria-label="Features">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-xl" aria-label="Pricing">
                        Pricing
                    </Link>
                    
                    {/* Account Links */}
                    <div className="ml-4">
                        <SignedIn>
                            <Link href="/MyMaps" className="text-lg" aria-label="My Maps">
                                My Maps
                            </Link>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <button className="text-lg" aria-label="Login">Login</button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </nav>
        </header>
    );
}
