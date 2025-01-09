import Image from "next/image";
import TechCard from "./TechCard";

export default function Tech() {
    return (
        <>
            <div className="bg-slate-800 w-screen min-h-[300px] p-8">
                <h1 className="text-3xl text-white font-bold mb-4">Techs</h1>
                <div className="w-32 border-2 mb-8" />
                <div className="flex justify-center items-center w-full flex-wrap">
                    <div className="m-4"> {/* Menambahkan margin di sekitar setiap TechCard */}
                        <TechCard imageURL="/img/css.png" techStack="CSS" />
                    </div>
                    <div className="m-4">
                        <TechCard imageURL="/img/js.png" techStack="JavaScript" />
                    </div>
                    <div className="m-4">
                        <TechCard imageURL="/img/python.svg" techStack="Python" />
                    </div>
                    <div className="m-4">
                        <TechCard imageURL="/img/HTML.png" techStack="HTML" />
                    </div>
                </div>
            </div>
        </>
    );
}