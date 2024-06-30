import React from 'react'

function Alert(props) {
    return (
        <div className={` toast-top toast-center ${props.showAlert ? 'toast' : 'hidden'}`}>
            <div className="alert alert-error">
                <span>{props.alertMessage}</span>
            </div>
        </div>
    )
}

export default Alert