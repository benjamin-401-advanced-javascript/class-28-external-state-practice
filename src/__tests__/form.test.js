import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../Components/form';

describe('<Form />', () => {
  it('is alive at application start', () => {
    const component = shallow(<Form />);
    expect(component.find('input').exists()).toBeTruthy();
    expect(component.find('form').exists()).toBeTruthy();
  });

  it('changes state on input change', () => {
    const component = mount(<Form />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'foo' } });
    expect(component.state().name).toBe('foo');
  });

  it('changes state on form update', () => {
    const handleFormUpdate = jest.fn();
    const component = mount(<Form handleFormUpdate={handleFormUpdate}/>);
    const form = component.find('form');
    const mockPreventDefault = jest.fn();
    form.simulate('submit', { preventDefault: mockPreventDefault });
    expect(handleFormUpdate.mock.calls.length).toBe(1);
    expect(mockPreventDefault.mock.calls.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
