import React from 'react'
import { render, screen } from '@testing-library/react'
import { About } from './About'

test('should render About text ', () => {
    render(<About />)
    const textElement = screen.getByText('Welcome to Buy Spot!')
    expect(textElement).toBeInTheDocument()
})
