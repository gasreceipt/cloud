import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-slate-950 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <div className="container flex flex-col items-center gap-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400">
                        Welcome to <span className="text-primary">cold.cool</span>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        A modern, responsive, and cool Next.js application. Built with Tailwind CSS and shadcn/ui.
                    </p>
                </div>
                <div className="space-x-4">
                    <Button asChild size="lg" className="h-12 px-8">
                        <Link href="/about">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link href="https://github.com" target="_blank">
                            GitHub
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
