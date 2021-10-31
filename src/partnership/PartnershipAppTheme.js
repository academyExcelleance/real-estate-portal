import * as React from 'react';
import PropTypes from 'prop-types';

export default function PartnershipAppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

PartnershipAppTheme.propTypes = {
  children: PropTypes.element.isRequired,
};
