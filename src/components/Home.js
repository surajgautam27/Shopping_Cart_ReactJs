import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"

const Home = () => {
  const {state :{products}}=CartState()
  console.log(products)
  return (
    <div className="home">
    {/* <Filter/> */}
    <div className="prodcutContainer">
      {products.map((prod,index)=>{
        return <SingleProduct prod={prod} key ={prod.id}/>
      })}
    </div>
    </div>
  )
}

export default Home
