function printHello(){
    console.log("Hello!");
    
}

export default function nonClickHand(){
    return(
        <div>
        <button onMouseOver={printHello}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga pariatur ratione nobis obcaecati ullam accusamus doloribus dolore, aliquam natus alias.</button>
        </div>
    );
}