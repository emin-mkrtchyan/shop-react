




export function Product({item, addToCard}){


    return <div className=" shadow-md px-2 py-4">
        <img src={item.image} alt={item.title} className=" w-full h-[300px] bg-cover"/>
        <div className=" font-bold">{item.title}</div>
        <div>{item.description.length>200? item.description.slice(0, 200)+'...':item.description}</div>
        <div className=" font-bold text-xl">Price <span>{item.price}$</span></div>
        <button className=" bg-red-700 rounded px-4 py-2 text-white" onClick={()=>addToCard(item)}>ADD TO CARD</button>
    </div>
}