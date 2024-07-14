import { useState } from 'react'
import '../index.css'
import axios from 'axios'


export const Product = () => {
    const [Products, setProducts] = useState([])
    // const [count, setCount] = useState(1)

    axios.get('/data.json').then(
        (res) => {
            setProducts(res.data)
        }
    )
    
  return (
    <div>
        <header><h1>Desserts</h1></header>
        <div className="products">
            {Products.map((p) => {
                <div className="product">
                <img src={p.image.desktop}></img>
                <button>Add to Cart</button>
                <div className="title">{p.category}</div>
                <div className="product-name">
                    {p.name}
                </div>
                <div className="price">{p.price}</div>
            </div>
            })
                
            }
        </div>        
    </div>
  )
}
