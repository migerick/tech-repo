interface Props {
    text: string
}

export const P = ({text}: Props) => {
    return (
        <p className="p">{text}</p>
    );
};