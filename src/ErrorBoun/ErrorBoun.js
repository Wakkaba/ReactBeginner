import React,{Component} from 'react'

class ErrorBoun extends Component{
    state = {
        hasErr: false,
        errorMessage: ''
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasErr: true, errorMessage: error});
    }

    render() {
        if (this.state.hasErr){
            return <h1>{this.state.errorMessage}</h1>
        } else{
            return this.props.children;
        }
    }
}
export default ErrorBoun;