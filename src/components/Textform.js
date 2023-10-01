import React , {useState} from 'react'


export default function Textform(props) {
    const handleUpclick=()=>{
        console.log("uppercase case clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upper Case","success");

    }
    const handlelowclick=()=>{
      console.log("Lowercase case clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Changed to Lower Case","success");

      
  }
  const handleclrclick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Cleared Text","success");
  }
    const handleCopy=()=>{
      let text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied","success");

    }
    const handleExtSpc=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed","success");

    }

    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text , setText] = useState("");
    // text="New" wrong way
    //setText("newtext");
  return (
    <>
  <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==="light"?"white":"#bcae86",color:props.mode==="dark"?"white":"#042743"}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2"  onClick={handleUpclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtSpc}>Extra Space Remove</button>
    <button className="btn btn-primary mx-2" onClick={handleclrclick}>Clear Text</button>





  </div>
  <div className='container' my-3 style={{color:props.mode==="dark"?"white":"#042743"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>User Takes {0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
    </>
  )
}
