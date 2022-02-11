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

const App = () => {
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

    return (
        <div>
            <Header courseName={course.name} />
            <Content courseParts={course.parts} />
            <Total courseParts={course.parts} />
        </div>
    );
};

export default App;
