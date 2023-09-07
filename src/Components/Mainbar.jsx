import React, { useState } from 'react'


function Mainbar() {
    const [text,setText] = useState('');
    const [isCopied, setIsCopied] = useState(false);
 
    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const wordClear = ()=>{
        let newText = text.replace(text,'');
        setText(newText);
    }
    //text copy 
    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setIsCopied(true);
          })
          .catch((err) => {
            console.error('Failed to copy text:', err);
          });
      };
      
  
  return(
    <div className='container '>
        <h1>Word Count</h1>
        <textarea className="form-control" id="text" rows="8" value={text} onChange={(e)=>{
            setText(e.target.value);
        }}></textarea>
        <div className='my-2'>
            <button type="button" className="btn btn-primary mx-1" onClick={upperCase}>Upper Case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={lowerCase}>Lower Case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={wordClear}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={copyTextToClipboard}>{isCopied ? 'Copied!' : 'Copy Text'}</button>
        </div>
        <div className="">
            <h2>Text Summary</h2>
            <p> {text.length} Characters, {text.split(" ").length} Words</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
    </div>
  )
}

export default Mainbar;