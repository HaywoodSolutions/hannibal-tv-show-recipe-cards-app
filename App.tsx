import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';

type Recepie = {
  number: number
  title: string,
  ingredients: string[]
}

const recepies: Recepie[] = [
  {
    number: 127,
    title: "Chicken Liver Pate",
    ingredients: [
      "1/2 lb chicken livers",
      "1 small minced onion",
      "2 cloves minced garlic",
      "2 tbsp butter",
      "3 hard boiled eggs",
      "1 tbsp good brandy",
      "1/4 tsp ground cloves",
      "1/2 tsp ground mace",
      "1/2 tsp ground sage",
      "salt and pepper"
    ]
  }
];

type Props = {};
type State = {
  ready: boolean
};

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'hand': require('./assets/fonts/P22GrosvenorW00Regular.ttf'),
    }).then(() => {
      this.setState({
        ready: true
      })
    });
  }

  renderRecipiesList() {
    return recepies.map(v =>       
      <View style={styles.cardHeader}>
        <Text style={styles.smallHand}>{`No. ${v.number}  ${v.title}`}</Text>
      </View>
    );
  }

  render() {
    console.log(this.state.ready)
    return (
      <View style={styles.container}>
        {
          this.state.ready ? 
            this.renderRecipiesList()
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    flex: 1,
    backgroundColor: '#E7E4DF',
    alignItems: 'center'
  },
  cardHeader: {
    flex: 0,
    backgroundColor: '#E7E4DF',
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  },
  cardContents: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  hand: {
    fontFamily: 'hand',
    fontSize: 60,
    color: '#706050'
  },
  smallHand: {
    fontFamily: 'hand',
    fontSize: 50,
    color: '#706050'
  }
});
