import Image from "next/image";
import accessory from '../../../../../public/image/accessory/flashlight_00.png'

export default function Accessory2() {
    return (

        <div className="rounded p-3 w-1/2 border-2 border-red-400 float-right mr-5 m-3 ">
            <Image src={accessory} alt="wood" width={70} className="mx-auto content-center"/>
        </div>

    )
}