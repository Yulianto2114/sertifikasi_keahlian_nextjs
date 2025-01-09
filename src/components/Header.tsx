export default function Header() {
    return (
        <>
            <div className="flex w-screen p-8 bg-slate-500 justify-between items-center">
                <div>
                    <p className="font-bold text-2xl text-white">Yulianto</p>
                </div>
                <div>
                    <ul className="flex space-x-4"> {/* Menambahkan space-x-4 untuk jarak antar item */}
                        <li className="text-white text-lg">Home</li>
                        <li className="text-white text-lg">Techs</li>
                        <li className="text-white text-lg">Biography</li>
                        <li className="text-white text-lg">Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    );
}