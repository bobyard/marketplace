import './App.css'
import {useWallet} from "@suiet/wallet-kit";
import {useEffect, useState} from "react";
import {devnetConnection, JsonRpcProvider} from "@mysten/sui.js";
import {GetObjectDataResponse} from "@mysten/sui.js/src/types";

function Collection() {
    const wallet = useWallet();
    let [items, setItems] = useState<GetObjectDataResponse[]>();
    useEffect(() => {
        const provider = new JsonRpcProvider(devnetConnection);
        if (wallet.address !== undefined) {
            provider.getObjectsOwnedByAddress(wallet.address)
                .then((items) => {
                    Promise.all(items.filter(obj => obj.type === "0x2::devnet_nft::DevNetNFT")
                        .map(item => provider.getObject(item.objectId)))
                        .then(items => setItems(items));
                })
        }
    }, [wallet.connected])
    console.log(items);

    function parseIPFS(item: GetObjectDataResponse) {
        let url: string = item.details.data.fields.url;
        return url.replace("ipfs://", "https://bobyard.infura-ipfs.io/ipfs/");
    }
    // @ts-ignore
    const  cards = items?.map((item,index) =>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-2" key={index}>
            <div className="card w-96 bg-base-100 shadow-xl  mb-4 px-2">
                <figure className="px-10 pt-10">
                    <img src={parseIPFS(item)} alt="Shoes"
                         className="object-cover h-48 w-96"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.details?.data.fields.name}</h2>
                    <p>{item.details?.data.fields.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative flex-1 bg-indigo-50 p-2 ">
            <div className="flex flex-wrap -mb-4 -mx-2 min-h-screen">
                {cards}
            </div>
            <div className="flex items-center justify-center">
                <div className="btn-group grid grid-cols-2 w-1/3">
                    <button className="btn btn-outline">Previous page</button>
                    <button className="btn btn-outline">Next</button>
                </div>
            </div>
        </main>
    );

}

export default Collection;
