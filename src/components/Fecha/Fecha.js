import './Fecha.css'

const Fecha = () =>{

var today = new Date();
 
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
var now = today.toLocaleString('es', options);

return (
    <div className="fecha">
    <h2> {now}</h2>
    </div>
)

}

export default Fecha