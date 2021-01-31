import * as React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import moment from 'moment';
import styles from './style';

export type ChaMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChaMessageProps) => {
    const { message } = props;
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                    styles.messageBox,
                    {
                        backgroundColor: isMyMessage() ? '#ffcedb' : '#fff',
                        marginLeft: isMyMessage() ? 50 : 0,
                        marginRight: isMyMessage() ? 0 : 50
                    }
                ]}>
                { !isMyMessage() && <Text style={styles.userName}>{ message.user.name }</Text> }
                <Text style={styles.messages}>{ message.content }</Text>
                <Text style={styles.time}>{ moment(message.createdAt).fromNow() }</Text>
            </View>
        </View>
    )
}

export default ChatMessage;