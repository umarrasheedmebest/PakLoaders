const PackageServiceComponent = ({
    children,
    navigation,
}) => {
    console.log('Pakistan Zindabad')

    
    const sideBar=()=>{
        navigation.openDrawer()
    }

    return children({
        navigation,
       
    });
};

export default PackageServiceComponent;