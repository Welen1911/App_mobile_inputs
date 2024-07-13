// import { StyleSheet, TextInput } from "react-native-web";

import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const AppInput = (props) => {
  console.log(props.type);

  const type = props.type;

  if (props.mask) {
    const [numero, setNumero] = useState("(84) 94002-8922");

    const onChangeHandler = (e) => {

        // if (e.length == 1) setNumero('(' + e);  
        // else if (e.length == 3) setNumero(e + ') '); 
        // else if (e.length == 10) setNumero(e + '-');
        // else setNumero(e); 
        
        if (e.length == 2) {
            setNumero(`(${e}) `);
        } else if (e.length == 10 && e.keyPress != 'delete') {
            setNumero(`${e}-`);
        } else setNumero(e); 

        // setNumero(numero.map((num, index) => {
        //     if (index == 0) {
        //         return '(';
        //     } else if (index == 3) {
        //         return ')';
        //     } else if (index == 4) {
        //         return ' ';
        //     } else if (index == 10) {
        //         return '-';
        //     }

        //     return num + e;
        // })); 
    }

    return <TextInput inputMode={type} style={styles.input} value={numero} onChangeText={onChangeHandler} />;
  }

  return <TextInput inputMode={type} style={styles.input} />;
};

AppInput.defaultProps = {
  mask: false,
  type: "text",
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
  },
});
