import React from 'react';
import '../index.css';
import Square from './Square';
class Board extends React.Component {
    
    renderSquare(i, j) {
      return <Square 
                i = {i}
                j = {j}
                key={i+j}
                onClick = {()=>this.props.onClick(i, j)} 
                value={this.props.board[i][j]}
            />;
    }
    renderBoard(numRow, numCol){
        const res = []
        for(var row = 0; row < numRow; row++)
            res.push(this.renderRow(row, numCol))
        return (
            <div>
                 {res.map((item, index) => (item))}
            </div>
        )
    }
    renderRow(row, numCol){
        const res = []
        for(var col = 0; col < numCol; col++) {
            res.push(this.renderSquare(row, col));
        }
        return (
            <div className="board-row" key={row}>
                {res.map((item, index) => (item))}
            </div>
        );
    }
    render() {
        const row = this.props.row;
        const col = this.props.col;
        //const status = 'Next player: X';
    
        return (
            <div>
                {this.renderBoard(row, col)}
            </div>
            
      );
    }
  }
export default Board;