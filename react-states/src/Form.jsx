import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");

  let handleChange = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form action="">
      <input
        type="text"
        placeholder="enter your full name"
        value={fullName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
