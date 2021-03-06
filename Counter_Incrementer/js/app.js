var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClickFunction(this.props.incrementValue);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                + {this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>Value is {props.counter}</div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.incrementCounter = this.incrementCounter.bind(this);

        this.state = { 
            counter: 0 
        };
    }

    incrementCounter(incrementValue) {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));