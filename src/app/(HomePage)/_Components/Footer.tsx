import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";



export function Footer() {
    return (
        <section className="flex justify-between items-center bg-slate-800 text-slate-300">
            <Link href="/">
                    <BrandLogo />
                </Link>
            <div className="m-auto py-8">Footer Section (content later) </div>
        </section>
    )
}