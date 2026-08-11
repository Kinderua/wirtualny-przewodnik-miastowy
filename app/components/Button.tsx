interface Props {
    color: string;
    children: string;
}

const Button = ({color, children} : Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + color}>{children}</button>
        </>
    )
}


export default Button 
