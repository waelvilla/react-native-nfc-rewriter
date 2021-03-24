/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Home = ({navigation}) => {
  const patient = {
    name: 'محمد'
  }
  const [lang, setLang] = useState({
    ar: {
      greeting: 'مساء الخير',
      description1: 'بإمكانك التحدث مع المدرب في أي وقت',
      description2: 'سيقوم بالرد عليك باقرب وقت ممكن',
      description3: 'مثقف سكري معتمد',
      description4: 'أخصائي موثوق',
      chatText: 'المحادثة',
      bockAppointmentText: 'حجز موعد',
      myAppointments: 'مواعيدي',
      planIsReadyText: 'خطتك جاهزة',
      subjects: 'المواضيع:',
      showPlan: 'عرض الخطة',
      youHaveToPay: 'يجب عليك دفع رسوم الخطة قبل حجز موعد جديد',
      ok: 'حسناً',
      youHaveAppointment: 'لديك موعد قادم في تاريخ',
      noAppointmentText: 'لا يوجد لديك موعد',
      bookNewAppointmentText: 'اضغط هنا لحجز موعد جديد',
    },
  });

  useEffect(() => {
    // update greeting
    const now = new Date().getHours();
    if (parseInt(now) < 12) {
      setLang({
        ar: {
          ...lang.ar,
          greeting: 'صباح الخير',
        },
      });
    }
  }, []);


  const getEducatorNameByChatId = () => {
    return 'مثقفة  السكري مها';
  };

  const goToChat = (newChatId) => {
    if (newChatId) {
      navigation.navigate('ChatScreen', {
        chatId: newChatId,
        username: getEducatorNameByChatId(newChatId),
      });
    }
  };


  // renders

  const renderMyAppointments = () => {
    const {myAppointments, noAppointmentText, bookNewAppointmentText} = lang.ar;

    return (
      <View style={{flex: 1, flexGrow: 1,}}>
        <View style={[styles.appointmentContainer, styles.m_t_2]}>
          <Text style={[styles.appointmentText]}>{myAppointments}</Text>
        </View>

        <ScrollView 
        style={{flex: 1,}}>
          <View style={styles.container}>
            <Image
              style={styles.imagePlaceholder}
              source={require('../../../images/icons/home-office.png')}
            />
            <Text style={styles.noAppointmentText}>
              {noAppointmentText}
            </Text>
            <Text
              onPress={() => bookAppointments(educatorDefaultId)}
              style={styles.noAppointmentText}>
              {' '}
              {bookNewAppointmentText}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  };


  const renderEducatorCard = ({item, index}) => {
    const chatId = item?.id;
    const educatorName = item?.specialty+ ' ' + item?.firstName;
    let image = require('../../../images/icons/educatorBlue.png');
    if (index % 2 === 0) {
      image = require('../../../images/icons/educatorPink.png');
    }
    return (
      <View key={chatId} style={[styles.card, styles.educatorCard]}>
        <View style={[styles.cardHeader, {flex: 1}]}>
          <Image source={image} style={styles.educatorIcon} />
          <View style={styles.textContainer}>
            <Text style={[styles.educatorName]}>{educatorName}</Text>
            <Text style={[styles.description]}>{lang.ar.description4}</Text>
            {/* <Text style={[styles.description]}>{lang.ar.description2}</Text> */}
          </View>
        </View>
        <View style={[styles.cardBody]}>
          <TouchableOpacity
            onPress={() => {
              goToChat(chatId);
            }}
            style={[styles.customBtn, {flexGrow: 1}]}>
            <Image
              source={require('../../../images/icons/chatIcon.png')}
              style={styles.actionIcon}
            />
            <Text style={[styles.cardBodyText]}>{lang.ar.chatText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.appointmentBtn}>
            <Image
              source={require('../../../images/icons/appointmentIcon.png')}
              style={styles.actionIcon}
            />
            <Text style={[styles.cardBodyText]}>
              {lang.ar.bockAppointmentText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHead = () => {
    return (
      <View>
        <Text style={[styles.description, ]}>{lang.ar.description1}</Text>
        <Text style={[styles.description, ]}>{lang.ar.description2}</Text>
      </View>
    );
  };
  const renderEducatorCards = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          // onScroll={e => onScrollFlatList(e.nativeEvent)}
          data={[{id: '1234', firstName: 'مها', specialty: 'مثقفة السكري', educatorId: 'abc-123'}]}
          renderItem={renderEducatorCard}
          ListHeaderComponent={renderHead}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderFooter}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return renderMyAppointments();
  };

  const renderDefaultEducatorCard = () => {
    return (
      <View style={styles.card}>
        <View style={[styles.cardHeader]}>
          <Ionicons name="person-circle-sharp" size={80} color="#042D43" />
          <Text style={[styles.title]}>{'المتقف الصحي'}</Text>
        </View>
        <View style={[styles.cardBody]}>
          <Text style={[styles.cardBodyText]}>{''}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.flexOne, styles.bgWhite]}>
      {/* Header View */}
      {/* <View  style={styles.bgBlueShape}/> */}
      <View style={[styles.headerContainer]}>
        <Image
          source={require('../../../images/logo-dark-notext.png')}
          style={styles.logo}
        />
        <Text style={[styles.title, styles.m_t_2, ]}>{lang.ar.greeting}</Text>
        <Text style={[styles.title, ]}>{patient.name}</Text>
      </View>

      {/* Educator cards */}
      <View style={[styles.main, {flex: 1,}]}>
        {renderEducatorCards()}
        {/* {!isEmpty(chats) ? renderEducatorCards() : renderDefaultEducatorCard()} */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
