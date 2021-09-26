import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error,info) {
        this.setState({hasError : true})
    }

    
}

export default ErrorBoundary;
