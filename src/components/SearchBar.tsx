import React, { useState, useEffect, createRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { TextInput as GestureTextInput } from "react-native-gesture-handler";
import newsApi from "../api/NewApi";
import { New } from "../data/New";
import SearchModal from "./common/SearchModal";
import { LocalizationContext } from "../util/LocalizationContext";
import { ThemeContext } from "react-native-elements";

let timeoutId: NodeJS.Timeout;

const debounce = (func: Function, delay: number) => {
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<New[] | null>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<string>("");
  const { translate } = useContext(LocalizationContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = ({ nativeEvent }: { nativeEvent: any }) => {
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    debounceSearch(query);
    console.log(text);
    if (text === "") {
      setVisible(false);
    }
  };

  const handleSearch = async (value: string) => {
    const articles = await newsApi.searchNews(value);

    if (articles) {
      setData(articles);
      setNotFound("");
    } else {
      setNotFound("No articles match");
    }
  };

  const debounceSearch = debounce(handleSearch, 600);

  return (
    <>
      <View style={[styles.containerlight, styles[`container${theme}`]]}>
        <TextInput
          value={query}
          placeholderTextColor="#000"
          style={styles.searchInput}
          placeholder={translate("search_here")}
          onChange={handleChange}
          onFocus={() => {}}
          onBlur={() => {
            setVisible(false);
            setQuery("");
            setData([]);
            setNotFound("");
          }}
        />
      </View>
      <SearchModal visible={visible} data={data} notFound={notFound} />
    </>
  );
}

const styles = StyleSheet.create({
  containerlight: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    elevation: 3,
  },
  containerdark: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#282828",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    padding: 10,
    fontSize: 16,
  },
});
