import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HowItWorksServiceComponent = ({
    children,
    navigation,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([]);
    const isLoading = useSelector(state => state.auth.isLoading);


    useEffect(() => {
        setCarouselItems([
            {
                title: 'Get your luggage Insured',
                description: 'Luggage insurance is provided in case of loss or any damage of Luggage',
                source:
                    "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            },
            {
                title: 'Safe and fast service',
                description: 'On time trip service is being provided with complete safety of luggage',
                source:
                    "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            },

            {
                title: 'Easy to book a trip  ',
                description: 'Easy to book a trip anytime all over Pakistan.',
                source:
                    "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            },
        ]);
    }, [])

    const navigateToHome = () => {
        navigation.navigate('Login')
    }

    return children({
        navigation,
        navigateToHome,
        carouselItems,
        activeIndex,
        setActiveIndex
    });
};

export default HowItWorksServiceComponent;
