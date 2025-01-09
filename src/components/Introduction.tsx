import Image from "next/image";

export default function Introduction() {
    return (
        <div className="flex w-screen h-[500px] bg-slate-800 p-8">
            <div className="flex flex-col justify-center w-1/2"> {/* Konten teks di sebelah kiri */}
                <p className="text-white text-2xl font-bold">
                    Sistem Informasi
                </p>
                <h2 className="text-7xl text-white">Hello, I &apos;m</h2>
                <h2 className="text-7xl text-white">Yulianto</h2>
                <div className="my-5">
                    <p className="text-white max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio commodi numquam soluta facilis repellat odit, eum reprehenderit? Id, ipsa? Eligendi vero minus quas esse voluptatibus omnis libero facilis unde!
                    </p>
                </div>
            </div>
            <div className="relative w-1/2 h-full"> {/* Gambar di sebelah kanan */}
                <Image 
                    src={"/img/foto pp.jpg"} 
                    alt="Yulianto"
                    fill={true}
                    priority={true}
                    className="rounded-3xl object-cover"
                />
            </div>
        </div>
    );
}