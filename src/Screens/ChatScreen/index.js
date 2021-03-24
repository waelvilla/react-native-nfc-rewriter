/*eslint-disable*/

import React, { useState, useCallback, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { ImageBackground,  Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

import { Appbar, Menu, IconButton } from 'react-native-paper';
import styles from './styles';

const IMG_BACKGROUND = require('../../../images/chat_bg3.jpg');

const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const [moreMenuVisible, setMoreMenuVisible] = useState(false);
  const {propmessage} = route?.params;
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'أهلا وسهلا محمد',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  useEffect(() => {
    if(propmessage && messages.length ==1) {
      setMessages(previousMessages => GiftedChat.append(previousMessages, propmessage))
    }

  }, [propmessage]);

  const openMenu = () => setMoreMenuVisible(true);
  
  const closeMenu = () => setMoreMenuVisible(false);

  const openReadingsScreen = () => navigation.navigate('Settings');

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderHeader = () => {
    const addReading = 'إضافة قراءة';
    const title = 'مثقفة السكري مها'
    return (
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={title}
          titleStyle={styles.textCenter}
        />
        <TouchableOpacity onPress={openReadingsScreen}>
        <Image source={require('../../../images/icons/sugar-blood-level.png')} style={{width: 30, height: 30, marginRight: 20}} />
        </TouchableOpacity>
        {/* <Menu
          visible={moreMenuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="delete" onPress={openMenu} />}>
          <Menu.Item onPress={openReadingsScreen} title={addReading} />
        </Menu> */}
      </Appbar.Header>
    );
  };

  return (
    <ImageBackground source={IMG_BACKGROUND} style={styles.background}>
      {renderHeader()}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderAvatar={null}
        user={{
          _id: 1,
        }}
      />
    </ImageBackground>
  )
}


export default Chat;
