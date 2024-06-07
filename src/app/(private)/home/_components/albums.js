import Link from "next/link"
import {cookies} from "next/headers";


export default async function Albums() {

    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let url = `${process.env.API_URL}collection`
    const response = await fetch(url, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.value,}
    });
    const albums = await response.json();


    const AlbumsList = () => {
        return (
            <div className=" mx-auto py-5 lg:py-5 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {albums.map((collection) => (
                    <div key={collection.ID} className="album-list">
                        <div className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-[${collection.album.border_color}] transition-shadow relative border-[10px] border-[${collection.album.border_color}]`}>
                            <div
                                className={`absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-[${collection.album.border_text_color}] dark:bg-[${collection.album.border_color}] px-1 py-4 text-md font-medium`}>
                                {collection.album.title}
                            </div>
                            <Link href="#" className="block" prefetch={false}>
                                <img
                                    src={collection.album.image_url}
                                    width={100}
                                    height={100}
                                    alt="Figurine Album Cover"
                                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform"
                                />
                                <div className={`p-3 bg-[${collection.album.border_color}]`}>
                                    <h3 className={`text-lg font-semibold truncate text-[${collection.album.border_text_color}]`}>{collection.album.cards.length} / {collection.album.total}</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    };

    return (
        <AlbumsList />
    )
}
