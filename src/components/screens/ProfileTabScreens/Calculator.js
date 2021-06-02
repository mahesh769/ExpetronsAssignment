import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchAction } from '../../../actions/action'
import { DIMENS } from '../../../utility/constants';
import colors from '../../../utility/Colors';


import LinearGradient from 'react-native-linear-gradient';


import { styles } from '../../../utility/styles';
import NumberButtons from '../ProfileTabScreens/NumberButtons';
const initialOutput = '0';
const maxLength = 57;

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=', '-']
]

const Calculator = () => {

  const dispatch = useDispatch();
  const [, setSearchText] = useState('')

  const [_output, setOutput] = useState(initialOutput)
  const [] = useState('')
  const [_history, setHistory] = useState([])

  const [] = useState(undefined)
  const [] = useState(false)
  const [] = useState([])
  const [] = useState(0)


 



  function _handleEvent(value) {
    if (!isNaN(value) || value == '.') {
      _concatToOutput(value);
    }
    else {
      switch (value) {

        case buttons[0][0]:
          _initOutput();
          break;

        case buttons[0][1]:
          if (_output.length === 1) {
            _initOutput();
          }
          else {
            _replaceLastIndex('');
          }
          break;

        case buttons[4][2]:
          _evaluate();
          break;

        default:
          let strLastChar = _output.slice(-1);
          if (isNaN(strLastChar)) {
            _replaceLastIndex(value)
          }
          else {
            _concatToOutput(value);
          }
          break;
      }
    }
  }


  function _concatToOutput(value) {
    if (_output.length >= maxLength) {
      alert('Maximum Expression Length of ' + maxLength + ' is reached.');
    }
    else {
      if (_output !== initialOutput) {
        setOutput(_output + '' + value + '')

      }
      else {
        setOutput(value + '')

      }
    }
  }


  function _replaceLastIndex(value) {
    var str1 = _output.replace(/.$/, value)
    setOutput(str1)


  }

  function _evaluate() {
    try {
      let strCurOutput = _output;
      if (isNaN(strCurOutput)) {
        let dEval = eval(_convertToMathExpression(_output));

        let aHistory = [..._history, strCurOutput, dEval];
        console.warn("dEval==", dEval, "  aHistory==", aHistory);

        setOutput('' + dEval)
        setHistory(aHistory)

        dispatch(searchAction(dEval+""))

      }
    }
    catch (exception) {
      alert('Invalid format used.');
    }
  }


  function _convertToMathExpression(value) {
    let strTemp = value.replace(new RegExp(_escapeRegExp(buttons[1][3]), 'g'), '/');
    strTemp = strTemp.replace(new RegExp(_escapeRegExp(buttons[2][3]), 'g'), '*');
    return strTemp;
  }

  function _escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }


  function _initOutput() {
    setOutput(initialOutput)

  }







  return (

    <View style={{ padding: 0, flexDirection: 'column', flex: 1, paddingVertical: 0, justifyContent: 'flex-start' }}>

      {/* <CommonHeaderTitleWithButton title={"Gallery"}></CommonHeaderTitleWithButton> */}

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.headerColor1, colors.headerColor2,]}
        style={{
          flex: 1,
          maxHeight: 55,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: .95,
            alignSelf: 'center',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: colors.white,
            borderRadius: DIMENS.INPUT_FIELD_BORDER_RADIUS,
            height: DIMENS.searchInptH + 5,
            paddingHorizontal: 10
          }}
        >
         <Text style={styles.txtDefault}>{_output}</Text>
        </View>
     
      </LinearGradient >






      <View style={[styles.container]}>
        {/* <View style={styles.contHistory}>
          <HistoryView data={_history} onClear={_clearHistory}/>
        </View> */}
        <View style={styles.contOutput}>
          
        </View>
        <View style={styles.contButtons}>
          <NumberButtons onBtnPress={_handleEvent} buttons={buttons} />
        </View>
      </View>

    </View>



  );
}

export default Calculator;