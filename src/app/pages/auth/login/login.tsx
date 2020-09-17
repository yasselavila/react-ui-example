import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, useCallback } from 'react';
import { useAuth } from '../../../core/context/auth';

const useStyles = makeStyles({
  loginButton: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal'
  }
});

export default function Login(): ReactElement {
  const classes = useStyles();
  const { setUserInfo } = useAuth();

  const handleLogin = useCallback(() => {
    // TODO: Improve this. For now we can mock the user data
    setUserInfo({
      id: '495558b5-3503-4669-afb6-7339537323ff',
      firstName: 'Francesca',
      lastName: 'Douglas',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_vojto/128.jpg'
    });
  }, [setUserInfo]);

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={classes.loginButton}
      onClick={handleLogin}
    >
      Login with Google
    </Button>
  );
}
