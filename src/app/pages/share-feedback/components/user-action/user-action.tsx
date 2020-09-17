import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserQuestions } from '../../../../core/hooks/use-user-questions/use-user-questions';
import { Question, User } from '../../../../core/models';

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
  questions: Question[];
}

export function UserAction({ user, questions }: UserActionProps): ReactElement {
  const classes = useStyles();
  const history = useHistory();
  const { stored } = useUserQuestions(user);
  const [hasPending, setHasPending] = useState(true);

  console.log({ stored });

  const handleClick = useCallback(
    () => history.push((hasPending ? '/share-feedback/' : '/share-feedback/') + user.id),
    [hasPending, history, user.id]
  );

  return (
    <Button
      variant={hasPending ? 'contained' : 'outlined'}
      size="large"
      color={hasPending ? 'primary' : 'default'}
      className={classes.button}
      onClick={handleClick}
    >
      {hasPending ? 'Fill Out' : 'View Submission'}
    </Button>
  );
}
