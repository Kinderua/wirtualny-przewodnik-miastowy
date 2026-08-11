interface Props {
    whatButton: string
}

const Button = ({whatButton} : Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + whatButton}></button>
        </>
    )
}


export default Button
