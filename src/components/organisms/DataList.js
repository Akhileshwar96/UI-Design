/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Color';
import PropTypes from 'prop-types';
import Button from '../molecules/Button';
import {stringsConvertor} from '../../utils/I18n';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayShade_1,
    paddingBottom: 7.5,
  },
  textStyleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textValueStyle: {
    marginRight: 22,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 12,
    color: COLORS.grayShade,
  },
  textStyle: {
    marginRight: 22,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
    color: COLORS.grayShade,
    marginTop: 8,
    lineHeight: 18,
  },
});

export default class dataList extends Component {
  static propTypes = {
    dataPack: PropTypes.string,
    packageValue: PropTypes.string,
    validity: PropTypes.string,
    onPress: PropTypes.func,
    isPopular: PropTypes.bool,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    packageValue: '',
    validity: '',
    dataPack: '',
    containerStyle: styles.container,
    textStyle: styles.textStyle,
    isPopular: false,
  };

  render() {
    const {
      validity,
      containerStyle,
      dataPack,
      description,
      packageValue,
      isPopular,
    } = this.props;
    console.log('insinses pirpei', this.props);
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.textStyleHeader]}>
          <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 18}}>
            ₹{packageValue}
          </Text>
          <Button name={stringsConvertor('homeScreen.button')} />
        </View>
        <View style={{marginTop: 8, flexDirection: 'row'}}>
          <Text style={[styles.textValueStyle]}>
            {stringsConvertor('homeScreen.validity')} {`${validity} Days`}
          </Text>
          {isPopular ? (
            <Text style={[styles.textValueStyle]}>
              {stringsConvertor('homeScreen.data')} {dataPack}
            </Text>
          ) : null}
        </View>
        <Text style={[styles.textStyle]}>{description}</Text>
      </View>
    );
  }
}
