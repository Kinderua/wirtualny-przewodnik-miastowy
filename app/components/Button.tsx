
import { useState } from 'react';
import Alert from ".//Alert";

"use client";


interface Props {
    color?: string;
    children: string;
}

const Button = ({color, children} : Props) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
             {isActive && <Alert></Alert>}
            <button type="button" className={"btn btn-" + color} onClick={() => setIsActive(!isActive)}>{children}</button>
        </>
    )
}


export default Button 
