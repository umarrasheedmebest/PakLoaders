
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
    const [images, setImages] = useState(null)
    const openCamara =async()=>{
        const options={
            storageOptions:{
                 path:'images',
            mediaType:'photo',
            },
           
      includeBase64:true,
        }
if (imageData.length<3) {
     await launchCamera(options,response=>{
          
            if (response.didCancel) {
                console.log('User Cancelled image picker');

            }else if(response.errorMessage){
                console.log(response.errorMessage)
            }else {
               
              

                setImages(formData);

                const source ={uri:'data:image/jpeg;base64,'+ response.assets[0].base64}
                // const source=786
                const formData = new FormData();
                const handleChange=async(sourc)=>{
                       const id= response.assets[0].fileName;
                       const srcImage=sourc;
                      const imgpk=  {
                         uri: srcImage,
                         type: 'png',
                         name: id || 'image.jpg',
                         fileName:'image'
                       }
                       setImages(imgpk)
                     
                        setImageData((item)=>[...item,{id,srcImage}])
                       
                        
                     console.log(id)
                     console.log(imageData)
                }
               handleChange(source)
            
            }
            
        })
}
else{
    "Image Not Slected"
}
      
        
    }

    return children({
        navigation,
        sideBar,
        openCamara,
        imageData,
        images
    });
};

export default PostServiceComponent;