import { useEffect, useState } from "react";
import { Products } from "./Products";
import { Basket } from "./Basket";



export function App(){


   const [products, setProducts] = useState([]);
   const [orders, setOrders] = useState([]);
   const [showBasket, setShowBasket] = useState(false);

   useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
   }, [])

   const addToCard = (product) => {
    const index = orders.findIndex(el=> el.id === product.id)

    if(index === -1){
      const newOrder = {
        ...product,
        quantity:1
      }
      setOrders([...orders, newOrder])
    } else{
      const newOrders = orders.map(el=>{
       if(el.id === product.id) el.quantity=el.quantity+1;
        return el;
      })
      setOrders(newOrders)
    }
  }
    const plus = (id) => {
      const newOrders = orders.map(el=>{
         if(el.id === id) el.quantity=el.quantity+1;
        return el;
      })
        setOrders(newOrders);
    }

    const minus = (id) => {
      const newOrders = orders.map(el=>{
       if(el.id === id) el.quantity=el.quantity>1? el.quantity-1 : 1
        return el;
      })
      setOrders(newOrders)
    }

    const remove = (id) => {
      const newOrders = orders.filter(el=>
        el.id !== id)
        setOrders(newOrders)
    }
   

  return <div className=" container mx-auto">
    <button className=" fixed bg-red-700 top-2 right-2 z-10 p-8 rounded text-white"
    onClick={()=>setShowBasket(!showBasket)}>
    CARD</button>
    {showBasket && <Basket orders={orders}  plus={plus}  minus={minus} remove={remove}/>}
     <Products products={products} addToCard={addToCard}/>
  </div>
}


