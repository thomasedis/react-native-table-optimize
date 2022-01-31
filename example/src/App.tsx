import * as React from 'react';

import { Alert, Text, ScrollView } from 'react-native';
import { TableWrap, TableHead, TableBody, TableRow } from 'react-native-table-optimize';
import * as THEME from './constants/Theme'

export default function App() {

    let dataSpacing: Array<string> = [
        "25%",
        "25%",
        "25%",
        "25%",
    ]

    let dataTitleTHead: Array<string> = [
        "Column 1",
        "Column 2",
        "Column 3",
        "Column 4",
        "Column 5",
    ]

    let dataRow: Array<any> = [
        {
            id: 1,
            content1: 'Row-1  Column-1',
            content2: 'Row-1  Column-2',
            content3: 'Row-1 Column-3',
            content4: 'Row-1 Column-4',
            content5: 'Row-1 Column-5',
        },
        {
            id: 2,
            content1: 'Row-2 Column-1',
            content2: 'Row-2 Column-2',
            content3: 'Row-2 Column-3',
            content4: 'Row-2 Column-4',
            content5: 'Row-2 Column-5',
        },
        {
            id: 3,
            content1: 'Row-3 Column-1',
            content2: 'Row-3 Column-2',
            content3: 'Row-3 Column-3',
            content4: 'Row-3 Column-4',
            content5: 'Row-3 Column-5',
        },
        {
            id: 4,
            content1: 'Row-4 Column-1',
            content2: 'Row-4 Column-2',
            content3: 'Row-4 Column-3',
            content4: 'Row-4 Column-4',
            content5: 'Row-4 Column-5',
        },
        {
            id: 5,
            content1: 'Row-5 Column-1',
            content2: 'Row-5 Column-2',
            content3: 'Row-5 Column-3',
            content4: 'Row-5 Column-4',
            content5: 'Row-5 Column-5',
        },
        {
            id: 6,
            content1: 'Row-6 Column-1',
            content2: 'Row-6 Column-2',
            content3: 'Row-6 Column-3',
            content4: 'Row-6 Column-4',
            content5: 'Row-6 Column-5',
        },
        {
            id: 7,
            content1: 'Row-7 Column-1',
            content2: 'Row-7 Column-2',
            content3: 'Row-7 Column-3',
            content4: 'Row-7 Column-4',
            content5: 'Row-7 Column-5',
        },
        {
            id: 8,
            content1: 'Row-8 Column-1',
            content2: 'Row-8 Column-2',
            content3: 'Row-8 Column-3',
            content4: 'Row-8 Column-4',
            content5: 'Row-8 Column-5',
        },
        {
            id: 9,
            content1: 'Row-9 Column-1',
            content2: 'Row-9 Column-2',
            content3: 'Row-9 Column-3',
            content4: 'Row-9 Column-4',
            content5: 'Row-9 Column-5',
        },
        {
            id: 10,
            content1: 'Row-10 Column-1',
            content2: 'Row-10 Column-2',
            content3: 'Row-10 Column-3',
            content4: 'Row-10 Column-4',
            content5: 'Row-10 Column-5',
        },
    ]

    return (
        <ScrollView>
            <Text style={{textAlign: 'center', paddingVertical: 30, marginTop: 30, fontWeight: '700', fontSize: 20}}>Table Native Table Optimize</Text>
            <TableWrap width='125%' scrollHorizontal={true}> 
                <TableHead
                    dataSpacing={dataSpacing}
                    dataTitleHead={dataTitleTHead}
                    itemStyle={{
                        backgroundColor: THEME.PRIMARY_COLOR_LIGHT,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: THEME.PRIMARY_COLOR_DARK,
                    }}
                    titleTextStyle={{
                        textAlign: 'center',
                        color: THEME.BLACK_COLOR,
                        fontWeight: '700'
                    }}
                />
                <TableBody
                    isScroll={true}
                    bodyHeight={465}
                    onRefreshTable={() => {
                        Alert.alert('On RefreshDataTable')
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
                                    dataSpacing={dataSpacing}      
                                    dataRow={itemRow}    
                                    textStyle={{
                                        textAlign: 'center',
                                        color: THEME.BLACK_COLOR
                                    }}
                                    itemStyle={{
                                        backgroundColor: THEME.WHITE_COLOR,
                                        padding: 10,
                                        borderWidth: 1,
                                        borderColor: THEME.PRIMARY_COLOR_LIGHT,
                                    }}         
                                    onHandleItemRow={() => Alert.alert('On Touch Row')}            
                                />
                            )
                        })
                    }
                </TableBody>
            </TableWrap>
        </ScrollView>
    );
}
