import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../Components/message';

describe('<Message />', () => {
  it('is alive at application start', () => {
    const app = shallow(<Message />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Message />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
