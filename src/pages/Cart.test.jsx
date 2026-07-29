import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Cart from "./Cart";

const mockCartItems = [
    {
    id: 1,
    title: 'Test Product',
    price: 700,
    image: 'test.jpg',
    
}
]
const mockHandleRemove = vi.fn() 
const mockHandleIncrement = vi.fn()
const mockHandleDecrement = vi.fn()

const createDummyContext = (cartItems) => ({
    cartItems, 
    handleRemove: mockHandleRemove, 
    handleIncrement: mockHandleIncrement,
    handleDecrement: mockHandleDecrement,
})

const renderCart = (cartItems= mockCartItems) => {
    return render(
            <MemoryRouter initialEntries={['/cart']}>
                <Routes>
                    <Route element = {<Outlet context={createDummyContext(cartItems)}/>}>
                        <Route path="/cart" element={<Cart/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
}
describe("cart page tests", () => {
    it("check if correct title is shown when cart has products", () => {
        renderCart()
        const heading = screen.getByRole('heading', {level: 1})
        expect(heading).toHaveTextContent(/Shopping Cart/i)
    })
    
    it("check if correct title is shown when cart is empty", () => {
        renderCart([])
        const heading = screen.getByRole('heading', {level: 1})
        expect(heading).toHaveTextContent(/Your cart is empty/i)
    }) 
})