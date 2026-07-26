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
const mockProductInfo = {...mockProduct, productCount: 1}
const dummyContext = {
    handleCart: mockHandleCart
}

const renderProducts = () => {
    return render(
            <MemoryRouter initialEntries={['/shop']}>
                <Routes>
                    <Route element = {<Outlet context={dummyContext}/>}>
                        <Route path="/shop" element={<Product productInfo = {mockProduct}/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
}

describe("Product tests", () => {
    it("check if all product info is present", () => {
        renderProducts()
        const productTitle = screen.getByText("Test Product")
        expect(productTitle).toBeInTheDocument()

        const productPrice = screen.getByText("$700")
        expect(productPrice).toBeInTheDocument()

    })
    it("check if handle cart is called correctly", async () => {
        renderProducts()
        const addButton = screen.getByRole("button", {name: /add to cart/i})
        await userEvent.click(addButton)
        expect(addButton).toHaveBeenCalled
        
        expect(mockHandleCart).toHaveBeenCalledWith(mockProductInfo)
    })

    it("Increment count test", async () => {
        const user = userEvent.setup()
        renderProducts()
        const incrementBtn = screen.getByRole('button', {name: "+"} )
        await user.click(incrementBtn)
        expect(screen.getByDisplayValue("2")).toBeInTheDocument()
    })

    it("Decrement count test", async () => {
        const user = userEvent.setup()
        renderProducts()
        const decrementBtn = screen.getByRole('button', {name: "-"} )
        await user.click(decrementBtn)
        expect(screen.getByDisplayValue("1")).toBeInTheDocument()
    })
})