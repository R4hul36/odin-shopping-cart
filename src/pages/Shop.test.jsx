import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from './Shop';
import { MemoryRouter, Outlet, Route, Routes} from 'react-router';

const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 700,
    image: 'test.jpg',
}
const dummyContext = {
    shopData: [mockProduct],
    loading: false,
    error: '',
    handleAddToCart: vi.fn()
}

describe('shop tests', () => {
    it("check if heading is shown", () => {
        render(
            <MemoryRouter initialEntries={['/shop']}>
                <Routes>
                    <Route element = {<Outlet context={dummyContext}/>}>
                        <Route path="/shop" element={<Shop />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        const heading = screen.getByRole('heading', {level: 1})
        expect(heading).toHaveTextContent('Products')
    })
})