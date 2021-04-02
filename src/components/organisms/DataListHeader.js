import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Color';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    borderBottomColor: COLORS.orangeShade,
    paddingBottom: 3,
  },
  textStyle: {
    fontSize: 12,
    color: COLORS.grayShade_2,
    fontFamily: 'NunitoSans-Regular',
    paddingRight: 5,
  },
});

export default class DataListHeader extends Component {
  static propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    onPress: () => {},
    containerStyle: styles.container,
    textStyle: styles.textStyle,
  };

  render() {
    const {name, containerStyle, textStyle, onPress} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={[styles.container, containerStyle]}
          onPress={onPress}>
          <Text style={[styles.textStyle, textStyle]}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
