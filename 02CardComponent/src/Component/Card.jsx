


function Card(Props) {
    return (


        <div className="Parent-Card justify-items-center p-3 h-80 w-64 m-2 hover:shadow-xl/20">

            <div className="image py-1">
                <img src={Props.img} className="size-38" />
            </div>
            <div className="detail flex-col flex  w-full ">
                <h1>Price: {Props.price}$</h1>
                <p className="truncate w-full">{Props.des}</p>
            </div>
            <div className="p-2 flex gap-2">
                <button className="bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 transition text-sm">
                    Purchase
                </button>
                <button className="bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 transition text-sm">
                    Add to Cart
                </button>
            </div>






        </div>


    )
}


export default Card