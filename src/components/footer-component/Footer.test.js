import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('should render Footer component', () => {
    render(<Footer />)
    const linkElement = screen.getByText('@BuySpot All Rights Reserved')
    expect(linkElement).toBeInTheDocument()
})
