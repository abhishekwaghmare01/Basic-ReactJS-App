import Product from "./product.jsx";

function ProductTab(){
    let options = ["hi-tech", "durable", ,"fast"];
    return(
        <>
        <Product title="Laptop" price={40000} />
        <Product title="Phone" price={3000}/>
        <Product title="Pen" price={10}/>
        </>
    )
}

export default ProductTab;