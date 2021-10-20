(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(t,e,r){"use strict";r.r(e);var s=r(2),i=r(3),a=r(5),n=r(4),c=r(1),h=r.n(c),o=r(8),l=r.n(o),u=(r(7),r(0)),d=function(t){Object(a.a)(r,t);var e=Object(n.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this.props.value.highLight?"red":"white";return Object(u.jsx)("button",{style:{background:t},className:"square",onClick:this.props.onClick,children:this.props.value.char})}}]),r}(h.a.Component),j=d,p=function(t){Object(a.a)(r,t);var e=Object(n.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"renderSquare",value:function(t,e){var r=this;return Object(u.jsx)(j,{i:t,j:e,onClick:function(){return r.props.onClick(t,e)},value:this.props.board[t][e]},t+e)}},{key:"renderBoard",value:function(t,e){for(var r=[],s=0;s<t;s++)r.push(this.renderRow(s,e));return Object(u.jsx)("div",{children:r.map((function(t,e){return t}))})}},{key:"renderRow",value:function(t,e){for(var r=[],s=0;s<e;s++)r.push(this.renderSquare(t,s));return Object(u.jsx)("div",{className:"board-row",children:r.map((function(t,e){return t}))},t)}},{key:"render",value:function(){var t=this.props.row,e=this.props.col;return Object(u.jsx)("div",{children:this.renderBoard(t,e)})}}]),r}(h.a.Component),b=p,f=function(t,e,r,s){return function(t,e,r,s){for(var i=e-4,a=r-4,n=0;n<5;n++)try{if(t[i+n][a+n].char===s&&t[i+n+1][a+n+1].char===s&&t[i+n+2][a+n+2].char===s&&t[i+n+3][a+n+3].char===s&&t[i+n+4][a+n+4].char===s)return[{i:i+n,j:a+n},{i:i+n+1,j:a+n+1},{i:i+n+2,j:a+n+2},{i:i+n+3,j:a+n+3},{i:i+n+4,j:a+n+4}]}catch(c){}return null}(t,e,r,s)||function(t,e,r,s){for(var i=e-4,a=r+4,n=0;n<5;n++)try{if(t[i+n][a-n].char===s&&t[i+n+1][a-n-1].char===s&&t[i+n+2][a-n-2].char===s&&t[i+n+3][a-n-3].char===s&&t[i+n+4][a-n-4].char===s)return[{i:i+n,j:a-n},{i:i+n+1,j:a-n-1},{i:i+n+2,j:a-n-2},{i:i+n+3,j:a-n-3},{i:i+n+4,j:a-n-4}]}catch(c){}return null}(t,e,r,s)||function(t,e,r,s){for(var i=e-4,a=i;a<i+5;a++)try{if(t[a][r].char===s&&t[a+1][r].char===s&&t[a+2][r].char===s&&t[a+3][r].char===s&&t[a+4][r].char===s)return[{i:a,j:r},{i:a+1,j:r},{i:a+2,j:r},{i:a+3,j:r},{i:a+4,j:r}]}catch(n){}return null}(t,e,r,s)||function(t,e,r,s){for(var i=r-4,a=i;a<i+5;a++)try{if(t[e][a].char===s&&t[e][a+1].char===s&&t[e][a+2].char===s&&t[e][a+3].char===s&&t[e][a+4].char===s)return[{i:e,j:a},{i:e,j:a+1},{i:e,j:a+2},{i:e,j:a+3},{i:e,j:a+4}]}catch(n){}return null}(t,e,r,s)},v=function(t){Object(a.a)(r,t);var e=Object(n.a)(r);function r(t){var i;Object(s.a)(this,r),i=e.call(this,t);return i.state={row:20,col:20,board:new Array(20).fill({char:null,highLight:!1}).map((function(){return new Array(20).fill({char:null,highLight:!1})})),history:[{step:0,i:0,j:0,char:{char:null,highLight:!1},xIsNext:!0}],ended:!1,current:0,asc:!0,resultMessage:""},i}return Object(i.a)(r,[{key:"handleClick",value:function(t,e){if(!this.state.ended){var r=this.state.board;if(null==r[t][e].char){var s=this.state.history,i=this.state.current,a=s[i].xIsNext;this.state.asc||(a=s[s.length-1-i].xIsNext);var n=a?{char:"X",highLight:!1}:{char:"O",highLight:!1};r[t][e]=n;for(var c=s.length-1;c>=0;c--)s[c].step>i&&s.splice(c,1);s=s.slice(0,i+1),i++,this.state.asc?s.push({step:i,i:t,j:e,char:n,xIsNext:!a}):s.unshift({step:i,i:t,j:e,char:n,xIsNext:!a}),this.setState({});var h=f(r,t,e,n.char);null!=h?(h.forEach((function(t){r[t.i][t.j].highLight=!0})),this.setState({ended:!0,board:r,history:s,current:i,resultMessage:"Winner: Player "+n.char})):s.length-1>=this.state.row*this.state.col?this.setState({ended:!0,board:r,history:s,current:i,resultMessage:"Draw game"}):this.setState({ended:!1,board:r,history:s,current:i,resultMessage:""})}}}},{key:"jumpTo",value:function(t){if(t!==this.state.current){for(var e=this.state.board,r=null,s=this.state.history,i=0;i<s.length;i++)s[i].step<=t?0!=s[i].step&&(s[i].char.highLight=!1,e[s[i].i][s[i].j]=s[i].char):e[s[i].i][s[i].j]={char:null,highLight:!1},s[i].step===t&&(r=s[i]);var a=f(e,r.i,r.j,r.char);null!=a?(a.forEach((function(t){e[t.i][t.j].highLight=!0})),this.setState({ended:!0,board:e,history:s,current:t,resultMessage:"Winner: Player "+r.char})):t>=this.state.row*this.state.col?this.setState({ended:!0,board:e,history:s,current:t,resultMessage:"Draw game"}):this.setState({ended:!1,board:e,history:s,current:t,resultMessage:""})}}},{key:"sort",value:function(t){var e=this.state.history;e=e.sort((function(e,r){return t?e.step-r.step:r.step-e.step})),this.setState({asc:t,history:e})}},{key:"render",value:function(){var t=this,e="",r=this.state.history.map((function(r,s){var i=r.char.char,a=0!==r.step?i+" in ("+r.i+","+r.j+")":"Go to game start",n=r.step===t.state.current?"red":"white";return r.step===t.state.current&&(e=r.xIsNext?"X":"O"),Object(u.jsxs)("div",{style:{display:"flex",padding:"5px"},children:[Object(u.jsx)("div",{style:{width:"90px"},children:0!==r.step?"Step "+r.step+". ":""}),Object(u.jsx)("div",{style:{display:"flex"},children:Object(u.jsx)("button",{style:{background:n,width:"150px"},onClick:function(){return t.jumpTo(r.step)},children:a})},r.step)]})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{marginBottom:"20px",fontSize:"20px",alignSelf:"center"},children:"L\xfd Duy Nam - 18127159 - BTCN01 - React tutorial"}),Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"game-board",children:Object(u.jsx)(b,{board:this.state.board,row:this.state.row,col:this.state.col,onClick:function(e,r){return t.handleClick(e,r)}})}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(u.jsxs)("div",{className:"game-info",children:[this.state.ended?null:Object(u.jsxs)("div",{children:["Next Player: ",e]}),Object(u.jsx)("div",{className:"scroll-view",children:r}),Object(u.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold"},children:this.state.resultMessage})]}),Object(u.jsxs)("div",{className:"game-info",children:[Object(u.jsx)("div",{children:"Sort the moves"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"radio",id:"Ascending",checked:this.state.asc,name:"rad",value:"0",onChange:function(){t.sort(!0)}}),Object(u.jsx)("label",{children:"Ascending "})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"radio",id:"Descending",checked:!this.state.asc,name:"rad",value:"1",onChange:function(){t.sort(!1)}}),Object(u.jsx)("label",{children:"Descending "})]})]})]})]})]})]})}}]),r}(h.a.Component);l.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))},7:function(t,e,r){}},[[14,1,2]]]);
//# sourceMappingURL=main.688f2160.chunk.js.map