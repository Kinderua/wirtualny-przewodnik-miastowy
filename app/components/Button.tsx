interface Props {
    color: string;
    children: string;
    onClick() : ()=>void;
}

const Button = ({color, children} : Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
        </>
    )
}


export default Button
