"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description:
            "A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and sales reporting.",
        tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
        image: "/placeholder-project-1.jpg",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "SaaS Landing Page",
        description:
            "High-converting landing page for a B2B SaaS product. Optimized for performance and SEO, achieving a perfect 100 Lighthouse score.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        image: "/placeholder-project-2.jpg",
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "AI Content Generator",
        description:
            "An AI-powered application that helps writers generate blog posts and social media content. Integrated with OpenAI API.",
        tags: ["Next.js", "OpenAI API", "Stripe", "Vercel AI SDK"],
        image: "/placeholder-project-3.jpg",
        demoLink: "#",
        repoLink: "#",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Projects() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
                <p className="text-muted-foreground max-w-[700px]">
                    A collection of projects that demonstrate my expertise in building high-quality web applications.
                </p>
            </div>

            <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project) => (
                    <motion.div key={project.title} variants={item}>
                        <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                            <div className="aspect-video relative bg-muted">
                                {/* Placeholder for project image - would use next/image in real app */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                    {project.title} Preview
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="mt-2">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button asChild variant="outline" size="sm" className="w-full">
                                    <Link href={project.demoLink} target="_blank">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="w-full">
                                    <Link href={project.repoLink} target="_blank">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
