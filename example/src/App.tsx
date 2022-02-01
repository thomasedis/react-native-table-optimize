import * as React from 'react';

import { Alert, Text, ScrollView } from 'react-native';
import { TableWrap, TableHead, TableBody, TableRow } from 'react-native-table-optimize';
import * as THEME from './constants/Theme'
import {dataSpacing, dataTitleTHead, dataRow} from './data'
export default function App() {

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
