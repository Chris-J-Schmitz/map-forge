import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";


export function NavBar() {
    return (
        <header className="flex py-6 shadow-xl top-0 w-full z-10 bg-background/90 fixed">
            <nav className="flex items-center justify-between container mx-auto px-6 font-semibold">
                <BrandLogo />
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