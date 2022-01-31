import * as React from 'react';

import { StyleSheet, Alert, Text, ScrollView } from 'react-native';
import { TableWrap, TableHead, TableBody, TableRow } from 'react-native-table-optimize';

export default function App() {

    let dataSpacing: Array<string> = [
        "20%",
        "20%",
        "20%",
        "40%",
    ]

    let dataTitleTHead: Array<string> = [
        "Cell 1",
        "Cell 2",
        "Cell 3",
        "Cell 4",
        "Cell 5",
    ]

    let dataRow: Array<any> = [
        {
            id: 1,
            content1: 'Content Row-1 Cell-1',
            content2: 'Content Row-1 Cell-2',
            content3: 'Content Row-1 Cell-3',
            content4: 'Content Row-1 Cell-4',
            content5: 'Content Row-1 Cell-5',
        },
        {
            id: 2,
            content1: 'Content Row-2 Cell-1',
            content2: 'Content Row-2 Cell-2',
            content3: 'Content Row-2 Cell-3',
            content4: 'Content Row-2 Cell-4',
            content5: 'Content Row-2 Cell-5',
        },
        {
            id: 3,
            content1: 'Content Row-3 Cell-1',
            content2: 'Content Row-3 Cell-2',
            content3: 'Content Row-3 Cell-3',
            content4: 'Content Row-3 Cell-4',
            content5: 'Content Row-3 Cell-5',
        },
        {
            id: 4,
            content1: 'Content Row-4 Cell-1',
            content2: 'Content Row-4 Cell-2',
            content3: 'Content Row-4 Cell-3',
            content4: 'Content Row-4 Cell-4',
            content5: 'Content Row-4 Cell-5',
        },
        {
            id: 5,
            content1: 'Content Row-5 Cell-1',
            content2: 'Content Row-5 Cell-2',
            content3: 'Content Row-5 Cell-3',
            content4: 'Content Row-5 Cell-4',
            content5: 'Content Row-5 Cell-5',
        },
        {
            id: 6,
            content1: 'Content Row-6 Cell-1',
            content2: 'Content Row-6 Cell-2',
            content3: 'Content Row-6 Cell-3',
            content4: 'Content Row-6 Cell-4',
            content5: 'Content Row-6 Cell-5',
        },
        {
            id: 7,
            content1: 'Content Row-7 Cell-1',
            content2: 'Content Row-7 Cell-2',
            content3: 'Content Row-7 Cell-3',
            content4: 'Content Row-7 Cell-4',
            content5: 'Content Row-7 Cell-5',
        },
        {
            id: 8,
            content1: 'Content Row-8 Cell-1',
            content2: 'Content Row-8 Cell-2',
            content3: 'Content Row-8 Cell-3',
            content4: 'Content Row-8 Cell-4',
            content5: 'Content Row-8 Cell-5',
        },
        {
            id: 9,
            content1: 'Content Row-9 Cell-1',
            content2: 'Content Row-9 Cell-2',
            content3: 'Content Row-9 Cell-3',
            content4: 'Content Row-9 Cell-4',
            content5: 'Content Row-9 Cell-5',
        },
        {
            id: 10,
            content1: 'Content Row-10 Cell-1',
            content2: 'Content Row-10 Cell-2',
            content3: 'Content Row-10 Cell-3',
            content4: 'Content Row-10 Cell-4',
            content5: 'Content Row-10 Cell-5',
        },
    ]
    return (
        <ScrollView>
            <Text style={{textAlign: 'center', paddingVertical: 20}}>Table - Optimize</Text>
            <TableWrap scrollHorizontal={false}>
                <TableHead
                    dataSpacing={dataSpacing}
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
                    bodyHeight={250}
                    onRefreshTable={() => {
                        console.log('HELLOOO');
                        
                    }}
                >
                    {
                        dataRow.map((item, idx) => {
                            let itemRow = [
                                item.content1,
                                item.content2,
                                item.content3,
                                item.content4,
                                item.content5,
                            ]
                            return (
                                <TableRow 
                                    key={idx}
                                    width='100%' 
                                    keyDataRow='content'
                                    dataSpacing={dataSpacing}      
                                    dataRow={itemRow}    
                                    textStyle={{
                                        textAlign: 'center'
                                    }}
                                    itemStyle={{
                                        backgroundColor: 'black',
                                        padding: 10,
                                        borderWidth: 1,
                                        borderColor: '#999'
                                    }}         
                                    onHandleItemRow={() => Alert.alert('onHandleItemRow')}            
                                />
                            )
                        })
                    }
                    
                          
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
