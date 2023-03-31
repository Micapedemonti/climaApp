import { useState } from "react"
import Api from '../FetchAPi/FetchApi'

const Input = () =>{

   const [input, setInput] = useState("Madrid")
   const [searchClicked, setSearchClicked] = useState(false)
   

const handleInputChange = (event) => {
    setInput(event.target.value);
  };


   const admEnvio = (e) =>{
    e.preventDefault();
    setSearchClicked(true);
    const inputValue = input; // guarda el valor actual de `input`
      setInput(inputValue); // restaura el valor original de `input`
}


    return (
    <>
        <div>
        <form onSubmit={admEnvio}>
        <input type="text" placeholder='Buscar ciudad' value = {input} onChange={handleInputChange} />
        <button type="submit">Buscar</button>
        {searchClicked && input.length > 0 && <Api ciudad={input} />}
        </form>
        </div>

    </>
    )
}

export default Input