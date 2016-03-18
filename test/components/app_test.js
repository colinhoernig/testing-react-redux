import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Group together similar tests
describe('App', () => {
  // What are we testing in the target?
  it('shows the correct text', () => {
    // Create an instance of App component
    const component = renderComponent(App);

    // What should we assert about the target?
    expect(component).to.contain('Testing In React');
  });
});
