import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/**
 * 
 * NOTES:
 *  JSX - syntax that makes structures easier to write:
 *  we can use <div> instead of React.createElement('div')
 * 
 *  the ... -> This is ES6 syntax (not react)
 *  This is a Spreat / Rest operator. The Spread operator legs you expand the iterable lie a string, object or array into 
 *  its elements while the Rest operator does the inverse by reducing a set of elements into one array.
 *  using ...props expands the props object from the parent component so all of its attributes are passed to the child (instead of only what the child needs)
 * 
 */

/*
class Square extends React.Component {
    render() {
      return (
        //<button className="square" onClick={function() {alert('click');}}> Notice how we're passing a function. Can do it a different way
        //below: provided onclick function from props is called on click
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
*/
  //function components are used when only render is required (aboce and below do the same thing)
  //Square takes in it's value 'X' or 'O' as props and well as the JS function to execute onClick
  function Square(props){
    return (
      <button className="square" onClick={props.onClick}>{props.value}</button>
    );
  }

  //This function simply lays out all winning states in arrays. With each click, we check to see if
  //the input array has any character which follow the winning sequence, declare the winner
  function calculateWinner(squares){
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

    for (let i=0; i<lines.length; i++){
      const[a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
      }
    }
    return null;
  }
  

  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    //Render the board. Assign each square a number
    render() {
      return (
        <div>
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
  
  //Game React Object orchestrates the game
  
  class Game extends React.Component {
    //build constructor
    constructor(props){
      super(props);
      //Initialize state container
      this.state={
          history: [{
            squares: Array(9).fill(null),
          }],
          stepNumber: 0,
          xIsNext: true,
      };
    }

    //Handle Click is passed to squares. By declaring at this level, we can capture things like history at this level
    //The history object is immutable, so we use .slice to copy values to it (instead of directly modifying it)
    //The squares object is immutable, we make copies (.slice) of it so that each of the game states are saved
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber+1);
      const current = history[history.length - 1];
      //since() is used to make this method immutable. Instead of modifying the data, we copy new values into it
      const squares = current.squares.slice();
      //if game is over, return
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
      console.log(squares);
    }

    //method to change state of game
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step %2)===0
      })
    }
    
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step,move) => {
        const desc = move ? 
          'Go to move#' + move:
          'Go to game start';
        //Key: key is a keyword. cannot be accessed by this.props.key. Used by react internally
        //We assign keys to this dynamic list so that when the list is re-rendered, react can 
        //search previous iterations for the same key. Now each history has a unique ID. The 
        //moves are never re-ordered, deleted or inserted so it is safe to use as a key
        return(
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        )
      })

      let status;
      if(winner){
        status = 'Winner: '+winner;
      }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
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
  