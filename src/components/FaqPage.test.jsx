import renderer from 'react-test-renderer';
import FaqPage from './FaqPage';

it('renders correctly', () => {
    const tree = renderer
        .create(<FaqPage />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

