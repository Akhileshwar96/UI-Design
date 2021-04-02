import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS} from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 24,
  },
  TextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  textInputStyle: {
    flex: 1,
    paddingBottom: 5,
    fontFamily: 'NunitoSans-Regular',
  },
  image: {marginRight: 13},
});

export default class SearchBar extends Component {
  static propTypes = {
    placeHolder: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    placeHolder: '',
    onPress: () => {},
  };

  render() {
    const {
      containerStyle,
      textInputContainerStyle,
      textInputStyle,
      imageStyle,
      placeHolder,
    } = this.props;
    return (
      <View>
        <View style={[styles.container, containerStyle]}>
          <View style={[styles.TextInputContainer, textInputContainerStyle]}>
            <TextInput
              placeholder={placeHolder}
              style={[styles.textInputStyle, textInputStyle]}
            />
            <Image
              source={require('../../assets/images/search.png')}
              style={[styles.image, imageStyle]}
            />
          </View>
        </View>
      </View>
    );
  }
}
