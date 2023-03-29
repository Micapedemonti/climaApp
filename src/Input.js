import { useState } from "react"
import Api from "./FetchAPi/FetchApi"

const Input = () =>{

   const [input, setInput] = useState("Madrid")



const handleInputChange = (event) => {
    setInput(event.target.value);
  };


   const admEnvio = (e) =>{
    e.preventDefault();
     setInput('');
}


    return (
    <>
        <div>
        <form onSubmit={admEnvio}>
        <input type="text" placeholder='Buscar ciudad' value = {input} onChange={handleInputChange} />
        <button type="submit">Buscar</button>
        {input && <Api ciudad={input} />} 
        </form>
        </div>

    </>
    )
}

export default Input