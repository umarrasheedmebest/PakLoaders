const RateServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
        navigation.openDrawer()
    }

    return children({
        navigation,
        sideBar
    });
};

export default RateServiceComponent;