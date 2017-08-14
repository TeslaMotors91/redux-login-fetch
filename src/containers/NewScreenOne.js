import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { fetchMoviesFromAPI } from '../actions';

class NewScreenOne extends Component {
  render() {
    const { container, text, button, buttonText } = styles;
    const { movies, isFetching } = this.props.movie;
    return (
      <View style={container}>
        <Text style={text}>Redux App </Text>
        <TouchableHighlight
          style={button}
          onPress={() => this.props.getMovie()}
        >
          <Text style={buttonText}> Fetch Data</Text>
        </TouchableHighlight>
        {isFetching && <Text>Loading </Text>}
        {movies.length
          ? movies.map((movie, index) => {
              return (
                <View key={index}>
                  <Text>
                    {' '}Title: {movie.title}{' '}
                  </Text>
                  <Text>
                    {' '}Release Year: {movie.releaseYear}{' '}
                  </Text>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}

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
  return { getMovie: () => dispatch(fetchMoviesFromAPI()) };
};

const mapStateToProps = state => {
  return { movie: state.movieReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewScreenOne);
