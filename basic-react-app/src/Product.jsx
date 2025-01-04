import "./Product.css"
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrice = ["12,299", "10,999", "7,999", "509"];
    let newPrice = ["10,299", "7,999", "4,999", "299"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>Description</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>

    )
}
export default Product;