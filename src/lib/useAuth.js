'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './firebase';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    return { user };
};

export { useAuth };