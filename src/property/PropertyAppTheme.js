import * as React from 'react';
import PropTypes from 'prop-types';

export default function PropertyAppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

PropertyAppTheme.propTypes = {
  children: PropTypes.element.isRequired,
};
