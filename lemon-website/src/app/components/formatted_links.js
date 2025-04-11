import InnerLink from "./inner_link";

export default function FormattedLinks({links}) {
    return (
        <div className="flex space-x-6">
            {links.map(([text, url], index) => (
                <InnerLink key={index} text={text} link={url}/> 
            ))}
        </div>
    );
    
}