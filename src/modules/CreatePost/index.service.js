import React,{useMemo} from "react";
import { useSelector } from "react-redux";


const CreatePostServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const postData = useSelector(state => state.post.getAllPostResponse);
    console.log('Pakistan Zindabad')

    return children({
        navigation,
        postData
    });
};

export default CreatePostServiceComponent;
