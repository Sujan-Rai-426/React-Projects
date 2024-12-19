
import React from 'react'

function AlertMsg(props) {
    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{zIndex: '10', position:'fixed', left: '0', right: '0' }} role="alert">
            <strong> Hey!!! </strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    
    )
}

export default AlertMsg