import { Product } from "./Product"



export function Products({products, addToCard}){

    return <div className=" grid sm:grid-cols-4 lg:grid-cols-4 gap-4">
    {
        products.map(el=> <Product key={el.id} item={el} addToCard={addToCard}/>)
    }
    </div>
}