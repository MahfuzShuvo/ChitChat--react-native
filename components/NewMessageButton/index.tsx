import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';


const NewMessageButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Contacts');
    }
    return (
        
            <View style={styles.container}>
                <TouchableOpacity onPress={ onPress }>
                    {/* <MaterialCommunityIcons name="message-processing" size={24} color="white" /> */}
                    <AntDesign name="message1" size={28} color="white" />
                </TouchableOpacity>
            </View>
        
    )
}

export default NewMessageButton;