import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export interface TableWrapInterface {
  children: JSX.Element[] | JSX.Element;
  scrollHorizontal?: boolean;
}

const TableWrap: React.FC<TableWrapInterface> = ({
  children,
  scrollHorizontal = false,
  
}: TableWrapInterface) => {

  if (scrollHorizontal) {
    return (
      <ScrollView
        horizontal={scrollHorizontal}
        contentContainerStyle={styles.container}
      >
       {children}
      </ScrollView>
    );
  }
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
});

export default TableWrap;