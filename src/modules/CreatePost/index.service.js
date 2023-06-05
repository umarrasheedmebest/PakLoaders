<<<<<<< HEAD
import React,{useMemo} from "react";
import { useSelector } from "react-redux";

=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9

const CreatePostServiceComponent = ({
    children,
    navigation,
    route,
}) => {
<<<<<<< HEAD
    const postData = useSelector(state => state.post.getAllPostResponse);
=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    console.log('Pakistan Zindabad')

    return children({
        navigation,
<<<<<<< HEAD
        postData
=======
>>>>>>> b5bd23039389ef39bd49eed3aced5ef074a500d9
    });
};

export default CreatePostServiceComponent;
