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
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value)
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
                <button className="btn btn-primary mx-3" onClick={UpClick}>UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={LoClick}>LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={CopyText}>Copy Text</button>
            </div>
            <div className="container my-4">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 className='my-2'>{text.length>0?'Preview':''}</h2>
                <p>{text}</p>
                {/* <p>{text.trim().length} characters</p>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p> */}
            </div>
        </>
    )
}
