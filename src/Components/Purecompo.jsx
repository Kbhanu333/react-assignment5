import { PureComponent} from 'react';

class Purecompo extends PureComponent {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    componentDidMount(){
        console.log("Mounted");
    }

    componentDidUpdate(){
        console.log("Updated");
    }

    render() {
        return (
            <div>
                <h2>Example of PureComponent:</h2>
                <p>This is an example of PureComponent where it updates by comparing previous primitive props values but not any other non primitive values.</p>
                <ul>
                    <li>if you click on first buttin only the left count will increase  because it represent inner functionality.</li>
                    <li>if you click on the second button count will decrease because we are trying to pass handler to the pure component so it willchange.</li>
                    <li>when it comes to 0 there is no decrement.</li>
                </ul>
                
                <h3>The count is {this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase</button>
                <button onClick={()=>{
                        if(this.state.count !== 0){
                            this.setState({count:this.state.count-1})
                        }
                    }}>Decrease</button>
            </div>
        );
    }
}

export default Purecompo;
