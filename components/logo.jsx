import React from 'react';
import PropTypes from 'prop-types';
import {alpha, Box} from '@mui/material';
// import Logo from '../../../../../assets/images/logo-circle.svg';
// import LogoText from '../../../../../assets/images/logo-full.svg';

const AppLogo = () => {

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        '& svg': {
          height: {xs: 50, sm: 50},
        },
      }}
      className='app-logo'
    >
      <img src='/assets/images/logo-circle.png' style={{height: '50px'}} />
    </Box>
  );
};

export default AppLogo;
AppLogo.propTypes = {
  color: PropTypes.string,
};
