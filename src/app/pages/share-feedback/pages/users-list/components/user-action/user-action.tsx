import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserQuestions } from '../../../../../../core/hooks/use-user-questions/use-user-questions';
import { User } from '../../../../../../core/models';

const useStyles = makeStyles({
  button: {
    minWidth: 174,
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 500
  }
});

export interface UserActionProps {
  user: User;
}

export function UserAction({ user }: UserActionProps): ReactElement {
  const classes = useStyles();
  const history = useHistory();
  const { pendingQuestion } = useUserQuestions(user);

  const handleClick = useCallback(
    () => history.push((pendingQuestion ? '/share-feedback/' : '/my-feedback/') + user.id),
    [pendingQuestion, history, user.id]
  );

  return (
    <Button
      variant={pendingQuestion ? 'contained' : 'outlined'}
      size="large"
      color={pendingQuestion ? 'primary' : 'default'}
      className={classes.button}
      onClick={handleClick}
    >
      {pendingQuestion ? 'Fill Out' : 'View Submission'}
    </Button>
  );
}
