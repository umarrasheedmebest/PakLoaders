const PostServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
<<<<<<< HEAD
        navigation.navigate('Profile')
=======
        navigation.openDrawer()
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    }

    return children({
        navigation,
        sideBar
    });
};

export default PostServiceComponent;