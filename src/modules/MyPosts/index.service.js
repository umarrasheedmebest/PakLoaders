const PostServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
        navigation.navigate('Profile')
    }

    return children({
        navigation,
        sideBar
    });
};

export default PostServiceComponent;