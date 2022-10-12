const ProfileOneServiceComponent = ({
    children,
    navigation,
    launchCamera
}) => {
    console.log('Pakistan Zindabad')

    const navigateProfileTwo= ()=> {
        navigation.navigate('ProfileTwo')
    }
    const navigateToLogin= ()=>{
        navigation.navigate("Login")
    }
   

    return children({
        navigation,
        navigateProfileTwo,
        navigateToLogin,
      
    });
};

export default ProfileOneServiceComponent;