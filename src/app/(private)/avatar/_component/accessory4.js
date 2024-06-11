import Image from "next/image";
import accessory from "../../../../../public/image/accessory/book_00.png";

export default function Accessory4() {
    return (

        <div className="rounded p-3 w-1/2 border-2 border-red-400 float-left mr-5 m-3 ">
            <Image src={accessory} alt="wood" width={70} className="mx-auto content-center"/>
        </div>

    )
}