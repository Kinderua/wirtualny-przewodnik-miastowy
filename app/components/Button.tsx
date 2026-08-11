interface Props {
    whatButton: string;
    children: string;
}

const Button = ({whatButton, children} : Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + whatButton}>{children}</button>
        </>
    )
}


export default Button
