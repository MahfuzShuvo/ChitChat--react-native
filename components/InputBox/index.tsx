import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import  React, { useState } from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

const InputBox = () => {
    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone Pressed');
    }
    const onSendPress = () => {
        console.warn(`Sending: ${ message }`);

        // send the message to the backend
        
        setMessage('');
    }
    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={20} color="#a5a5a5" style={styles.icon}/>
                <TextInput 
                    style={styles.textInput} 
                    multiline
                    value={ message }
                    onChangeText={ setMessage }
                    placeholder={'Type a message'}
                />
                <Entypo name="attachment" size={20} color="#a5a5a5"  style={styles.icon}/>
                
                {
                    !message && <Fontisto name="camera" size={20} color="#a5a5a5"  style={styles.icon}/>
                }
            </View>
            <TouchableOpacity onPress={ onPress }>
                <View style={styles.btnContainer}>
                    {
                        !message
                            ? <MaterialCommunityIcons name="microphone" size={24} color="white" />
                            : <MaterialIcons name="send" size={24} color="white" />
                    }
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;