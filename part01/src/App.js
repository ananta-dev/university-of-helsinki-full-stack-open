import { useState } from "react";
const Header = props => <h1>{props.courseName}</h1>;

const Part = props => (
    <p>
        {props.name} {props.exercises}
    </p>
);

const Content = props => (
    <>
        {props.courseParts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </>
);

const Total = props => {
    // --- A more naive way: ---
    // let totalNumber = 0;
    // props.parts.forEach(part => (totalNumber += part.exercises));

    // --- A more ES6 way with reduce ---
    const totalNumber = props.courseParts.reduce((x, y) => ({
        exercises: x.exercises + y.exercises,
    })).exercises;

    return <p>Number of exercises {totalNumber}</p>;
};

const Display = ({ counter }) => {
    return <div>{counter}</div>;
};

const Button = ({ onClickFunction, text }) => {
    return <button onClick={onClickFunction}>{text}</button>;
};

const App = () => {
    const [counter, setCounter] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

    const course = {
        name: "Half Stack application development",
        parts: [
            {
                id: 1,
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                id: 2,
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                id: 3,
                name: "State of a component",
                exercises: 14,
            },
        ],
    };
    const [value, setValue] = useState(10);
    const [valueB, setValueB] = useState(10);

    // setTimeout(() => setCounter(counter + 1), 2000);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
    const increaseLeft = () => setLeft(left + 1);
    const increaseRight = () => setRight(right + 1);
    const setToValue = newValue => () => {
        console.log("value now", newValue); // print the new value to console
        setValue(newValue);
    };

    const setToValueB = newValue => {
        console.log("value now", newValue);
        setValueB(newValue);
    };

    return (
        <div>
            <Header courseName={course.name} />
            <Content courseParts={course.parts} />
            <Total courseParts={course.parts} />
            <Display counter={counter} />
            <Button onClickFunction={increaseByOne} text='Increase' />
            <Button onClickFunction={decreaseByOne} text='Decrease' />
            <Button onClickFunction={setToZero} text='Reset' />
            <br />
            <strong>Left: </strong>
            <Display counter={left} />
            <strong>Right: </strong>
            <Display counter={right} />
            <Button onClickFunction={increaseLeft} text='Left' />
            <Button onClickFunction={increaseRight} text='Right' />
            <br />
            <br />
            <div>
                {value}
                <br />
                <br />
                <button onClick={setToValue(1000)}>thousand</button>
                <button onClick={setToValue(0)}>reset</button>
                <button onClick={setToValue(value + 1)}>increment</button>
            </div>
            <br />
            <br />
            <div>
                {valueB}
                <br />
                <button onClick={() => setToValueB(1000)}>thousand (B)</button>
                <button onClick={() => setToValueB(0)}>reset (B)</button>
                <button onClick={() => setToValueB(value + 1)}>
                    increment (B)
                </button>
            </div>
        </div>
    );
};

export default App;
