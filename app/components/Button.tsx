"use client";

import Alert from "./components/Alert";

interface Props {
    color?: string;
    children: string;
}

const Button = ({color, children} : Props) => {

    return (
        <>

            <button type="button" className={"btn btn-" + color} onClick={<Alert></Alert>}>{children}</button>
        </>
    )
}


export default Button 
