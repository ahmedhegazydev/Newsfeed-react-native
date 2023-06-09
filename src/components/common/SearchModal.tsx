import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import { useNavigation, StackNavigationProp } from "@react-navigation/native";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";

const { height } = Dimensions.get("window");

interface Props {
  visible: boolean;
  data: any[];
  notFound: string;
}

const SearchModal = ({ visible, data, notFound }: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  if (!visible) return null;
  if (visible && data.length === 0 && !notFound) return null;
  if (notFound)
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {notFound}
        </Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      >
        {data.map((item) => (
          <FlatCard
            onPress={() => {
              navigation.push(MORE_DETAILS_NEWS_NAME, { item });
            }}
            item={item}
            key={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    top: 15,
    backgroundColor: "white",
    maxHeight: height / 2,
    zIndex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
  },
});
