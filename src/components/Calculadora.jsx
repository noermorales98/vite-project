import { Component } from "react";

class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1 : 0,
            num2: 0
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <form>
                    <input type="number" name="numero1" id="numero1" value={this.state.num1}
                    onChange={e=>{
                        this,this.setState({
                            ...this.state,
                            num1: e.target.value
                        })
                    }}
                    />
                    <input type="number" name="numero2" id="numero2" value={this.state.num2}
                    onChange={e=>{
                        this,this.setState({
                            ...this.state,
                            num2: e.target.value
                        })
                    }}
                    />
                    <input type="button" value="Calcular" />
                </form>
                <span>resultado : { Number(this.state.num1) + Number(this.state.num2)}</span>
            </div>
        );
    }
}

export default Calculadora;