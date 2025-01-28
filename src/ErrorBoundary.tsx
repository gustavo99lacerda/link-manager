import React from 'react';

interface Props {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  componentDidCatch(error: any, _info: any) {
    console.log(error)
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <></>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
