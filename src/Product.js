import './App.css'
function Product({id,title,price,image}){
    return (<div className='card'>
        
        <img src={image} alt='not found'/>
        <p>{title}</p>
    <p>{id}</p>
    <p>{price}</p>
    </div>)
}
export default Product