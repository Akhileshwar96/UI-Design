import React, {PureComponent} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.orangeShade,
    width: 73,
    height: 23,
    borderRadius: 11.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    fontSize: 12,
    fontFamily: 'NunitoSans-Regular',
    color: COLORS.orangeShade,
  },
});

export default class Button extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
    containerStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
  };

  static defaultProps = {
    name: '',
    onPress: () => {},
    containerStyle: styles.container,
    buttonStyle: styles.buttonStyle,
  };

  render() {
    const {name, containerStyle, buttonStyle, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={() => {
          onPress;
        }}>
        <Text style={[styles.buttonStyle, buttonStyle]}>{name}</Text>
      </TouchableOpacity>
    );
  }
}
