import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
        // borderWidth: 2
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        // borderWidth: 2,
        margin: 0,
        padding: 0,
    },
    icon: {
        marginHorizontal: 5,
        // borderWidth: 2,
        marginVertical: 2
    },
    btnContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        // padding: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;