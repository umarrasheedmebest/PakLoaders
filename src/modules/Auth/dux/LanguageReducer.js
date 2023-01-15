import { CHANGE_LANGUAGE } from '../../../services/storage/ActionType';
const languageReducer=(state="ENG",action)=>{
    
    switch(action.type){
        case CHANGE_LANGUAGE:
            return console.log(action);
            
            default: 
            return state;
    }
}
export {languageReducer};