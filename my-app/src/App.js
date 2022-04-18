import './App.css';
import React from 'react'

function App() {

  const [prev, setPrev] = React.useState([]);
  const [data, setData] = React.useState([]);
  
console.log(data)
  const add = e=>{
    let x = prev.length;
    setPrev(prev=>{
      return(
        [...prev, <div className='round' key={x} style={{top: e.clientY, left: e.clientX}}></div>]
      )
    })

    setData(prev=>{
      return(
        [...prev, {
          top: e.clientY, 
          left: e.clientX
        }]
      )
    })
  }

  const arr = [];
  for(let i = 1; i< data.length; i++){
    if(i%4 === 3){
      const to = (data[i-3].top - data[i].top);
      const le =(data[i-3].left - data[i].left)
      const  angleDe = Math.atan2(to, le) * 180 / Math.PI;

      arr.push(<div className='vivek' style={{
        width : Math.sqrt(le**2 + to**2),
        top: data[i].top + 15,
        left: data[i].left+15, 
        transform: `rotate(${angleDe}deg)`
      }}></div>);

      
      
    }

    if(i%4 === 0) continue;

    const topp = (data[i].top - data[i-1].top);
    const leftt =(data[i].left - data[i-1].left)
    const  angleDeg = Math.atan2(topp, leftt) * 180 / Math.PI;

    arr.push(<div className='vivek' style={{
      width : Math.sqrt(leftt**2 + topp**2),
      top: data[i-1].top + 15,
      left: data[i-1].left+15, 
      transform: `rotate(${angleDeg}deg)`
    }}></div>);
  }
  return (
    <div className='container' onClick={(event)=>add(event)}>
      {prev}
      {arr}
    </div>
  );
}

export default App;
