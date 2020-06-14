import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContainerComponentRoute = ({ container: Container, component: Component, children, ...rest }) => {
  console.log("%c ContainerComponentRoute rerendred ", "background:green; color: white;");
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Container>
          <Component {...matchProps} children={children}/>
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
