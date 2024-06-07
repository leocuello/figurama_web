'use client'
import Link from 'next/link';
import {signOut} from "firebase/auth";
import {auth} from "@/lib/firebase";
import {usePathname, useRouter} from 'next/navigation';
import { RiSettings4Line, RiUser3Line, RiBankCardLine, RiLogoutCircleRLine } from "@remixicon/react";

const AccountMenu = ({option}) => {

    const pathname = usePathname()
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
            // Elimina la sesión del servidor si estás usando cookies o sesiones
            //await axios.post('/api/logout');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    console.log(pathname)

    return (
        <nav className="space-y-2">
            <Link
                href="/account"
                className={`flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium transition-colors ${ pathname === '/account' ? 'btn-active-color' : 'btn-inactive-color'} `}
                prefetch={false}
            >
                <RiUser3Line size={24} />
                Cuenta
            </Link>
            <Link
                href="/account/credit"
                className={`flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium transition-colors ${ pathname === '/account/credit' ? 'btn-active-color' : 'btn-inactive-color'} `}
                prefetch={false}
            >
                <RiBankCardLine size={24} />
                Créditos
            </Link>
            <Link
                href="/account/setting"
                className={`flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium transition-colors ${ pathname === '/account/setting' ? 'btn-active-color' : 'btn-inactive-color'} `}
                prefetch={false}
            >
                <RiSettings4Line size={24} />
                Configuración
            </Link>
            <Link
                onClick={handleLogout}
                href="#"
                className={`flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium transition-colors `}
                prefetch={false}
            >
                <RiLogoutCircleRLine size={24} />
                Salir
            </Link>
        </nav>
    );
};

export default AccountMenu;