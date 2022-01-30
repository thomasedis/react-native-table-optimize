import * as React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TableWrap, TableHead, TableBody } from 'react-native-table-optimize';

export default function App() {

    let dataSpacingTHead: Array<string> = [
        "20%",
        "20%",
        "20%",
        "20%",
        "20%",
    ]

    let dataTitleTHead: Array<string> = [
        "Cột 1",
        "Cột 2",
        "Cột 3",
        "Cột 4",
        "Cột 5",
    ]
    return (
        <ScrollView>
            <Text style={{textAlign: 'center', paddingVertical: 20}}>Table - Optimize</Text>
            <TableWrap scrollHorizontal={false}>
                <TableHead
                    dataSpacing={dataSpacingTHead}
                    dataTitleHead={dataTitleTHead}
                    itemStyle={{
                        backgroundColor: 'red',
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#999'
                    }}
                    titleTextStyle={{
                        textAlign: 'center',
                    }}
                />
                <TableBody
                    isScroll={true}
                    bodyHeight={100}
                    onRefreshTable={() => {
                        console.log('HELLOOO');
                        
                    }}
                >
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#999'}}>
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'red', height: 50, width: '20%',}} />
                        <View style={{backgroundColor: 'black', height: 50, width: '20%',}} />
                    </View>

                </TableBody>

            </TableWrap>
            <Text style={{textAlign: 'center', paddingVertical: 20}}>Table - Optimize</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
