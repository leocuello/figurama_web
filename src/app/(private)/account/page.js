'use client'
import { useAuth } from "@/lib/useAuth";

export default function Page() {
    const { user } = useAuth();

    console.log(user);

    return (
        <div id="profile" className="space-y-6">
            <div className="items-center justify-center">
                {/*
                    <Avatar
                        src={user.photoURL}
                        alt="Avatar"
                        name={user.displayName}
                        email={user.email}
                        className=""
                    />
                    */}
            </div>
        </div>
    )
}

