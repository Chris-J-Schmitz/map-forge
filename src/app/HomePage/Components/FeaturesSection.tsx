import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-12">Features</h2>
                <h3>NEEDS TO BE FIXED</h3>
                <div className="grid gap-10 md:grid-cols-3">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Fast & Easy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Generate high-quality maps in seconds with a user-friendly interface.</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Fully Customizable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Choose from various map styles, terrains, and assets to make each map unique.</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">High-Resolution Exports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Download maps in stunning quality, perfect for tabletop or online use.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

