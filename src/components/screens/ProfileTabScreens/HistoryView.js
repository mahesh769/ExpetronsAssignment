
import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { styles } from '../../../utility/styles';




export default class HistoryView extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)){
            return true;
        }
        return false
    }

    _onClear = () => {
        this.props.onClear();
    }

    render() {
        console.warn("this.props.data===",this.props.data);
        
       
        let bEmpty = false;
        if (this.props.data.length===0){
            bEmpty = true;
        }

        return (
            <View style={styles.container}>
                <View style={styles.clearCont}>
                    <Text
                        onPress={() => this._onClear()}
                        style={styles.txtClear}>
                        CLEAR HISTORY
                    </Text>
                </View>
                { !bEmpty ?
                    <ScrollView
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{        
                            this.scrollView.scrollToEnd({animated: true});
                        }}>


                        {
                            this.props.data&& this.props.data.map((history, index) => (
                                <View key={index} style={styles.historyCont}>
                                    <View style={styles.placeHolderHistory}>
                                        <View style={styles.expressionCont}>
                                            <Text style={styles.txtExpression}>{history[0]}</Text>
                                        </View>
                                       {history[1]&& <View style={styles.resultCont}>
                                            <Text style={styles.txtResult}>{'='+history[1]}</Text>
                                        </View>}
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                    : 
                    <View style={styles.emptyHistoryCont}>
                        <Text style={styles.txtEmptyHistory}>NO HISTORY</Text>
                    </View>
                }
            </View>
            );
    }
}