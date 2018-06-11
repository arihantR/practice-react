import React from 'react'

const UserInput = (props) => {
    return (
        <input type="text" onChange = {props.changeName} value = {props.name}/>
    )
}

export default UserInput;