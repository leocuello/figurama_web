import Albums from "@/app/(private)/home/_components/albums";
import {Suspense} from "react";
import Loading from "@/app/(private)/home/loading";
import PrivateLayout from "@/app/(private)/layout";

export default function Page() {
    return (
        <PrivateLayout>
            <Suspense key={Math.random()} fallback={<Loading />} >
                <Albums />
            </Suspense>
        </PrivateLayout>
    )
}

