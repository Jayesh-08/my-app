import React, { useState } from 'react'

export default function TextForm(props) {
    const UpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const LoClick = () => {
        // console.log("LowerCase button is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase","success");
    }
    const ClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","success");

    }
    const CopyText = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to ClipBoard","success");

    }
    const [text, setText] = useState("");
    // text = "ajbdjfb";
    // setText("Hello this is a new text");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="box" rows="8" onChange={handleOnChange} placeholder={props.placeHolder}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={UpClick}>UpperCase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={LoClick}>LowerCase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={ClearText}>Clear Text</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={CopyText}>Copy Text</button>
            </div>
            <div className="container my-4">
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2 className='my-2'>{text.length>0?'Preview':''}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}