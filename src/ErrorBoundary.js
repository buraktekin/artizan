import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false,  id: 1 }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch( error, info ) {
    console.error( "ErrorBoundary caught an error.", error, info)
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      throw Error('An error occured')
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <a href="/">Click Here</a> to 
          go back to the home page.
        </h1>
      )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary