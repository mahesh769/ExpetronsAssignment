import { StyleSheet, Dimensions } from "react-native"
import colors from './Colors';
const { height } = Dimensions.get('window')
import { DIMENS } from './constants';
import { FONT_FAMILY_BOLD, FONT_FAMILY_AUDIOWIDE, FONT_FAMILY_HEEBO_BOLD, FONT_FAMILY_HEEBO_REGULAR } from "./Typography";

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 50,
        color: colors.black,
    },
    imgBack: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        padding: 10
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'center'
    },
    topV: {

        backgroundColor: colors.white,
        alignItems: 'center'
    },
    bottomV: {
        flex: 1,
        // height: '100%',
    },
    logoBg: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoV: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        resizeMode: 'center'
    },
    txtInputBg: {
        marginHorizontal: 15,
        justifyContent: 'center',
        padding: 10
    },
    txtSign: {
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    fgtPass: {
        color: colors.BLUE_COLOR,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25
    },
    accountContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -25

    },
    container: {
        flex:1,
      },
    
      txtDefault: {
        color: '#000',
        fontFamily: 'Helvetica-Light',
        fontSize: 20
      },
    
      contRow: {
        flex: 1,
        flexDirection: 'row'
      },
    
      contButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ecf0f1'
      },
      txtExpression: {
        color: '#000',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
    
      txtResult: {
        color: '#27ae60',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
    
      historyCont: {
          flex: 1,
          flexDirection: 'column'
      },
    
      placeHolderHistory: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderTopWidth: 0.7,
        borderColor: '#000'
      },
    
      expressionCont: {
        flex: 0.7,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
      },
    
      resultCont: {
        flex: 0.3,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
      },
    
      emptyHistoryCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      txtEmptyHistory: {
        color: '#7f8c8d',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
      clearCont: {
        height: 40,
        alignItems: 'flex-end',
        paddingRight: 15,
        justifyContent: 'center'
      },
    
      txtClear: {
        color: '#2980b9',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
    
      txtExpression: {
        color: '#000',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
    
      txtResult: {
        color: '#27ae60',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
    
      historyCont: {
          flex: 1,
          flexDirection: 'column'
      },
    
      placeHolderHistory: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderTopWidth: 0.7,
        borderColor: '#000'
      },
    
      expressionCont: {
        flex: 0.7,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
      },
    
      resultCont: {
        flex: 0.3,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
      },
    
      emptyHistoryCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
      txtEmptyHistory: {
        color: '#7f8c8d',
        fontFamily: 'Helvetica-Light',
        fontSize: 15
      },
      contHistory:{
        flex: 0.35,
        borderBottomWidth: 1,
        borderColor: '#000',
      },
    
      contOutput:{
        flex: 0.25,
      },
    
      contButtons:{
        flex: 0.4,
        backgroundColor: '#bdc3c7'
      },
    
      placeHolderOutput: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15,
        paddingLeft: 15
      },
    
      txtDefault: {
        color: '#000',
        fontFamily: 'Helvetica-Light',
        fontSize: 30
      }

});

export const stylesForgot = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 50,
        color: colors.black,
    },
    bottomV: {
        flex: 1,
    },

});
export const stylesOTP = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 50,
        color: colors.black,
    },
    bottomV: {
        flex: 1,
    },
});

export const stylesRegister = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 50,
        color: colors.black,
    },
    imgBack: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        padding: 10
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'center'
    },
    topV: {

        backgroundColor: colors.white,
        alignItems: 'center'
    },
    bottomV: {
        flex: 1,
        // height: '100%',
    },
    logoBg: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoV: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        resizeMode: 'center'
    },
    txtInputBg: {
        marginHorizontal: 5,
        justifyContent: 'center',
        padding: 10
    },
    txtSign: {
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    fgtPass: {
        color: colors.BLUE_COLOR,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25
    },
    accountContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -25

    }

});

export const stylesHome = StyleSheet.create({

    dashCardView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 100,
        borderRadius: 5,
        marginHorizontal: 5,
        paddingHorizontal: 20,

    },
    bigTextStyle: {
        fontSize: 30,
        color: colors.ACCENT_COLOR,
        fontWeight: 'bold'
    },
    homeHeader: {
        fontSize: 16,
        color: colors.white,
        fontFamily: FONT_FAMILY_BOLD,
    },
    homeTopTabs: {
        fontSize: 14,
        color: colors.white,
        fontFamily: FONT_FAMILY_BOLD
    },
    homeHeader_2: {
        fontSize: 18,
        color: colors.white,
        fontFamily: FONT_FAMILY_BOLD

    },
    smallTextStyle: {
        color: colors.textColor,
        fontSize: 12
    },
    mediumTextStyle: {
        color: colors.white,
        fontSize: 12
    },
    homeRoundRow1: {
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: colors.STATUS_BAR_COLOR_TRANS,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },
    homeRoundRowFlag: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: colors.white
    },
    homeRoundRow2: {
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: colors.white,
        borderRadius: 2
    },
    homeRoundRow3: {
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: colors.BLUE_ACTIVE,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
    },
    imgBg: {
        flex: 1,

    },
    newsTextStyle1: {
        color: colors.white,
        fontSize: 14,
        fontFamily: FONT_FAMILY_HEEBO_REGULAR
    },
    newsTextStyle2: {
        color: colors.RED_DARK,
        fontSize: 12,
        fontFamily: FONT_FAMILY_HEEBO_REGULAR
    },
    newsTextStyle3: {
        color: colors.white,
        fontSize: 10,
        fontFamily: FONT_FAMILY_HEEBO_REGULAR
    },
    fixturesTopTabs: {
        fontSize: 9,
        color: colors.white,
        fontFamily: FONT_FAMILY_BOLD
    },

})


export const stylesMore = StyleSheet.create({

    cardView: {
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    moreHeader: {
        fontSize: 18,
        color: colors.white,
        fontFamily: FONT_FAMILY_BOLD
    },
    headingTextStyle: {
        color: colors.RED,
    },
    normalTextStyle: {
        color: colors.grey500,
    },
    imgBg: {
        flex: 1,
    },
})

export const stylesLogin = StyleSheet.create({
    button: {
        width: '100%',
        marginTop: 20,
        color: colors.headerColor1,
    },
    imgBack: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        padding: 10
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'center'
    },
    topV: {

        backgroundColor: colors.white,
        alignItems: 'center'
    },
    bottomV: {
        flex: 1,
        // height: '100%',
    },
    logoBg: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoV: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        resizeMode: 'center'
    },
    txtInputBg: {
        marginHorizontal: 15,
        justifyContent: 'center',
        padding: 10
    },
    txtSign: {
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    fgtPass: {
        color: colors.BLUE_COLOR,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25
    },
    accountContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -25

    }

});

export const stylesForgotPassword = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 50,
        color: colors.black,
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'center'
    },
    txtInputBg: {
        marginHorizontal: 5,
        justifyContent: 'center',
        padding: 10
    },

    bottomV: {
        flex: 1,
        // height: '100%',
    }

   

});




