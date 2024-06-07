import AccountMenu from "@/app/(private)/account/_components/menu";

export default function Page() {

    return (
        <div id="settings" className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Créditos</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Se muestra la cantidad de créditos que tiene y las recargas que se hicieron
                </p>
            </div>
            <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4" data-id="12">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="13"
                         data-v0-t="card">
                        <div className="p-6 flex items-center justify-between" data-id="14">
                            <div data-id="15">
                                <div className="text-sm text-gray-500 dark:text-gray-400" data-id="16">Checking</div>
                                <div className="text-xl font-bold" data-id="17">$2,345.67</div>
                            </div>
                            <svg data-id="18" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="h-8 w-8 text-gray-500 dark:text-gray-400">
                                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="19"
                         data-v0-t="card">
                        <div className="p-6 flex items-center justify-between" data-id="20">
                            <div data-id="21">
                                <div className="text-sm text-gray-500 dark:text-gray-400" data-id="22">Savings</div>
                                <div className="text-xl font-bold" data-id="23">$1,111.11</div>
                            </div>
                            <svg data-id="24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="h-8 w-8 text-gray-500 dark:text-gray-400">
                                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="grid gap-4" data-id="25">
                    <div className="flex items-center justify-between" data-id="26">
                        <h2 className="text-lg font-medium" data-id="27">Recent Transactions</h2>
                        <a data-id="28" className="text-blue-600 hover:underline" href="#" rel="ugc">View All</a>
                    </div>
                    <div className="grid gap-2" data-id="29">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="30"
                             data-v0-t="card">
                            <div className="p-6 grid grid-cols-[auto_1fr_auto] gap-4" data-id="31">
                                <div
                                    className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800"
                                    data-id="32">
                                    <svg data-id="33" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round"
                                         className="h-6 w-6 text-gray-500 dark:text-gray-400">
                                        <line x1="12" x2="12" y1="2" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <div data-id="34">
                                    <div className="font-medium" data-id="35">Groceries</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400" data-id="36">June 15,
                                        2023
                                    </div>
                                </div>
                                <div className="text-right font-medium" data-id="37">-$45.67</div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="38"
                             data-v0-t="card">
                            <div className="p-6 grid grid-cols-[auto_1fr_auto] gap-4" data-id="39">
                                <div
                                    className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800"
                                    data-id="40">
                                    <svg data-id="41" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round"
                                         className="h-6 w-6 text-gray-500 dark:text-gray-400">
                                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                    </svg>
                                </div>
                                <div data-id="42">
                                    <div className="font-medium" data-id="43">Paycheck</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400" data-id="44">June 1,
                                        2023
                                    </div>
                                </div>
                                <div className="text-right font-medium text-green-500" data-id="45">+$2,500.00</div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="46"
                             data-v0-t="card">
                            <div className="p-6 grid grid-cols-[auto_1fr_auto] gap-4" data-id="47">
                                <div
                                    className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800"
                                    data-id="48">
                                    <svg data-id="49" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round"
                                         className="h-6 w-6 text-gray-500 dark:text-gray-400">
                                        <circle cx="8" cy="21" r="1"></circle>
                                        <circle cx="19" cy="21" r="1"></circle>
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                    </svg>
                                </div>
                                <div data-id="50">
                                    <div className="font-medium" data-id="51">Amazon Purchase</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400" data-id="52">May 25,
                                        2023
                                    </div>
                                </div>
                                <div className="text-right font-medium" data-id="53">-$89.99</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}