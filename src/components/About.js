import React ,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    
    const[btnText,setBtnText]=useState("DarkMode")

    const toggleStyle=()=>{
        if(myStyle.color==="black")
        {
            setMyStyle({
                    color:"white",
                    backgroundColor:"black",
                    border:"1px solid white"
                }
            )
            setBtnText("LightMode");
        }
        else{
            setMyStyle({
                    color:"black",
                    backgroundColor:"white"
                }
            )
            setBtnText("DarkMode");

        }
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                For What?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                <strong>This is website which will help you to modulate and manipulate text according to users choice. </strong> 
                <p>Using this user can do the perform following operations: 1)UpperCase conversion, 2)LowerCase Conversion, 3)copying Text, 4)Removing Extra Spaces and 5)
                    Clearing Text.
                    Beside this the user can also get number of words used and characters in their text.
                    One can know the average time required to read the text written.
                    And at last there is a Preview Section where user can see how there text looks after applying changes.
                </p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               1. UpperCase Conversion
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                <strong>This is the first utility provided by this website.</strong> 
                <p>With the help of Convert to UpperCase Button user can change all the text entered in the Text area to UpperCase.</p>
                <p>This will ensure to convert the characters to capital letters.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                2. LowerCase Conversion
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                <strong>This is the second utility provided by this website.</strong> 
                <p>With the help of Convert to LowerCase Button user can change all the text entered in the Text area to LowerCase.</p>
                <p>This will ensure to convert the characters to small letters.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            3. To Copy Text 
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
            <strong>This is the third utility provided by this website.</strong> 
                <p>With the help of Copy Text Button user can copy all the text entered in the Text area.</p>
                <p>This will ensure to copy the whole text entered.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                4. To Remove Extra Spaces 
            </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                <strong>This is the fourth utility provided by this website.</strong> 
                <p>With the help of Remove Extra Spaces Button user can remove all the extra spaces entered in between the text.</p>
                <p>This will ensure to remove all the extra spaces.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                5. Clear Text 
            </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                <strong>This is the fifth utility provided by this website.</strong> 
                <p>With the help of Clear text Button user can delete whole text written here.</p>
                <p>This will ensure to delete the text.</p>
            </div>
            </div>
        </div>
        </div>
        <div className='container my-3'>
            <button onClick={toggleStyle} type="button"  className="btn btn-primary">{btnText}</button>
        </div>
    </div>
  )
}
