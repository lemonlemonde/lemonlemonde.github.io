

export default function ProjectCard({ title, links, children }) {


    const FormattedLinks = ({ links }) => {
        return (
            <div className="flex space-x-6">
                {links.map(([text, url], index) => (
                    <a key={index} className="flex text-slate-500 items-center gap-2 hover:underline hover:underline-offset-4" href={url}>
                        {text}
                    </a>
                ))}
            </div>
        );
    };

    return (
        <div className="relative">
            <div className="animate-pulse blue-gradient-bg w-full h-full absolute top-0 left-0 -z-10" />

            <div className="ml-6 border-l-2 p-5 z-10">
                {/* title duh */}
                <p className="font-semibold text-xl">{title}</p>

                {/*  */}
                <div className="space-y-5">
                    <FormattedLinks links={links} />
                    { children }

                </div>
            </div>
        </div>
    );
}