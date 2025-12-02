"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40 overflow-hidden">
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </motion.div>

            <div className="container flex flex-col items-center gap-4">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400">
                        Maxwell Wickersham
                    </h1>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl text-primary">
                        Premium Web Design & Development
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-4">
                        I build high-performance, scalable digital experiences that drive growth and elevate brands.
                    </p>
                </motion.div>

                <motion.div
                    className="space-x-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button asChild size="lg" className="h-12 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                        <Link href="/contact">Start a Project</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-lg">
                        <Link href="/about">
                            About Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
