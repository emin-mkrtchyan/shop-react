export function Basket({orders, minus, plus, remove}){

    const total = orders.reduce((sum, el) => sum+ el.price*el.quantity, 0);

    return <div className=" bg-red-700 top-28 right-2 p-8 fixed">
      {
        orders.map(el=> <div key={el.id} className=" text-white">
           <span>{el.title}</span>
           <button className=" bg-red-200 px-2 rounded m-1 text-black" onClick={()=>minus(el.id)}> - </button>
           <span>{el.quantity}</span>
           <button className=" bg-red-200 px-2 rounded m-1 text-black" onClick={()=>plus(el.id)}> + </button>
           <span> = </span>
           <span>{el.price*el.quantity}</span>
           <button className=" bg-red-200 px-2 rounded m-1 text-black" onClick={()=>remove(el.id)}>X</button>
        </div>)
      }
       <div className=" font-bold text-white"> Total:{total.toFixed(2)}</div>

    </div>

}