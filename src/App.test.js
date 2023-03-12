import renderer from 'react-test-renderer';
import App from "./App";

test("renders learn react link", () => {
  window.ga = jest.fn()
  const tree = renderer
      .create(<App />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
