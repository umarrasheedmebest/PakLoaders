
import React,{useState} from "react";
import { launchCamera,launchImageLibrary } from "react-native-image-picker";
const PostServiceComponent = ({
    children,
    navigation,
}) => {
    const [imageData, setImageData] = useState([])
    console.log('Pakistan Zindabad');
    const sideBar=()=>{
        navigation.navigate('Profile')
    }
    const openCamara =async()=>{
        const options={
            storageOptions:{
                 path:'images',
            mediaType:'photo',
            },
           
      includeBase64:true,
        }

       await launchCamera(options,response=>{
          
            if (response.didCancel) {
                console.log('User Cancelled image picker');

            }else if(response.errorMessage){
                console.log(response.errorMessage)
            }else {
                const source ={uri:'data:image/jpeg;base64,'+ response.assets[0].base64}
                // const source=786
                const handleChange=async(sourc)=>{
                       const id= response.assets[0].fileName;
                       const srcImage=sourc
                        setImageData((item)=>[...item,{id,srcImage}])
                     console.log(id)
                     console.log(imageData)
                }
               handleChange(source)
            
            }
            
        })
        
    }

    return children({
        navigation,
        sideBar,
        openCamara,
        imageData
    });
};

export default PostServiceComponent;