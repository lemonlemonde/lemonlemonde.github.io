import Image from "next/image"
import { Github, GithubIcon, GraduationCap, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <div>
            {/* links to make me look cooler */}
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/lemonlemonde"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github className="mb-2"/>
                GitHub
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://scholar.google.com/citations?user=AalqHJ4AAAAJ&hl=en&authuser=1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GraduationCap className="mb-0.5"/>
                Google Scholar
            </a>

            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/miru-jun/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin className="mb-1"/>
                LinkedIn
            </a>
            </footer>
        </div>
    )
}
