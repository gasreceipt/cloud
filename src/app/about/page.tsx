"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

const values = [
    {
        title: "Transparency",
        description: "No hidden fees, no jargon. I believe in clear communication and setting realistic expectations from day one.",
    },
    {
        title: "Quality",
        description: "I don't ship broken code. Every project goes through rigorous testing to ensure it's bug-free and performant.",
    },
    {
        title: "Speed",
        description: "Time is money. I leverage modern tools and workflows to deliver high-quality results faster than traditional agencies.",
    },
];

const techStack = [
    "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
    "Framer Motion", "Supabase", "PostgreSQL", "Prisma",
    "Vercel", "Docker", "AWS", "Stripe"
];

const faqs = [
    {
        question: "Do you work with startups?",
        answer: "Yes! I love working with startups. I understand the need for speed and flexibility, and I can help you build an MVP that scales.",
    },
    {
        question: "What is your typical timeline?",
        answer: "It depends on the scope of the project. A simple landing page can take 1-2 weeks, while a complex web app can take 4-8 weeks or more.",
    },
    {
        question: "Do you offer maintenance?",
        answer: "Absolutely. I offer ongoing maintenance packages to keep your site secure, up-to-date, and running smoothly.",
    },
    {
        question: "What are your rates?",
        answer: "I offer both fixed-price project quotes and hourly billing, depending on the nature of the work. Contact me for a custom quote.",
    },
];

export default function AboutPage() {
    return (
        <motion.div
            className="container py-10 space-y-24"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Hero Section */}
            <motion.section variants={item} className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
                <p className="text-xl text-muted-foreground">
                    I'm <span className="font-semibold text-primary">Maxwell Wickersham</span>, a Boston-based developer helping businesses win on the web.
                </p>
            </motion.section>

            {/* Story Section */}
            <motion.section variants={item} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">My Approach</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Founded in 2025, <strong>cold.cool</strong> is more than just a portfolio—it's a commitment to excellence. I combine technical precision with creative design to build products that stand out.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        With a strong foundation in core web technologies and expertise in the modern <strong>Next.js</strong> ecosystem, I deliver solutions that are not only beautiful but also robust, accessible, and built to scale.
                    </p>
                </div>
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-muted-foreground">Maxwell Wickersham</span>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section variants={item} className="space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold">Core Values</h2>
                    <p className="text-muted-foreground">The principles that guide every line of code I write.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value) => (
                        <Card key={value.title} className="bg-muted/50 border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    {value.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section variants={item} className="space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold">Technical Expertise</h2>
                    <p className="text-muted-foreground">My toolkit for building world-class applications.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {techStack.map((tech) => (
                        <div key={tech} className="flex items-center justify-center p-4 bg-background border rounded-lg font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default">
                            {tech}
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section variants={item} className="max-w-3xl mx-auto w-full space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Common Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know before we start.</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.section>

            {/* CTA Section */}
            <motion.section variants={item} className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to build something cool?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Join us on our journey to make the web a cooler place. Whether you're a developer, designer, or just a fan, we'd love to hear from you.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </motion.section>
        </motion.div>
    );
}
