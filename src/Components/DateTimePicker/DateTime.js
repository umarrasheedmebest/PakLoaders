import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform,View } from 'react-native';
const DateTime = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');
    const onChange=(event,selectedDate)=>{
        const currentDate=selectedDate||date;
        setShow(Platform.OS==='ios');
        setDate(currentDate);
        let tempDate= new Date(currentDate);
        let fDate=tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
        setText(fDate);
        console.log(fDate);
    }
    const showMode=(currentDate)=>{
        setShow(true);
        setMode(currentDate);
    }
  return (
   show &&(<DateTimePicker
   testID='dateTimePicker'
   value={date}
   mode={mode}
   is24Hour={true}
   display='default'
   onChange={onChange}
   />)
  )
}

export default DateTime