import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import Filters from "./Filters"
import './style.css'
const Home = () => {
  const {state :{products}}=CartState()
  console.log(products)
  return (
    <div className="home">
    <Filters/>
    <div className="productContainer">
      {products.map((prod,index)=>{
        return <SingleProduct prod={prod} key ={prod.id}/>
      })}
    </div>
    </div>
  )
}

export default Home
