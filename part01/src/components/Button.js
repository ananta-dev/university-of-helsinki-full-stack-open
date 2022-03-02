export const Button = props => {
    return (
        <>
            <button onClick={props.clickFunction}> {props.text}</button>;
        </>
    );
};
