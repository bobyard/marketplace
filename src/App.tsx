import './App.css'

function App() {

    /**
     * let {id} = useParams();
     * console.log();
     */
    const cards = Array.from(new Array(8))
        .map(() =>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-2">
                <div className="card w-96 bg-base-100 shadow-xl  mb-4 px-2">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"
                             className="rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
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

export default App
