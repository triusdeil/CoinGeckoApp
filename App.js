import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
} from "react-native";
import CoinItem from "./components/CoinItem";
const App = () => {
  const [coins, setCoins] = useState([]);
  const loadData = async () => {
    const res = await fetch(process.env.REACT_APP_URL);
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#141414"} />
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Coin"
          placeholderTextColor="#fff"
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={coins}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

export default App;
