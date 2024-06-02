import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

function sum(a,b){
  return a+b
}
test('sum function',()=>{
  const result = sum(3,4)
  expect(result).toBe(7)
})