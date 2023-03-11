import renderer from 'react-test-renderer';
import App from "./App";
import FaqPage from "./components/FaqPage";

test("renders learn react link", () => {
  window.ga = jest.fn()
  const tree = renderer
      .create(<App />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
