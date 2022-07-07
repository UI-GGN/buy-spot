import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'

export const SellerLogin = () => {
  return (
    <div>
      <h2>Seller Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="info" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}
