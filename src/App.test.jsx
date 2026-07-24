import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from './App';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router';
import Shop from './pages/Shop';


describe("App component", () => {

  it("Check if loading text appears at the start of fetching data", () => {
    window.fetch = vi.fn(
      () => new Promise (() => {})
    )

    const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <App />,
        children: [
          { path: 'shop', element: <Shop /> },
        ],
      },
    ],
    { initialEntries: ['/shop'] }
  );

    render(<RouterProvider router={router} />);
    const loading = screen.getByText("Loading...")
    expect(loading).toBeInTheDocument()

  })

  it("fetches products correctly",async () => {

    const mockProducts = [
        {id:1, title: "Product1", price: 10, image: "test1.jpg"},
        {id:2, title: "Product2", price: 20, image: "test2.jpg"}
    ]

    window.fetch = vi.fn().mockResolvedValue(
        {
            ok: true,
            json: async () => mockProducts,
        }
    )

   const router = createMemoryRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: 'shop', element: <Shop /> },
      ],
    },
  ],
  { initialEntries: ['/shop'] }
);

render(<RouterProvider router={router} />);

    const product1 = await screen.findByText('Product1')
    expect(product1).toBeInTheDocument()
    const product2 = await screen.findByText('Product2')
    expect(product2).toBeInTheDocument()

  })
});