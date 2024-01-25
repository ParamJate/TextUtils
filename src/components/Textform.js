import React, {useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("")
    const [findText, setFindText] = useState("")
    const [replaceText, setReplaceText] = useState("")
    const [isDialogueOpen, setIsDialogueOpen] = useState(false)

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }
    
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    
    const handleShowDialogue = () => {
        setIsDialogueOpen(true)
        let newText = ''
        setFindText(newText)
        setReplaceText(newText)
    }
    
    const handleDialogueClose = ()=>{
        setIsDialogueOpen(false)
    }
    
    const handleFindReplace = (e) => {
        let newText = text.replace(findText, replaceText)
        setText(newText)
        props.showAlert("Text Replaced", "success")
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard", "success")
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value) 
    }
    
    return (
        <>
        <div>
            <div className="container my-3">                
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" placeholder="Enter Your Text here" value=
                {text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}></textarea>
                <button className="btn btn-outline-success mx-1" onClick={handleUpClick}>Conver to UpperCase</button>
                <button className="btn btn-outline-success mx-1" onClick={handleLoClick}>Conver to UpperCase</button>
                <button className="btn btn-outline-success mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-outline-success mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-outline-success mx-1" onClick={handleShowDialogue}>Find and Replace</button>
                <style>
                {`
                    ::placeholder{
                        color:${props.mode==='black'?'white':'black'};
                    }`
                }
                </style>
            </div>
            <div className="box" style={{display:'none'}}>
            </div>
            {isDialogueOpen &&(
                <div className="dialogue-overlay" >
                    <div className="dialogue-box" id="box" style={{display: 'flex', alignItems: 'center'}}>
                        <input className="findEl mx-1" type="text" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white', border:props.mode==='black'?'1px solid white':'0.5px solid black',}} placeholder="Find" value={findText} onChange={(e)=>{setFindText(e.target.value)}} />
                        <input className="replaceEl mx-1" type="text" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white', border:props.mode==='black'?'1px solid white':'0.5px solid black'}} placeholder="Replace" value={replaceText} onChange={(e)=>{setReplaceText(e.target.value)}} />
                        <button className="btn btn-outline-success mx-1" onClick={handleFindReplace}>Replace</button>
                        <button className="btn btn-outline-success mx-1" onClick={handleDialogueClose}>Close</button>
                    </div>
                </div>
            )}
            <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here "}</p>
            </div>
        </div>
            <style>
                {`
                    ::placeholder{
                        color:${props.mode==='black'?'white':'black'};
                    }`
                }
            </style>
    </>
  )
}
