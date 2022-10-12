
const CounterServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    console.log('Pakistan Zindabad')

    return children({
        navigation,
    });
};

export default CounterServiceComponent;
