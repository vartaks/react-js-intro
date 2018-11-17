const _ = require('lodash'),
    React = require('react'),
    ReactDOM = require('react-dom');

const Stars = (props) => {

    // Random number of stars between 1 and 9
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>)}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div className="col-5">
            <span>5</span>
            <span>6</span>
        </div>
    )
}

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

// array of numbers from 1 to 9
Numbers.list = _.range(1, 10);

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h3>Play Nine!</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
