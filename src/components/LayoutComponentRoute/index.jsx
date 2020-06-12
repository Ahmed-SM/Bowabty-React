import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const LayoutComponentRoute = ({ layout: Layout, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

LayoutComponentRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default LayoutComponentRoute;
