import wood from '../../../../../public/image/material/material_wood.svg'
import stone from '../../../../../public/image/material/material_stone.svg'
import copper from '../../../../../public/image/material/material_copper.svg'
import iron from '../../../../../public/image/material/material_iron.svg'

import gold from '../../../../../public/image/material/material_gold.svg'
import lithium from '../../../../../public/image/material/material_lithium.svg'
import sulfur from '../../../../../public/image/material/material_sulfur.svg'
import mercury from '../../../../../public/image/material/material_mercury.svg'

import cristal from '../../../../../public/image/material/material_cristal.svg'
import emerald from '../../../../../public/image/material/material_emerald.svg'
import gem from '../../../../../public/image/material/material_gem.svg'
import magic from '../../../../../public/image/material/material_magic.svg'

import Image from "next/image";

export default function Materials() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={wood} alt="wood" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={stone} alt="stone" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={iron} alt="iron" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={copper} alt="copper" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={gold} alt="gold" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={mercury} alt="mercury" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={sulfur} alt="sulfur" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={lithium} alt="lithium" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={gem} alt="gem" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={cristal} alt="cristal" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={emerald} alt="emerald" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
                <div className="h-10 p-1 bg-gray-500 rounded m-2">
                    <Image src={magic} alt="magic" width={30} className="float-left"/>
                    <spa className="float-right">0</spa>
                </div>
            </div>
        </>

    )
}