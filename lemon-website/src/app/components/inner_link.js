"use client";

// Link inside divs that already have click events
// opens in new page
export default function InnerLink({link, text}) {
    return (
        <a 
            className="text-red-300 items-center italic gap-2 hover:underline hover:underline-offset-4 pointer-events-auto" 
            href={link} 
            onClick={(e) => e.stopPropagation()}
            target="_blank"
        >
            {text}
        </a>
    );
}