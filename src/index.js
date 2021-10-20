import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import calculateWinner from './helper';


class Game extends React.Component {
  constructor(props){
    super(props);
    const row = 7;
    const col = 7;
    this.state = {
      row,
      col,
      board: new Array(row).fill({char: null, highLight: false}).map(() => new Array(col).fill({char: null, highLight: false})),
     
      history: [{step: 0,i: 0, j: 0, char: {char: null, highLight: false}, xIsNext: true}],
      ended: false,
      current: 0,
      asc: true,
      resultMessage: "",

    }
   
  }
  
  handleClick(i, j) {
    if (this.state.ended)
      return;
    const board = this.state.board; 
    if (board[i][j].char!=null)
      return;
    var history = this.state.history;
    var current = this.state.current;
    var xIsNext = history[current].xIsNext;
    if (!this.state.asc)
      xIsNext = history[history.length-1 - current].xIsNext;
    const char = xIsNext ? {char: "X", highLight: false} : {char: "O", highLight: false};
    board[i][j] = char;
    for(var k = history.length - 1; k >=0; k--)
      if (history[k].step > current)
        history.splice(k, 1);
    history = history.slice(0, current + 1);
    current++;
    if (this.state.asc)
      history.push({step: current,i, j, char, xIsNext: !xIsNext});
    else
      history.unshift({step: current,i, j, char, xIsNext: !xIsNext});
   
    this.setState({
      
    })
    const res = calculateWinner(board, i, j, char.char) 
    if (res != null)
      {
        
        res.forEach(e => {
          board[e.i][e.j].highLight = true;
        });
        this.setState({
          ended: true, 
          board, 
          history,
          current,
          resultMessage: "Winner: Player " + char.char,
        });
      }
    else{
        if (history.length-1 >= this.state.row * this.state.col)
        {
          this.setState({
            ended: true, 
            board, 
            history,
            current,
            resultMessage: "Draw game",
          });
        }
        else
          this.setState({
            ended: false, 
            board, 
            history,
            current,
            resultMessage: "",
          });
    }
    
  }
  jumpTo(step){
    if (step === this.state.current)
      return;
    
    const board = this.state.board; 
    var curMove = null;
    const history = this.state.history;
    for(var i = 0; i < history.length; i++){
      if (history[i].step <= step){
        history[i].char.highLight = false;
        board[history[i].i][history[i].j] = history[i].char;
      }
      else
        board[history[i].i][history[i].j] = {char: null, highLight: false};
      if (history[i].step === step)
        curMove = history[i]
    }
    const res = calculateWinner(board, curMove.i, curMove.j, curMove.char) 
    if (res != null)
      {
        
        res.forEach(e => {
          board[e.i][e.j].highLight = true;
        });
        this.setState({
          ended: true, 
          board, 
          history,
          current: step,
          resultMessage: "Winner: Player " + curMove.char,
        });
      }
    else{
      if (step >= this.state.row * this.state.col){
        this.setState({
          ended: true, 
          board, 
          history,
          current: step,
          resultMessage: "Draw game"
        });
      }
      else
      {
        
        this.setState({
          ended: false, 
          board, 
          history,
          current: step,
          resultMessage: ""
        });
      }
    }
      

  }
  sort(asc){
  
    var history = this.state.history;
    history = history.sort((a, b) => {
      if (asc)
        return a.step - b.step;
      return  b.step - a.step;
    })
  
    //history = history.reverse();
    this.setState({asc, history});
  }
  render() {
    var curPlayer = "";
    const moves = this.state.history.map((step, move) => {
      const charLocated = step.char.char
      const desc = step.step !== 0 ?
        charLocated + ' in (' + step.i + ',' +step.j+ ')' :
        'Go to game start';
      const color = step.step === this.state.current ? 'red' : 'white' 
      if (step.step === this.state.current)
        curPlayer = step.xIsNext ? 'X' : 'O';
      return (
        <div  style = {{display: 'flex', padding: "5px"}}>
          <div style = {{width: '90px'}}>
              {step.step !== 0 ? 'Step '+ step.step + '. ' : ''}
            </div>
          <div key={step.step} style = {{display: 'flex'}}>
            <button style={{background: color, width: '150px', }} onClick={() => this.jumpTo(step.step)}>{desc}</button>
          </div>
        </div>
        
      );
    });
    return (
      <div >
        <div style={{marginBottom: '20px', fontSize: '20px', alignSelf:'center'}}>
          Lý Duy Nam - 18127159 - BTCN01 - React tutorial
        </div>
        <div className="game" >
          <div className="game-board">
            <Board 
                board={this.state.board}
                row={this.state.row} 
                col = {this.state.col}
                onClick={(i, j) => this.handleClick(i, j)}
            />
          </div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className="game-info" >
              {this.state.ended?null:<div>Next Player: {curPlayer}</div>}
              <div className="scroll-view">{moves}</div>
              <div style={{fontSize: '20px', fontWeight: 'bold'}}>{this.state.resultMessage}</div>
            </div>
            <div className="game-info" >
              <div>Sort the moves</div>
              <div>
                  <div>
                    <input 
                      type="radio" 
                      id="Ascending" 
                      checked={this.state.asc} 
                      name="rad" 
                      value="0"
                      onChange = {()=>{this.sort(true)}} />
                    <label >Ascending </label>
                  </div>
                  <div>
                    <input 
                      type="radio" 
                      id="Descending" 
                      checked={!this.state.asc} 
                      name="rad" 
                      value="1" 
                      onChange = {()=>{this.sort(false)}} />
                    <label >Descending </label>
                  </div>
                  
              </div>
            </div>
          </div>
          
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
