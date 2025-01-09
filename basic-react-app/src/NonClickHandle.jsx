function printHello(event){
    console.log("Hello!");
    console.log(event);
    
}

function printHel(){
    console.log("Hello!");
    
}

export default function NonClickHandle(){
    return(
        <div>
        <button onClick={printHello}>button</button>
        <p onMouseOver={printHel}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga pariatur ratione nobis obcaecati ullam accusamus doloribus dolore, aliquam natus alias.</p>
        </div>
    );
}