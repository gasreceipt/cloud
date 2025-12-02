"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Smartphone, Globe, Code, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Next.js Development",
        description:
            "Expert development using the latest Next.js features (App Router, Server Actions) for blazing fast apps.",
        icon: Zap,
    },
    {
        title: "UI/UX Design",
        description:
            "Clean, modern, and accessible interfaces designed to engage users and convert visitors.",
        icon: Layers,
    },
    {
        title: "Responsive Layouts",
        description:
            "Pixel-perfect implementation that looks stunning on every device, from mobile phones to large desktops.",
        icon: Smartphone,
    },
    {
        title: "Performance Optimization",
        description:
            "Deep optimization for Core Web Vitals, ensuring your site ranks high and loads instantly.",
        icon: Shield,
    },
    {
        title: "SEO Strategy",
        description:
            "Technical SEO best practices built-in from the ground up to help you reach your audience.",
        icon: Globe,
    },
    {
        title: "Code Audits",
        description:
            "Reviewing existing codebases for quality, security, and performance improvements.",
        icon: Code,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Features() {
    return (
        <section className="container py-24 sm:py-32">
            <motion.div
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {features.map((feature) => (
                    <motion.div key={feature.title} variants={item}>
                        <Card className="bg-muted/50 border-none shadow-none hover:bg-muted/100 transition-colors h-full">
                            <CardHeader>
                                <feature.icon className="h-10 w-10 text-primary mb-4" />
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
