import React from 'react';
import '../index.css';
class Square extends React.Component {
    render() {
        const color = this.props.value.highLight ? 'red' : 'white'
      return (
        <button style={{background: color}} className="square" onClick = {this.props.onClick}>
          {this.props.value.char}
        </button>
      );
    }
  }
export default Square;