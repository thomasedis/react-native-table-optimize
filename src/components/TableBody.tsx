import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
  RefreshControl,
} from 'react-native';

export interface TableBodyInterface {
  children: JSX.Element[] | JSX.Element;
  isScroll?: boolean;
  onRefreshTable?: () => void | false;
  bodyHeight?: number;
  bodyStyle?: StyleProp<ViewStyle>;
}

const TableBody: React.FC<TableBodyInterface> = ({
  children,
  isScroll = false,
  onRefreshTable,
  bodyHeight = 300,
  bodyStyle = {}
  
}: TableBodyInterface) => {

  const [refreshing, setRefreshing] = useState(false)
  if (isScroll) {
    return (
      <View style={{height: bodyHeight,}}>
        <ScrollView
          contentContainerStyle={bodyStyle}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshTable}
            />
          }
        >
        {children}
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={bodyStyle}>
      {children}
    </View>
  );
};

export default TableBody;