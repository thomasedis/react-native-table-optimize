# React Native Table Optimize 🇻🇳

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-table-optimize"><img src="https://badge.fury.io/js/react-native-table-optimize.svg" /></a>
  <a href="https://www.npmjs.com/package/react-native-table-optimize"><img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg" /></a>
  <a href="https://www.npmjs.com/package/react-native-table-optimize"><img src="https://img.shields.io/npm/dm/react-native-table-optimize.svg?colorB=orange" /></a>
  <a href="https://www.npmjs.com/package/react-native-table-optimize"><img src="https://travis-ci.org/wix/react-native-table-optimize.svg?branch=master" /></a>
</p>
Makes it easy to display data in tabular form and you can completely customize it flexibly.

The package is both **Android** and **iOS** compatible.

## Try it out

<kbd>
  <img height=600 src="https://github.com/thomasedis/react-native-table-optimize/blob/master/src/images/demo_android.gif?raw=true">
</kbd>

<kbd>
  <img height=600 src="https://github.com/thomasedis/react-native-table-optimize/blob/master/src/images/demo_ios.gif?raw=true">
</kbd>

<kbd />
Have a look at the [examples below](https://github.com/thomasedis/react-native-table-optimize/tree/master/example)! :-)

- [Installation](#installation)
- [Props](#props): [`TableWrap`](#tablewrap) [`TableHead`](#tablehead) [`TableBody`](#tablebody) [`TableRow`](#tablerow)
- [Examples](#examples)

## Installation

1.  _Install as dependency:_

```sh
// yarn
yarn add react-native-table-optimize

// or npm
npm i react-native-table-optimize
```

2.  _Add needed components:_

```javascript
import { TableWrap, TableHead, TableBody, TableRow } from 'react-native-table-optimize';
```
## Props

- [`TableWrap`](#tablewrap)
- [`TableHead`](#tablehead)
- [`TableBody`](#tablebody)
- [`TableRow`](#tablerow)

### `TableWrap`

| Prop              | Default |        Type        | Description                                                                                                                               |
| :---------------- | :-----: | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| children          |  -      | `React.ReactNode`  | Children. Should be of type `Section`                                                |
| width             | `100%`  |      `string`      | Length of percentage table with screen size                                          |
| scrollHorizontal  |  false  |       `bool`       |`Allow horizontal dragging of the table if the length of the board exceeds 100%`      |

### `TableHead`

| Prop                      |            Default            |          Type          | Description                                                         |
| :------------------------ | :---------------------------: | :--------------------: | ------------------------------------------------------------------- |
| titleTextStyle            |               -               |  `Text.propTypes.style`| These styles will be applied to the title text table.               |
| itemStyle                 |               -               |  `View.propTypes.style`| These styles will be applied to the box (row - col) in table.       | 
| dataTitleHead             |               -               |        `array`         | An array of text corresponding to each column heading               |
| dataSpacing               |               -               |        `array`         | A text array of percentage distances for each column                |

### `TableBody`

| Prop                              |            Default            |                   Type                    | Description                                                                                                                                                                         |
| :-------------------------------- | :---------------------------: | :---------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children          |  -      | `React.ReactNode`  | Children. Should contains the rows of the table            |
| isScroll          |  false      | `bool`  | Allow scrolling up and down and fix the table title            |
| bodyHeight        |  300      | `number`  | Table content height            |
| bodyStyle        |  _      | `View.propTypes.style`  | These styles will be applied to the content of table            |
| onRefreshTable        |  _      | `func`  | Listen to refresh table event           |

#### `TableRow`

| Prop                              |            Default            |                   Type                    | Description                                                                                                                                                                         |
| :-------------------------------- | :---------------------------: | :---------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width          |  `100%`      | `React.ReactNode`  | Length of percentage table with screen size               |
| textStyle        |  _      | `Text.propTypes.style`  | These styles will be applied to the row text table.            |
| itemStyle        |  _      | `View.propTypes.style`  | These styles will be applied to the item row table.            |
| dataRow        |  _      | `array`  | An array of text corresponding to each column row             |
| dataSpacing        |  _      | `array`  | A text array of percentage distances for each row             |
| onHandleItemRow        |  _      | `func`  | Listen to onPress event of item            |

## Examples

```javascript
...
import { TableWrap, TableHead, TableBody, TableRow } from 'react-native-table-optimize';
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
...
```
