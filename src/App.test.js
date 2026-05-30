import { render } from '@testing-library/react';
import App from './App';

test('renders sidebar and main layout', () => {
  const { container } = render(<App />);
  const appLayout = container.firstChild;

  expect(appLayout).toHaveClass('flex', 'w-full');
  expect(container.querySelector('aside')).toBeInTheDocument();
  expect(container.querySelector('main')).toBeInTheDocument();
});
