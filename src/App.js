
import { useState } from 'react';
import LeftSplit from './LeftSplit';
import SplitRight from './SplitRight';
import './style.css';

function App() {
  const[selectedBox , setSelectedBox] = useState('left');
  return (
    <div className='container'>
      
      <LeftSplit onEnter={()=> setSelectedBox('left') } clsName={selectedBox}></LeftSplit>
      <SplitRight onEnter={()=>setSelectedBox('right') } clsName={selectedBox}></SplitRight>
      
    </div>
  );
}

export default App;
