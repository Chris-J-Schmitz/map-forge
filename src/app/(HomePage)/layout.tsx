import { ReactNode } from "react";
import { Navbar } from "./_Components/Navbar";
import { Footer } from "./_Components/Footer";

export default function landingPage({children}: {
    children: ReactNode}) {
        return <div>
            <Navbar /> 
            <main>{children}</main>
            <Footer />
            </div>
    }
