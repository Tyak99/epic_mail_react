import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
