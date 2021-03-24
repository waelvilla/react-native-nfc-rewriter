import {Dimensions, StyleSheet} from 'react-native';
const {darkGray, primaryBlue, primaryPink, secondaryLightBlue, white} = {
  primaryBlue: '#042c42',
  primaryPink: '#ee3d60',
  white: '#FFFFFF',
  black: '#000000',
  secondaryBlue: '#51c7ea',
  secondaryDarkBlue: '#005792',
  secondaryLightBlue: '#d2edf4',
  secondaryYellow: '#fbbd33',
  darkGray: '#9AA9B4',
  lightGray: '#eeeeee',
};

const subtitleFont = () => {
  return {
    fontSize: 18,
    // fontfamily: 'SSTArabic-Medium',
  };
};

const regularTextFont = () => {
  return {
    fontSize: 14,
    // fontfamily: 'SSTArabic-Light',
  };
};

const boldTextFont = () => {
  return {
    fontSize: 14,
    // fontfamily: 'SSTArabic-Medium',
  };
};

const titleFont = () => {
  return {
    fontSize: 24,
    // fontfamily: 'SSTArabic-Medium',
  };
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  
  noAppointmentText: {
    // fontFamily: 'SSTArabic-Medium',
    fontSize: 20,
    color: '#042c42',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  imagePlaceholder: {
    height: 100,
    width: WIDTH * 0.5,
    resizeMode: 'contain'
  },
  bgWhite: {
    backgroundColor: white,
  },
  between: {
    justifyContent: 'space-between',
  },
  m_t_1: {
    marginTop: 10,
  },
  m_t_2: {
    marginTop: 20,
  },
  white: {
    color: white,
  },
  bgBlueShape: {
    backgroundColor: primaryBlue,
    height: HEIGHT / 3,
    width: WIDTH,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    height: 40,
    width: 80,
    resizeMode: 'contain',
  },
  title: {
    ...titleFont(),
    color: primaryBlue,
    lineHeight: 37,
  },

  main: {
    marginHorizontal: 20,
    display: 'flex',
    // flexGrow: 1,
  },
  card: {
    direction: 'rtl',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 10,
    },
    shadowOpacity: 0.085,
    shadowRadius: 6.27,
    elevation: 10,
  },
  educatorCard: {
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: secondaryLightBlue,
    alignItems: 'center',
    shadowColor: '#000000',
    paddingVertical: 10,
    borderRadius: 20,
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.095,
    shadowRadius: 6.27,
    elevation: 10,
  },
  educatorIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
  customBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  cardBodyText: {
    textAlign: 'center',
    ...boldTextFont(),
    color: primaryBlue,
    lineHeight: 22,
  },
  textContainer: {
    width: WIDTH * 0.7,
    display: 'flex',
    alignItems: 'flex-start',
  },
  educatorName: {
    ...subtitleFont(),
  },
  description: {
    ...regularTextFont(),
    textAlign: 'right',
    lineHeight: 20,
  },
  appointmentContainer: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: darkGray,
  },
  appointmentText: {
    ...boldTextFont(),
    textAlign: 'right',
    marginRight: 10,
  },
  appointmentBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: primaryBlue,
    borderLeftWidth: 1,
    flexGrow: 1,
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
  },
  subjectText: {
    ...regularTextFont(),
  },
  planCardBtn: {
    backgroundColor: primaryPink,
    marginHorizontal: 25,
    marginBottom: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  planCardBtnText: {
    textAlign: 'center',
    ...subtitleFont(),
    color: white,
    // lineHeight: 22,
  },
});

export default styles;
