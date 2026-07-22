import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from './App';
import { MemoryRouter } from 'react-router';


// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<MemoryRouter><App /></MemoryRouter>);
//     expect(screen.getByRole("heading").textContent).toMatch(/app/i);
//   });
// });