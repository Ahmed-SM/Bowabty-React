import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContainerComponentRoute = ({ container: Container, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props  => (
        <Container>
          <Component {...props}/>
        </Container>
      )}
    />
  );
};

ContainerComponentRoute.propTypes = {
  component: PropTypes.any.isRequired,
  container: PropTypes.any.isRequired,
};

export default ContainerComponentRoute;
