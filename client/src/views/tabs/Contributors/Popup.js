import React from 'react'
import './../Contributors/Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                
                {props.children}
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Exit</button>
            </div>
        </div>
    ) : "" ;
}

 export default Popup