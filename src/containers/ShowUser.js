import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { fetchUserFromAPI } from '../actions';

class ShowUser extends Component {
  render() {
    const { imageStyle } = styles;
    return (
      <View>
        <Image
          style={imageStyle}
          source={{ uri: this.props.user.picture.large }}
        />

        <Text>
          First Name: {this.props.user.name.first} Last Name:{' '}
          {this.props.user.name.last}
        </Text>
        <Text>
          {this.props.user.location.city}, {this.props.user.location.state}
        </Text>
        <Text>
          {this.props.user.email}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(ShowUser);

const styles = {
  imageStyle: {
    width: 200,
    height: 200
  }
};
