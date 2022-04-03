// ES6 module syntax
import LocalizedStrings from "react-native-localization";

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
  "en-US": {
    home: "Home",
    settings: "Settings",
    // softBoiledEgg: "Soft-boiled egg",
    // choice: "How to choose the egg",
  },
  en: {
    home: "Home",
    settings: "Settings",
    // softBoiledEgg: "Soft-boiled egg",
    // choice: "How to choose the egg",
  },

  ar: {
    home: "الرئيسيه",
    settings: "الاعدادات",
    // softBoiledEgg: "Soft-boiled egg",
    // choice: "How to choose the egg",
  },

  //   it: {
  //     how: "Come vuoi il tuo uovo oggi?",
  //     boiledEgg: "Uovo sodo",
  //     softBoiledEgg: "Uovo alla coque",
  //     choice: "Come scegliere l'uovo",
  //   },
});

export default strings;
