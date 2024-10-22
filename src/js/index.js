//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {SecondsCounter} from "./component/secondsCounter.jsx";
let seconds = 0;
let intervalo;
let sentido = true;


//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds}/>)
const renderSecondsCounter = () => {
if (sentido) {
    seconds++;
}else {
    seconds--;
}

app.render(
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">

            <div className="d-flex justify-content-center flex-wrap w-100 px-2">
                <SecondsCounter counter={seconds} />
            </div>

            <div className="text-center mt-4 w-50 px-3">
                <div className="d-flex justify-content-center flex-wrap w-100">
                    <button onClick={() => {
                        clearInterval(intervalo); intervalo=undefined;
                        
                    }}  
                    type="button" className="btn m-2 rounded btn-dark text-withe w-15">
                        Pausar
                    </button>
                    <button 
                        onClick={() => {
                            if(!intervalo) {
                             intervalo = setInterval(renderSecondsCounter, 1000);
                            }
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark text-withe w-15"
                    >
                        Resumir
                    </button>
                    <button
                        onClick={() => {
                            seconds = 0;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark text-withe w-15"
                    >
                        Reiniciar
                    </button>
                    
                    <button
                        onClick={() => {
                            sentido = !sentido;
                        }}
                        type="button"
                        className={`btn m-2 rounded w-15 ${sentido ? "btn-dark" : "btn-light"}`}
                    >
                        {sentido ? "Retroceder" : "Avanzar"}
                    </button>
                </div>
            </div>

    </div>
)}

intervalo = setInterval(renderSecondsCounter, 1000);