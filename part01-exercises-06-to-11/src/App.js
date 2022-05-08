import { useState } from "react";
import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => {
        setGood(good + 1);
    };

    const increaseNeutral = () => {
        setNeutral(neutral + 1);
    };

    const increaseBad = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button actionFunction={increaseGood} text='good' />
            <Button actionFunction={increaseNeutral} text='neutral' />
            <Button actionFunction={increaseBad} text='bad' />
            {good + neutral + bad > 0 && (
                <Statistics good={good} neutral={neutral} bad={bad} />
            )}
        </div>
    );
};

export default App;
