// import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
// Show an error toast
export const showErrorToast = (message: string): void => {
  // ToastAndroid.showWithGravityAndOffset(
  //   message,
  //   ToastAndroid.LONG,
  //   ToastAndroid.BOTTOM,
  //   25,
  //   50
  // );
  Toast.show({
    type: "error",
    text1: "Error:",
    text2: message,
  });
};
