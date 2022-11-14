import React,{useState} from "react";
import allData from "../../Components/Api/Home";
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
    const [data, setData] = useState(allData)
    return children({
        navigation,
        navigateCompleteProfileOne,
        navigateVerification,
        sideBar,
        navigateBids,
        data,
        setData
    });
};

export default HomeServiceComponent;