import { useWallet } from '@suiet/wallet-kit';
import { useState } from 'react';
import './App.css'

interface Collection {
    Id: string,
    transaction_module: string,
    owner_address: string,
    object_type: string,
    object_id: string,
    is_sell: boolean,
    amount: number,
}


function App() {
    const {
        connected,
        select,
        disconnect,
        getAccounts,
        configuredWallets,
        detectedWallets,
        signAndExecuteTransaction
    } = useWallet();

    const [collection, setCollection] = useState<Array<Collection>>([]);

    const pkg = "0x8a3b279f68a9a3687e6eaf505c06d95d41fdf84a";
    const mk = "0x302b15ce4601a4ff2316da43778b679a69107026";

    const buy = async function (object_id: string) {
        console.log(object_id);

        const data = {
            packageObjectId: pkg,
            module: 'bobmarket',
            function: 'split_and_transfer',
            typeArguments: ["0x8a3b279f68a9a3687e6eaf505c06d95d41fdf84a::testnet::TestNFt", '0x2::sui::SUI'],
            arguments: [''],
            //gasPayment: gasId,
            gasBudget: 10000
        };

        await signAndExecuteTransaction({
            transaction: {
                kind: 'moveCall',
                data: data
            }
        });


        //let hash = resData.certificate.transactionDigest;
    }

    const cards = Array.from(new Array(1))
        .map(() =>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-2">
                <div className="card w-96 bg-base-100 shadow-xl  mb-4 px-2">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => {

                            }}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )



    return (
        <main className="flex-1 bg-indigo-50 p-2">
            <div className="flex flex-wrap -mb-4 -mx-2">
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



