const ShareServiceComponent = ({
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

export default ShareServiceComponent;