import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {Button} from 'react-native-paper';

const ReadingsScreen = ({navigation, route}) => {
  const NUMBER = 95;
  //setup
  const [isNfcReady, setIsNfcReady] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    NfcManager.isSupported().then((isSupported) => {
      if (isSupported) {
        NfcManager.start();
        setIsNfcReady(true);
      } else {
        //TODO: warn the user to enable it?
      }
    });
  }, []);

  useEffect(() => {
    if (readingComplete) {
      setTimeout(() => {
        setCalculating(true);
        var interval;
        interval = setInterval(() => {
          setTimer(interval);
          setProgress((oldProgress) => oldProgress + 4);
        }, 100);
      }, 2000);
    }
  }, [readingComplete]);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(timer);
      setCalculating(false);
      setResult(NUMBER);
    }
  }, [progress]);

  const readTag = async () => {
    let tag = null;
    try {
      setIsReading(true);
      await NfcManager.requestTechnology([NfcTech.Ndef]);

      tag = await NfcManager.getTag();
      setIsReading(false);
      setReadingComplete(true);
    } catch (ex) {
      //err
      setReadingComplete(true);
      setIsReading(false);
    }

    NfcManager.cancelTechnologyRequest().catch(() => 0);
    return tag;
  };

  // console.log('isReading', isReading);
  // console.log('calculating', calculating);

  const renderResult = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Text style={[styles.readingTitle, {color: 'green'}]}>
            {' '}
            {'جيدة'}{' '}
          </Text>
          <Text style={[styles.readingTitle, {color: 'black'}]}>
            {' '}
            {'مستوى قراءتك'}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 80,
              textAlign: 'center',
              marginRight: 10,
            }}>
            {result}
          </Text>
          <Text style={{fontSize: 20}}>mg/dL</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            mode="contained"
            style={{width: 250, marginTop: 100, padding: 10, borderRadius: 10}}
            onPress={() => console.log('yoo')}>
            <Text style={{fontSize: 20}}>{'إرسال إلى المختص'}</Text>
          </Button>
        </View>
      </View>
    );
  };

  const renderCalculating = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 30, fontSize: 20}}>
          {'معدل السكري في الدم'}
          {'\nFreestyle Libre 2 CGM'}
        </Text>
        <View style={styles.circle}>
          <Text style={{fontSize: 60}}>{progress}%</Text>
        </View>
        <Text style={{marginTop: 30, fontSize: 20}}>{'جاري الحساب...'}</Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {readingComplete && calculating ? ( //readingComplete && calculating
        renderCalculating()
      ) : readingComplete && !calculating && result ? (
        renderResult()
      ) : (
        <View style={{alignItems: 'center', marginTop: 60}}>
          <Text style={styles.title}>
            {'قم بوضع الجوال على جهاز مراقبة السكر المستمر (CGM)'}
          </Text>
          {isNfcReady && !isReading ? (
            <TouchableOpacity style={styles.circle} onPress={() => readTag()}>
              <Text>{'انقر لبدأ القراءة'}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default ReadingsScreen;

const styles = StyleSheet.create({
  circle: {
    marginTop: 80,
    borderWidth: 1,
    borderRadius: 300,
    borderColor: '#ccc',
    backgroundColor: '#FFF2F2',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: "#000",
  // shadowOffset: {
  //   width: 100,
  //   height: 100,
  // },
  // // shadowOpacity: 0.20,
  // shadowRadius: 300,
  // elevation: 10,

  },
  title: {
    color: '#EF3D61',
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'SSTArabic-Light',
    marginHorizontal: 10,
  },
  readingTitle: {
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'SSTArabic-Light',
  }
});