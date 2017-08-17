import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { fetchUserFromAPI } from '../actions';
import { Actions } from 'react-native-router-flux';

class RandomUser extends Component {
  render() {
    const { container, text, button, buttonText } = styles;
    const { user, isFetching } = this.props.user;

    return (
      <View style={container}>
        <Text style={text}>Redux App </Text>
        <TouchableHighlight style={button} onPress={() => this.props.getUser()}>
          <Text style={buttonText}> Fetch Data</Text>
        </TouchableHighlight>
        {isFetching && <Text>Loading </Text>}
        {user.length
          ? user.map((_user, index) => {
              return (
                <View key={index} style={{ padding: 4 }}>
                  <Text>
                    Gender: {_user.gender}
                  </Text>
                  <Text
                    onPress={() =>
                      Actions.showUser({ _user, user: { ..._user } })}
                  >
                    Name:
                    {`${_user.name.title} ${_user.name.first} ${_user.name
                      .last}`}
                  </Text>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}

// return (
//       <FlatList
//         enableEmptySections
//         data={this.props.data}
//         keyExtractor={item => item.uid}
//         renderItem={({ item }) => (
//           <ListItem
//             employeeName={item.name}
//             onPress={() => Actions.employeeEdit({ employee: item })} />
//         )}
//       />
// );

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#0b7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
});

const mapDispatchToProps = dispatch => {
  return { getUser: () => dispatch(fetchUserFromAPI()) };
};

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomUser);
