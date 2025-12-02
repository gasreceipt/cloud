import Link from "next/link";
import { Github, Linkedin, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-8 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} Maxwell Wickersham. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/gasreceipt" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/mxwick" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://maxwell.ltd" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Portfolio</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
