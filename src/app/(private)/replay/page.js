'use client'
import React, { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import Card1 from "@/app/(private)/replay/_components/card1";

export default function Page() {

    useEffect(() => {
        let grid = GridStack.init();
    });

    return (
        <>
            <div className="App">
                <div className="grid-stack">
                    <div className="grid-stack-item border-dark" gs-x="0" gs-y="5" gs-w="3" gs-h="3" >
                        <div className="grid-stack-item-content dark:bg-[#FF0000]"><Card1 /></div>
                    </div>
                </div>

            </div>
        </>

    )
}