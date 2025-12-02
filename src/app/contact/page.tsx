"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight, Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <div className="container py-10 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column: Context & Expectations */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's Start a Project</h1>
                        <p className="text-xl text-muted-foreground">
                            Ready to take your digital presence to the next level? Fill out the form, and I'll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">What to expect</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">1. Initial Consultation</h4>
                                    <p className="text-sm text-muted-foreground">We'll discuss your goals, requirements, and timeline to ensure we're a good fit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">2. Proposal & Strategy</h4>
                                    <p className="text-sm text-muted-foreground">I'll provide a detailed proposal outlining the scope, deliverables, and investment.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <ArrowRight className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">3. Kickoff</h4>
                                    <p className="text-sm text-muted-foreground">Once approved, we hit the ground running. You'll have full visibility into the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Connect with me</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com/gasreceipt" target="_blank" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://linkedin.com/in/mxwick" target="_blank" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://maxwell.ltd" target="_blank" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                <Globe className="h-5 w-5" />
                                <span className="sr-only">Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    className="bg-muted/30 p-6 rounded-2xl border"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell me about your project..."
                                                className="min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </motion.div>
            </div>
        </div>
    );
}
