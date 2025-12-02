import Marquee from "@/components/ui/marquee";

const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "PostgreSQL",
    "Vercel",
    "Supabase",
    "Prisma",
    "GraphQL",
    "Docker",
];

export function TechStack() {
    return (
        <section className="py-12 bg-muted/30 border-y">
            <div className="container mb-8 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-widest">
                    Powered by Modern Tech
                </h3>
            </div>
            <Marquee pauseOnHover className="[--duration:20s]">
                {technologies.map((tech) => (
                    <div
                        key={tech}
                        className="mx-8 text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
                    >
                        {tech}
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
