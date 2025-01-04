function Price({oldPrice, newPrice}){
    let styles = {
        textDecorationLine: "line-through"
    }
    let newStyle ={
        fontWeight: "bold"
    }
    return(
        <div>
            <span style={styles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}

export default Price;