
const ProfileTwoServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    const navigateToLogin= ()=>{
        navigation.navigate("Login")
    }
    
    return children({
        navigation,
       navigateToLogin,
      
    });
};

export default ProfileTwoServiceComponent;