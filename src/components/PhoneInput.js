import { TextInputMask } from "react-native-masked-text"

export const PhoneInput = (props) => {


    return <TextInputMask
    type={'cel-phone'}
    options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
    }}
    onChangeText={(text, rawText) => {
        props.onChangeState(text);
    }}
    
    style={props.style}
    value={props.value}
    placeholder="(99) 99999-9999"
    />
} 