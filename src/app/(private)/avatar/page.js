import Image from 'next/image'

import Item from "@/app/(private)/avatar/_component/item";
import Accessory1 from "@/app/(private)/avatar/_component/accessory1";
import Accessory2 from "@/app/(private)/avatar/_component/accessory2";
import Accessory3 from "@/app/(private)/avatar/_component/accessory3";
import Accessory4 from "@/app/(private)/avatar/_component/accessory4";
import Accessory5 from "@/app/(private)/avatar/_component/accessory5";
import Accessory6 from "@/app/(private)/avatar/_component/accessory6";
import playerWoman from '../../../../public/image/player/player_woman.png'
import playerMen from '../../../../public/image/player/player_men.png'
import Materials from "@/app/(private)/avatar/_component/materials";

export default function Page() {



    return (
        <>

            <div className="grid grid-cols-12 gap-4 " >


                <div className="col-span-12 md:col-span-12 xl:col-span-8 rounded m-1 border-2" >


                    <div className="flex">
                        <div className="w-1/4 clearfix">
                            <Accessory1 />
                            <Accessory2 />
                            <Accessory3 />
                        </div>
                        <div className="mx-auto content-center">
                            <Image
                                src={playerWoman}
                                alt="Avatar"
                                 width={130}
                                // height={500} automatically provided
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>
                        <div className="w-1/4 clearfix">
                            <Accessory4/>
                            <Accessory5 />
                            <Accessory6 />
                        </div>
                    </div>


                    <div className="">

                        <div className="flex">
                            <div className="w-1/4 clearfix">

                            </div>
                            <div className="w-1/2">
                                <Materials />
                            </div>
                            <div className="w-1/4 clearfix">

                            </div>
                        </div>



                    </div>

                </div>


                <div className="col-span-12 md:col-span-6 xl:col-span-4 xs:col-span-4 ">

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                        <div className="h-28 p-1"><Item /></div>
                    </div>





                </div>
            </div>
        </>
    )
}