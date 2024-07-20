interface H1 {
    text: string,
}

export const H1 = ({text = ''}: H1) => {

    return (
        <h1 className="h1">{text}</h1>
    )
}