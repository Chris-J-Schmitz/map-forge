import { Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import plans from "@/app/data/plans.json";
import { CheckIcon } from "lucide-react";

export function PricingSection() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center md:w-3/4 lg:w-2/3">
                <h2 className="text-5xl font-bold mb-12">Pricing</h2>
                <div className="grid gap-10 md:grid-cols-2">
                    {plans.map((plan) => (
                        <Card key={plan.id} className="shadow-lg">
                            <CardHeader>
                            <CardTitle 
                                className={`text-3xl font-semibold mb-2 ${
                                    plan.id === "premium" ? "text-[#b88917]" : ""
                                }`}
                                 >
                                {plan.name}
                            </CardTitle>
                                <p className="text-lg font-bold text-black">
                                    ${plan.price} / {plan.frequency}
                                </p>
                            </CardHeader>
                            <CardContent className="min-h-48">
                                <ul className="mb-6 text-left space-y-2">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-2 ">
                                            <CheckIcon className="size-5 stroke-accent bg-[#a07815]/60 rounded-full p-0.5 " />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="flex justify-center mt-auto">
                                <Button className=" bg-[#b88917] hover:bg-[#a07815] transition text-lg p-6 font-semibold">
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
