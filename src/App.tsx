import './App.css'
import {redirect, useNavigate} from "react-router-dom";

function App() {

    /**
     * let {id} = useParams();
     * console.log();
     */

    const navigate = useNavigate();
    const goToDetail = (id: number) => {
        navigate('/collection');
    };

    const cards = Array.from(new Array(8))
        .map((number, index) =>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-2" key={index}>
                <div className="card w-96 bg-base-100 shadow-xl  mb-4 px-2">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://bobyard.infura-ipfs.io/ipfs/QmZPWWy5Si54R3d26toaqRiqvCH7HkGdXkxwUgCm2oKKM2?filename=img-sq-01.png"
                            alt="Shoes"
                            className="object-cover h-48 w-96 rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Collection{index + 1}</h2>
                        <p>An NFT created by Sui Wallet</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={()=>goToDetail(index)}>Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        );
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

export default App
