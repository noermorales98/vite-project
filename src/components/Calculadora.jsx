import { Component } from "react";

class Calculadora extends Component {
    //primer paso del ciclo de vida
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            num2: 0
        }
        this.setNumber1 = this.setNumber1.bind(this)
        this.setNumber2 = this.setNumber2.bind(this)
    }

    setNumber1(e) {
        this.setState({
            ...this.state,
            num1: e.target.value
        })
    }

    setNumber2(e) {
        this.setState({
            ...this.state,
            num2: e.target.value
        })

    }
    
    //segundo paso del ciclo de vida

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <form>
                    <input type="number" name="numero1" id="numero1" value={this.state.num1}
                        onChange={this.setNumber1}
                    />
                    <input type="number" name="numero2" id="numero2" value={this.state.num2}
                        onChange={this.setNumber2}
                    />
                    <input type="button" value="Calcular" />
                </form>
                <span>resultado : {Number(this.state.num1) + Number(this.state.num2)}</span>
            </div>
        );
    }
    
    //tercer paso del ciclo de vida
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
    
}

export default Calculadora;