import React,{useMemo} from "react";
import { useSelector } from "react-redux";


const CreatePostServiceComponent = ({
    children,
    navigation,
    route,
}) => {
    const postData = useSelector(state => state.post.getAllPostResponse);
    const postRequest = useSelector(state => state.post.getAllPostRequest);
    console.log('Pakistan Zindabad')

    return children({
        navigation,
        postData,
        postRequest
    });
};

export default CreatePostServiceComponent;
