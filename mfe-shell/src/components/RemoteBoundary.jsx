import React from "react";
import NotFound from "../pages/NotFound";

export default class RemoteBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }
    return this.props.children;
  }
}


