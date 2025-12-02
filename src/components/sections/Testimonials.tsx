"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content:
            "Maxwell transformed our outdated website into a modern, high-converting platform. The attention to detail and performance optimization was outstanding.",
        avatar: "SJ",
    },
    {
        name: "David Chen",
        role: "Founder, GrowthLabs",
        content:
            "Working with Maxwell was a breeze. He understood our vision immediately and delivered a product that exceeded our expectations.",
        avatar: "DC",
    },
    {
        name: "Emily Davis",
        role: "Marketing Director, CreativeCo",
        content:
            "The new site is blazing fast and looks incredible. Our conversion rates have increased by 40% since the launch.",
        avatar: "ED",
    },
];

export function Testimonials() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Stories</h2>
                <p className="text-muted-foreground max-w-[700px]">
                    Don't just take my word for it. Here's what my clients have to say about working with me.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">"{testimonial.content}"</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
