import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";


export function NavBar() {
    return (
        <header className="flex py-6 shadow-xl  top-0 w-full z-10 bg-background/90  bg-zinc-600 text-white fixed">
            <nav className="flex items-center justify-between container mx-auto px-6 font-semibold">
                <Link href="/">
                    <BrandLogo />
                </Link>
                
                <SignedOut>
                        <SignInButton>
                                <Button className="font-semibold text-md hover:bg-[#b88917] hover:text-black">Log in</Button>
                        </SignInButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton>
                        <Button className="font-semibold text-sm hover:bg-[#b88917] hover:text-black">Log Out</Button>
                    </SignOutButton>
                </SignedIn>
            </nav>
       </header>
    )
}