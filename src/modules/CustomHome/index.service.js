const HomeServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const navigateCompleteProfileOne= ()=> {
        navigation.navigate('ProfileOne')
    }
    const navigateVerification= ()=> {
        navigation.navigate('Verification')
    }
    const sideBar=()=>{
        navigation.openDrawer()
    }
    const navigateBids= ()=> {
        navigation.navigate('Detail');
        
    
    }

    return children({
        navigation,
        navigateCompleteProfileOne,
        navigateVerification,
        sideBar,
        navigateBids
    });
};

export default HomeServiceComponent;