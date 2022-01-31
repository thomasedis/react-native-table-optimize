import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';

import * as THEME from './Theme';

export interface TableRowInterface {
  width?: string;
  onHandleItemRow?: () => void | false;
  textStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  dataRow?: Array<any>;
  dataSpacing?: Array<string>;
}

const TableRow: React.FC<TableRowInterface> = ({
  width = '100%',
  onHandleItemRow,
  textStyle = {},
  itemStyle = {},
  dataRow = [],
  dataSpacing = [],
  
}: TableRowInterface) => {

  return (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={onHandleItemRow}
      style={{...styles.container, width: width,}}
    >
      {
        dataSpacing?.length != 0 && dataSpacing.map((itemWidth, idx) => {
          return (
              <View
                key={idx}
                style={{
                  width: itemWidth,
                  ...(itemStyle as object),
                }}
              >
                <Text
                  style={{
                    color: THEME.WHITE_COLOR,
                    ...(textStyle as object),
                  }}
                >
                  {
                    // _.get(dataRow[idx], [keyDataRow]) ?  _.get(dataRow[idx], [keyDataRow]) : ''
                    dataRow[idx] ? dataRow[idx] : ''
                  }
                </Text>
              </View>
          )
        })
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: THEME.GRAY_COLOR
  },
});

export default TableRow;