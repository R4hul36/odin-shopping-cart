import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Product from "./Product";
import { MemoryRouter, Outlet, Route, Routes } from "react-router";
import userEvent from "@testing-library/user-event";

const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 700,
    image: 'test.jpg',
    
}
const mockHandleCart = vi.fn()
const dummyContext = {
    handleCart: mockHandleCart
}

describe("Product tests", () => {
    it("check if all product info is present", () => {
        render(
            <MemoryRouter initialEntries={['/shop']}>
                <Routes>
                    <Route element = {<Outlet context={dummyContext}/>}>
                        <Route path="/shop" element={<Product productInfo = {mockProduct}/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        const productTitle = screen.getByText("Test Product")
        expect(productTitle).toBeInTheDocument()

        const productPrice = screen.getByText("$700")
        expect(productPrice).toBeInTheDocument()

    })
    it("check if handle cart is called correctly", async () => {
        render(
            <MemoryRouter initialEntries={['/shop']}>
                <Routes>
                    <Route element = {<Outlet context={dummyContext}/>}>
                        <Route path="/shop" element={<Product productInfo = {mockProduct}/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>
            
        )
        const addButton = screen.getByRole("button", {name: /add to cart/i})
        await userEvent.click(addButton)
        expect(addButton).toHaveBeenCalled
        const mockProductInfo = {...mockProduct, productCount: 0}
        expect(mockHandleCart).toHaveBeenCalledWith(mockProductInfo)
    })
})