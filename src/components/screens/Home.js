/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Color';
import {stringsConvertor} from '../../utils/I18n';
import DataListHeader from '../organisms/DataListHeader';
import DataList from '../organisms/DataList';
import SearchBar from '../organisms/SearchBar';
import Header from '../organisms/Header';
const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    paddingLeft: 37,
    paddingRight: 38,
  },
  containerBox: {
    paddingLeft: 37,
    paddingRight: 38,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestOffer: true,
      popular: false,
      specialOffer: false,
    };
  }

  onPressBestOffer = () => {
    this.setState({popular: false, bestOffer: true});
  };

  onPressPopular = () => {
    this.setState({bestOffer: false, popular: true});
  };
  _renderHeaderView() {
    return (
      <View style={[styles.container]}>
        <Header
          headerName={stringsConvertor('homeScreen.headerText')}
          location={stringsConvertor('homeScreen.location')}
        />
        <SearchBar
          placeHolder={stringsConvertor('homeScreen.inputPlaceholder')}
        />
      </View>
    );
  }

  _renderDataHeaderView() {
    const {popular} = this.state;
    return (
      <View style={[styles.header]}>
        <DataListHeader
          name={stringsConvertor('homeScreen.menuHeaderText_1')}
          containerStyle={{
            borderBottomWidth: 2.5,
            borderBottomColor: popular ? 'white' : COLORS.orangeShade,
          }}
          onPress={this.onPressBestOffer}
        />
        <DataListHeader
          name={stringsConvertor('homeScreen.menuHeaderText_2')}
          onPress={this.onPressPopular}
          containerStyle={{
            borderBottomColor: popular ? COLORS.orangeShade : 'white',
            borderBottomWidth: 2.5,
          }}
        />
        <DataListHeader
          name={stringsConvertor('homeScreen.menuHeaderText_3')}
        />
      </View>
    );
  }

  _rednerDataItem(item, index) {
    return (
      <View style={{paddingTop: 18}}>
        <DataList
          packageValue={item.package}
          validity={item.validity}
          dataPack={item.dataPack}
          description={item.description}
          isPopular={this.state.popular}
        />
      </View>
    );
  }

  render() {
    console.log(this.props, this.state);
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {this._renderHeaderView()}
        <View style={[styles.containerBox]}>
          {this._renderDataHeaderView()}
          {this.props.dataList.map((item, index) => {
            return this._rednerDataItem(item, index);
          })}
        </View>
      </View>
    );
  }
}

export default Home;
