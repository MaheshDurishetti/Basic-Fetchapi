import { useEffect, useState } from 'react';
import './App.css'
import logo from './logo.svg';
import Product from './Product';
function App(){
 let [products,setProducts]= useState([])

  useEffect(()=>{
    getProducts()
  },[])
  async function getProducts(){
    let res=await fetch('https://fakestoreapi.com/products')
    let productList= await res.json();
    setProducts(productList)
    console.log(productList)
  }
  if(products.length==0){
    return (<h1>fetching data...</h1>)
  }

return(<>
<h1 className='H'>🙏🏿WELCOME🙏🏿</h1>
<div className='product-List'>
{products.map((u)=><Product key={u.id}{...u}></Product>)}
</div>
</>
)  

} 
export default App
  