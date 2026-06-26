import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';

describe('Navbar tests', () => {
    it("checks if all navlinks renders properly", ()=> {
        render(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
        )
        const homeLink = screen.getByRole("link", {name: /home/i})
       
        const shopLink = screen.getByRole("link", {name: /shop/i})
        
        const cartLink = screen.getByRole("link", {name: /cart/i})
        
        expect(homeLink).toBeInTheDocument()
        expect(shopLink).toBeInTheDocument()
        expect(cartLink).toBeInTheDocument()
    })
})