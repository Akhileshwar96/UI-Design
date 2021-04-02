import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/Color';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyleHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 28,
    color: COLORS.orangeShade,
  },
  textValueStyle: {
    marginRight: 22,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 12,
    color: COLORS.grayShade,
  },
  buttonStyle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    borderWidth: 0,
    backgroundColor: COLORS.black,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  textStyle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: COLORS.grayShade,
  },
});

export default class Header extends Component {
  static propTypes = {
    headerName: PropTypes.string,
    location: PropTypes.string,
    textStyleHeader: PropTypes.object,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
  };

  static defaultProps = {
    headerName: '',
    location: '',
    textStyleHeader: styles.textStyleHeader,
    containerStyle: styles.container,
    textStyle: styles.textStyle,
  };

  render() {
    const {
      headerName,
      location,
      containerStyle,
      textStyleHeader,
      buttonContainerStyle,
    } = this.props;
    return (
      <View>
        <View style={[styles.container, containerStyle]}>
          <Text style={[styles.textStyleHeader, textStyleHeader]}>
            {headerName}
          </Text>
          <TouchableOpacity
            style={[styles.buttonContainer, buttonContainerStyle]}>
            <Text style={[styles.buttonStyle]}>x</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.textStyle]}>{location}</Text>
      </View>
    );
  }
}
