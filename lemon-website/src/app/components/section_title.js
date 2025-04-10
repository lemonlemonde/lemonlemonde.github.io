export default function SectionTitle({title}) {

    return (
        <div className="flex w-full relative justify-center mb-[50px]">
            <div className="h-px bg-white md:w-48 w-20 my-4"></div>
            <h2 className="flex text-2xl mx-5">
                [ {title} ]
            </h2>
            <div className="h-px bg-white md:w-48 w-20 my-4"></div>
        </div>
    )
}