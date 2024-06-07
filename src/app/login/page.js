import Image from "next/image";
import { RiGroup2Line, RiSearchEyeLine, RiBookReadLine, RiArrowUpLine } from "@remixicon/react";
import LoginButton from "@/app/login/compoments/login_button";
export default function Page() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 ">


            <div className="">
                <Image
                    src="/image/logo_medium.png"
                    alt="Next.js Logo"
                    width={400}
                    height={195}
                    priority
                />
            </div>



           <LoginButton />


            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <div
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold text-neutral-500`}>
                        Juega{" "}
                        <RiSearchEyeLine size={18} className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-neutral-500`}>
                       Busca albumes y figuritas, comenza a jugar ahora
                    </p>
                </div>

                <div
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold text-neutral-500`}>
                        Colecciona{" "}
                        <RiBookReadLine size={18} className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-neutral-500`}>
                        Colecciona y llena los albumes, encuentra sorpresas
                    </p>
                </div>

                <div
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold text-neutral-500`}>
                        Comparte{" "}
                        <RiGroup2Line size={18} className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-neutral-500`}>
                       Intercambiar figuritas repetidas con tus amigos
                    </p>
                </div>

                <div
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-300/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold text-neutral-500`}>
                        Evoluciona{" "}
                        <RiArrowUpLine size={18} className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance text-neutral-500`}>
                        Evoluciona tu avatar, será todo mas fácil y divertido
                    </p>
                </div>
            </div>
        </div>
    );
}
