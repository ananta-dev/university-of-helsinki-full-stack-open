const Header = props => <h1>{props.course}</h1>;

const Part = props => (
    <p>
        {props.name} {props.exercises}
    </p>
);

const Content = props => (
    <>
        {props.parts.map(part => (
            <Part name={part.name} exercises={part.exercises} />
        ))}
    </>
);

const Total = props => {
    // --- A more naive way: ---
    // let totalNumber = 0;
    // props.parts.forEach(part => (totalNumber += part.exercises));

    // --- A more ES6 way with reduce ---
    const totalNumber = props.parts.reduce((x, y) => ({
        exercises: x.exercises + y.exercises,
    })).exercises;

    return <p>Number of exercises {totalNumber}</p>;
};

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

export default App;
