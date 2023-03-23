import { useState } from "react";

const Calculadora = (props) => {

    const [state, setState] = useState({
        num1: 0,
        num2: 0
    })
    
    const setNumber1 = (e) =>{
        setState({
            ...state,
            num1: e.target.value
        })
    }
    
    const setNumber2 = (e) =>{
        setState({
            ...state,
            num2: e.target.value
        })
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <form>
                <input type="number" name="numero1" id="numero1" value={state.num1}
                    onChange={setNumber1}
                />
                <input type="number" name="numero2" id="numero2" value={state.num2}
                    onChange={setNumber2}
                />
                <input type="button" value="Calcular" />
            </form>
            <span>resultado : {Number(state.num1) + Number(state.num2)}</span>
        </div>
    );
}


export default Calculadora;