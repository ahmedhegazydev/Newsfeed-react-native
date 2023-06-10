import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { TextInput as GestureTextInput } from "react-native-gesture-handler";
import newsApi from "../api/NewApi";
import { New } from "../data/New";
import SearchModal from "./common/SearchModal";
import { LocalizationContext } from "../util/LocalizationContext";
import { ThemeContext } from "react-native-elements";

let timeoutId: NodeJS.Timeout;

interface Props {
  onSearch: (searchResults: New[]) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const debounce = (callback: Function, alwaysCall: Function, ms: number) => {
    return (...args: any[]) => {
      alwaysCall(...args);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, ms);
    };
  };

  const setSearchTextAlways = (text: string) => {
    setQuery(text);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<New[] | null>([]);
  const [notFound, setNotFound] = useState<string>("");
  const { translate } = useContext(LocalizationContext);
  const { theme } = useContext(ThemeContext);

  const handleSearch = async (value: string) => {
    console.log("value  = " + query);
    const trimmedText = value.trim();
    setQuery(trimmedText);
    const articles = await newsApi.searchNews(value);
    onSearch(articles);
  };

  const debounceSearch = debounce(handleSearch, setSearchTextAlways, 600);

  return (
    <>
      <View style={[styles.containerlight, styles[`container${theme}`]]}>
        <TextInput
          value={query}
          placeholderTextColor="#000"
          style={styles.searchInput}
          placeholder={translate("search_here")}
          onChangeText={debounceSearch as any} // Workaround for TypeScript issue
          onFocus={() => {}}
          onBlur={() => {
            setQuery("");
          }}
        />
      </View>
      {/* <SearchModal visible={visible} data={data} notFound={notFound} /> */}
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
