'use client'
import Link from "next/link"
import {useState} from "react";
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import {RiBankCardLine, RiLogoutCircleRLine, RiSettings4Line, RiUser3Line, RiBookOpenLine} from "@remixicon/react";

const Header = () => {

    const router = useRouter();

    const [showMe, setShowMe] = useState(false);
    function openMenu(){
        setShowMe(!showMe);
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            router.push('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <header className="flex items-center justify-between h-16 border-b">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>

                <RiBookOpenLine size={24} />

                <span className="sr-only">Figurama</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
                <Link
                    href="/"
                    className="px-3 py-2 rounded-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                >
                    Mochila
                </Link>
                <Link
                    href="/replay"
                    className="px-3 py-2 rounded-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                >
                    Repetidas
                </Link>
                <Link
                    href="/avatar"
                    className="px-3 py-2 rounded-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                >
                    Avatar
                </Link>
            </nav>

            <div className="relative inline-block text-left">
                <div>

                    <a className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 " href="#" onClick={openMenu}>
                        <RiUser3Line size={18} />
                    </a>

                </div>

                <div style={{display: showMe?"block":"none"}} className="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">

                        <Link
                            href="/account"
                            onClick={openMenu}
                            className="flex w-full items-center gap-2 text-gray-700 px-4 py-2 text-sm focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            role="menuitem" tabIndex="-1" id="menu-item-0"
                            prefetch={false}
                        >
                            <RiUser3Line size={18} /> Cuenta
                        </Link>
                        <Link
                            href="/account/credit"
                            onClick={openMenu}
                            className="flex w-full items-center gap-2 text-gray-700 px-4 py-2 text-sm focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            role="menuitem" tabIndex="-1" id="menu-item-0"
                            prefetch={false}
                        >
                            <RiBankCardLine size={18} /> Créditos
                        </Link>
                        <Link
                            href="/account/setting"
                            onClick={openMenu}
                            className="flex w-full items-center gap-2 text-gray-700 px-4 py-2 text-sm focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            role="menuitem" tabIndex="-1" id="menu-item-0"
                            prefetch={false}
                        >
                            <RiSettings4Line size={18} /> Configuración
                        </Link>
                        <Link
                            href="#"
                            onClick={handleLogout}
                            className="flex w-full items-center gap-2 text-gray-700 px-4 py-2 text-sm focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            role="menuitem" tabIndex="-1" id="menu-item-0"
                            prefetch={false}
                        >
                            <RiLogoutCircleRLine size={18} /> Salir
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;