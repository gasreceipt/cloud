"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        description: "We start by understanding your business goals, target audience, and unique requirements.",
        icon: Search,
    },
    {
        title: "Design",
        description: "I create high-fidelity mockups and interactive prototypes to visualize the final product.",
        icon: PenTool,
    },
    {
        title: "Development",
        description: "Using Next.js and modern best practices, I build a fast, secure, and scalable application.",
        icon: Code2,
    },
    {
        title: "Launch",
        description: "After rigorous testing, we deploy your site to the world and monitor its performance.",
        icon: Rocket,
    },
];

export function Process() {
    return (
        <section className="py-24 sm:py-32 bg-muted/30">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How I Work</h2>
                    <p className="text-muted-foreground max-w-[700px]">
                        A transparent, collaborative process designed to deliver exceptional results on time and on budget.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="flex flex-col items-center text-center space-y-4 bg-background p-6 rounded-lg border shadow-sm relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold z-10">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
