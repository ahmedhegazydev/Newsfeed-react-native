import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import { useThemeContext, ThemeContext } from "../../util/ThemeManager";
import TestRenderer from "react-test-renderer";
import axios from "axios";
import newsApi from "../../api/NewApi";

let realUseContext: any;
let useContextMock: any;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

// test("renders a title", () => {
//   render(<Title children={<Text>ahmed</Text>} size={2} numberOfLines={2} />);
//   const linkElement = screen.getByText("ahmed");
//   expect(linkElement).toBeInTheDocument();
// });

// test("enzyme dive", () => {
//   const TestComponent = () => (
//     <ThemeContext.Provider value="light">
//       <Title />
//     </ThemeContext.Provider>
//   );
//   const element = shallow(<TestComponent />);
//   expect(element.find(Title).view().Title().text()).toBe("Provided Value");
// });

// describe("<Title />", () => {
// const wrapper = renderer.create(<Title children={"Test Title"} />);
// it("Should render", () => {
//   expect(wrapper.toJSON()).toBeTruthy();
// });
// test("it should mock the context", () => {
//   const contextValues = { theme: "light" };
//   jest
//     .spyOn(ThemeContext, "useThemeContext")
//     .mockImplementation(() => contextValues);
//   const wrapper = shallow(<Title />);
//   const h1 = wrapper.find("h1");
//   expect(h1.text()).toBe("Hello orange!");
// });
// });

jest.mock("axios");
it("returns the title of the first album", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Isabel Coles and Daniel Michaels",
        title:
          "Ukraine Calls for More Arms, Tougher Sanctions to Fend Off Russia in Donbas - The Wall Street Journal",
        description:
          "<ol><li>Ukraine Calls for More Arms, Tougher Sanctions to Fend Off Russia in Donbas  The Wall Street Journal\r\n</li><li>Ukraine calls for ‘weapons, weapons, weapons’ from western allies  The Guardian\r\n</li><li>Ukraine needs weapons, maximum sanctions on Russia…",
        url: "https://www.wsj.com/articles/ukraine-calls-for-tougher-sanctions-more-arms-to-fend-off-russia-in-donbas-11649326575",
        urlToImage: "https://images.wsj.net/im-520116/social",
        publishedAt: "2022-04-07T12:59:00Z",
        content:
          "Ukrainian officials called for tighter sanctions and more weapons to forestall a looming Russian offensive in the east of the country, as Moscow mobilizes troops there after pulling back in northern … [+200 chars]",
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Dasl Yoon",
        title:
          "Tensions With North Rise as SKorea President-Elect Signals Tougher Line...",
        description:
          "Yoon Suk-yeol, who takes office next month, promises to strengthen deterrence against Pyongyang’s nuclear and missile threats.",
        url: "https://www.wsj.com/articles/tensions-with-north-rise-as-south-koreas-president-elect-takes-tougher-line-11649333368",
        urlToImage: "https://images.wsj.net/im-520139/social",
        publishedAt: "2022-04-07T12:37:38Z",
        content:
          "SEOULSouth Koreas incoming president, who has promised to take a tougher stance on North Korea, hasnt taken office yet. The tone between Seoul and Pyongyang is already getting more adversarial.\r\nPres… [+269 chars]",
      },
    ],
  });

  const { data, error } = await newsApi.getAllNewsEverything();
  expect(error).toEqual("");
});
