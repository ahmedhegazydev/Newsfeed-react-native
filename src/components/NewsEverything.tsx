import React, { useState, useEffect, useRef } from "react";

import { StyleSheet, View } from "react-native";
import VerticalList from "./lists/VerticalList";
import { New } from "../data/New";
import SearchBar from "./SearchBar";

interface Props {
  data: New[];
}

export default function EverythingNews({ data }: Props) {
  const [searchValue, setSearchValue] = useState<New[] | null>([]);
  const dataRef = useRef<New[] | null>(null);

  const handleSearch = async (value: New[]) => {
    // console.log(value);
    if (value && value.length !== 0) {
      setSearchValue(value);
      // console.log("full");
    } else {
      setSearchValue(dataRef.current);
      // console.log("empty");
    }
  };

  useEffect(() => {
    dataRef.current = data;
    setSearchValue(dataRef.current);
  }, [data]);

  return (
    <>
      <View>
        <SearchBar onSearch={handleSearch} />
        <VerticalList title={"Search Results"} data={searchValue} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
