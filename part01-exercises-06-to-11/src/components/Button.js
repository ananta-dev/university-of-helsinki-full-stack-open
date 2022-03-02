export const Button = props => {
    return (
        <>
            <button onClick={props.actionFunction}> {props.text}</button>;
        </>
    );
};
