interface Props {
    whatButton: string;
    text: string;
}

const Button = ({whatButton, text} : Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + whatButton}>{text}</button>
        </>
    )
}


export default Button
