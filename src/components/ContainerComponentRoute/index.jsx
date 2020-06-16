import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContainerComponentRoute = ({ container: Container, component: Component, children, fallback:Fallback, ...rest }) => {
  console.log("%c ContainerComponentRoute rerendred ", "background:green; color: white;");
  return (
    <Route
      {...rest}
      render={props  => (
        <React.Suspense fallback={Fallback}>
          <Container>
            <Component {...props}/>
          </Container>
        </React.Suspense>
      )}
    />
  );
};

ContainerComponentRoute.propTypes = {
  component: PropTypes.any.isRequired,
  container: PropTypes.any.isRequired,
  fallback:PropTypes.any.isRequired
};

export default ContainerComponentRoute;
