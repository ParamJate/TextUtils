// import { useState } from "react"
import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    const [btnText, setBtnText] = useState("Enable Dark Mode")


    // const toggleTheme=() =>{
    //     if(myStyle.backgroundColor==="white"){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <div className="container my-5" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}}>
                        TextUtils gives you a way to analyze your textquickly and efficiently. be it word count, character count or Minutes to read the senctence
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}}>
                        TextUtils is a free character count tool that provides instant character count & and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is sutaible for writing text with a word / character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='black'?'white':'black'}}>
                        This word counter software works in any browser such as Chrome, Firefox, Internet explorer, Safari etc. It suits to count charaters in facebook, blogs, books, excel documents, pdf documents, essay etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
