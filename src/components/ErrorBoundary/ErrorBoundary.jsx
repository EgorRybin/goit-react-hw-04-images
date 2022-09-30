import PropTypes from 'prop-types';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error) {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return <>{!error ? children : <h1>error</h1>}</>;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
