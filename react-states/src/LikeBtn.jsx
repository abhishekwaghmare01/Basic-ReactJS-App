import { useState } from "react";
export default function LikeBtn() {
    let [isLike, setIsLike] = useState(false);

    let toggleBtn = () => {
      setIsLike(!isLike);
    }
    return (
        <div>
             <p onClick={toggleBtn}>
           {
            isLike ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)
           }
           </p>
        </div>
    )
}