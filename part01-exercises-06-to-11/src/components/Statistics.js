const StatisticLine = props => {
    const { text, value } = props;
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

export const Statistics = props => {
    const { good, neutral, bad } = props;
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={good + neutral + bad} />
                    <StatisticLine
                        text='average'
                        value={(good - bad) / (good + neutral + bad)}
                    />
                    <StatisticLine
                        text='positive'
                        value={good / (good + neutral + bad)}
                    />
                </tbody>
            </table>
        </>
    );
};
