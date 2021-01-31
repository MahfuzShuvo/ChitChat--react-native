import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create ({
    container: {
        padding: 10,
    },
    messageBox: {
        borderRadius: 10,
        padding: 10,
    },
    userName: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5
    },
    messages: {
    },
    time: {
        color: '#a5a5a5',
        fontSize: 12,
        alignSelf: 'flex-end',
    }
});

export default styles;