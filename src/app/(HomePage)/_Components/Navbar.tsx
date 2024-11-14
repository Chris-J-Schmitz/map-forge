import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";



export function Navbar() {
    return (
        <header className="flex py-6 shadow-xl top-0 w-full z-10 bg-background/90 fixed">
            <nav className="flex items-center justify-between container mx-auto px-6 font-semibold">
                {/* Logo Section */}
                <Link href="/">
                    <BrandLogo />
                </Link>
                
                
                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <Link href="#features" className="text-xl" aria-label="Features">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-xl" aria-label="Pricing">
                        Pricing
                    </Link>
                    
                    {/* Account Links */}
                    <div className="">
                        <ClerkProvider>
                            <SignedIn >
                                <div className="flex gap-6 text-xl text-center justify-center items-center">
                                    <Link href="#" className="" aria-label="My Maps">
                                        My Maps
                                    </Link>
                                    <SignOutButton>
                                            <Button className="font-semibold text-sm hover:bg-[#b88917] hover:text-black">Log Out</Button>
                                    </SignOutButton>
                                </div>
                                
                            </SignedIn>
                            <SignedOut>
                                <SignInButton>
                                        <Button className="font-semibold text-md hover:bg-[#b88917] hover:text-black">Log in</Button>
                                </SignInButton>
                            </SignedOut>
                        </ClerkProvider>
                    </div>
                </div>
            </nav>
        </header>
    );
}