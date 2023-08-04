import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-green-400 text-white h-20 flex items-center">
            <nav className="flex justify-between container mx-auto">
                <div><h1>Basic Next</h1></div>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/services">Services</Link>
                    </li>
                    <li>
                    <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;