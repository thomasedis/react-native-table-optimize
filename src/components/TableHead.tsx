import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import * as THEME from './Theme';

export interface TableHeadInterface {
  width?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  dataTitleHead?: Array<string>;
  dataSpacing?: Array<string>;
}

const TableHead: React.FC<TableHeadInterface> = ({
  width = '100%',
  titleTextStyle = {},
  itemStyle = {},
  dataTitleHead = [],
  dataSpacing = [],
  
}: TableHeadInterface) => {

  return (
    <View style={{...styles.container, width: width,}}>
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
                    ...(titleTextStyle as object),
                  }}
                >
                  {
                    dataTitleHead[idx] ? dataTitleHead[idx] : ''
                  }
                </Text>
              </View>
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default TableHead;