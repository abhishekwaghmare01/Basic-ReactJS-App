import "./Product.css"
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrice = ["12,299", "10,999", "7,999", "509"];
    let newPrice = ["10,299", "7,999", "4,999", "299"];
    let description = ["8,000 DPI", "intuitive surface", "Design for iPad Pro", "Wireless Mouse"]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>

    )
}
export default Product;