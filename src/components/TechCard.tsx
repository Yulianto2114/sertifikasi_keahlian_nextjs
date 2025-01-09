import Image from "next/image";

type TechCardProps = {
    imageURL: string;
    techStack: string;
};

export default function TechCard({ imageURL, techStack }: TechCardProps) {
    return (
        <>
            <div className="w-48 h-48 flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl bg-[#72bf78] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col">
                <div className="relative object-cover w-20 h-20">
                    <Image src={imageURL} alt="Tech Stack" fill={true} />
                </div>
                <p className="text-white text-center text-base leading-4 mt-4">
                    {techStack}
                </p>
            </div>
        </>
    );
}