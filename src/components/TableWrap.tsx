import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export interface TableWrapInterface {
  width?: string;
  children: JSX.Element[] | JSX.Element;
  scrollHorizontal?: boolean;
}

const TableWrap: React.FC<TableWrapInterface> = ({
  width = '100%',
  children,
  scrollHorizontal = false,
  
}: TableWrapInterface) => {

  if (scrollHorizontal) {
    return (
      <ScrollView
        horizontal={scrollHorizontal}
        contentContainerStyle={{...styles.container, width: width,}}
      >
       {children}
      </ScrollView>
    );
  }
  return (
    <View style={{...styles.container, width: width,}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    width: '100%',
    flexDirection: 'column',
  },
});

export default TableWrap;