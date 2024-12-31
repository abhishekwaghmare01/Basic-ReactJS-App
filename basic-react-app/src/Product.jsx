import "./Product.css"

function Product({title, price, features}) {
    // const list = features.map((feature) => <li>{feature}</li>);

    // const isDiscount = price > 30000 ? "discount of 5%" : "";
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount ? "yellow" : null };
    return (
        
        <div className="Product" style={styles}>
            <h2>Title :{title}</h2>
            <h4>Price :{price}</h4>
            {isDiscount ? <p>Discount of 5%</p> : null }
        </div>

    )
}
export default Product;