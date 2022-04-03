import React, { useState, useEffect, createRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SearchModel from "./common/SearchModel";
import newsApi from "../api/NewApi";

let timeoutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

export default function SearchBar({ setSearchFocused }) {
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  // const [searchFocused, setSearchFocused] = useState(false);

  const [notFound, setNotFound] = useState("");

  const handleChange = ({ nativeEvent }) => {
    console.log(nativeEvent);
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    // handleSearch(query);
    debounceSearch(query);
  };

  const handleSearch = async (value) => {
    // console.log(value);
    const articles = await newsApi.searchNews(value);
    // console.log(articles[0].author);
    // console.log("articles == " + articles);
    if (articles) {
      setData(articles);
      setNotFound("");
    } else {
      setNotFound("No articales matches ");
    }
  };

  const debounceSearch = debounce(handleSearch, 600);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          placeholderTextColor="#000"
          style={styles.searchInput}
          placeholder="Search here..."
          onChange={handleChange}
          onFocus={() => {
            // setSearchFocused(true);
          }}
          onBlur={() => {
            // setSearchFocused(false);
            setVisible(false);
            setQuery("");
            setData([]);
            setNotFound("");
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
      {/* <SearchModel visible={visible} data={[]} notFound={"No match found .."} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyConent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});
