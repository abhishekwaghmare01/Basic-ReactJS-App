import { useState } from "react";
export default function LikeBtn() {
    let [isLike, setIsLike] = useState(false);

  

    let toggleBtn = () => {
      setIsLike(!isLike);
    }

    let btnStyle = {color : "red"};
    return (
        <div>
             <h2 onClick={toggleBtn}>
           {
            isLike ? (<i className="fa-solid fa-heart" style={btnStyle}></i>) : (<i className="fa-regular fa-heart"></i>)
           }
           </h2>
        </div>
    )
}