function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submited");
    
}


export default function Form(){
    return (
        <form action="">
            <input type="text" placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}