import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';

import App from './App';

test('Test we are running', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /react/i });
  expect(heading).toBeInTheDocument();
  expect(heading).not.toHaveTextContent(/canis/i);
});
