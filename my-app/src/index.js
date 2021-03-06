/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

======================================================================
packages used:

npm install jquery

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';


class App extends React.Component{
	
	state = {result : []}
	
	componentDidMount = ()=>{
		$.ajax({
	           type: "GET",
	           //url: 'http://ryazan.bcgov:1776/searchAdaptationLayerWS/data/upload/mindbreeze/properties/get?accesstype=PRIVATE&environment=QA',
	           url: 'https://jsonplaceholder.typicode.com/posts/1',
	           data: {},
	           xhrFields: {
	             withCredentials: false
	           },
	           crossDomain: true,
	           dataType: 'json',
	           success: (result)=>{
	              this.setState({result : result});
	           }
	         });

	      };
	
	render(){
		return(
			<div className="data">
				Title: {this.state.result.name} <br />
				ID: {this.state.result.estimated_count} <br />
				userId:{this.state.result.userId} <br />
				body:{this.state.result.body}
			</div>
		);
		
	}

}

//class App extends React.Component {
//	state = { todos: [] }
//	
//	
//}


ReactDOM.render(
	 <App />,
	document.getElementById('app')
);



/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
*/

/*
class Square extends React.Component {
  constructor(props){
  	super(props);
  	this.state={
  	value:null,
  	};
  }
  
  render() {
    return (
      <button className="square" onClick={ () => this.props.onClick() }>
        {this.props.value}
      </button>
    );
  }
}
*/

//Square doesn't care about its state. Is assigned by the board
//This is way to write components that only ever render
function Square(props){
	return(
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		squares: Array(9).fill(null),
  		xIsNext: true,
  	}
  }
  
  handleClick(i){
  	const squares = this.state.squares.slice();
  	
  	if(calculateWinner(squares) || squares[i]){
  		return;
  	}
  	squares[i] = this.state.xIsNext ? 'X' : 'O';
  	this.setState({
  		squares: squares,
  		xIsNext: !this.state.xIsNext,
  	});
  }
  
  renderSquare(i) {
    return (
    	<Square 
    		value={this.state.squares[i]}
    		onClick={() => this.handleClick(i)}
    	/>
    );
  }

  render() {
 //   const status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
    	status='Winner: '+ winner;
    }else{
    	status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
    }
    

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
