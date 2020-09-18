import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import { Rating } from '../../../../../../core/components/rating/rating';
import { StoredQuestionData } from '../../../../../../core/hooks/use-stored-questions/use-stored-questions';
import { User } from '../../../../../../core/models';

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  alItem: {
    borderBottom: `1px solid ${palette.divider}`
  },
  answerText: {
    paddingTop: spacing(2)
  }
}));

export interface AnswersProps {
  user: User;
  data: StoredQuestionData[];
}

export function Answers({ user, data }: AnswersProps): ReactElement {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.alItem}>
        <ListItemText
          primary={
            <Typography variant="h5" color="textPrimary">
              {`${user.firstName} ${user.lastName}`}'s Feedback
            </Typography>
          }
        />
      </ListItem>

      {data.map(({ question, answer }) => (
        <ListItem key={question.id} className={classes.alItem}>
          {question.type === 'scale' && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">{question.label}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Rating readOnly value={answer as number} />
              </Grid>
            </Grid>
          )}

          {question.type === 'text' && (
            <ListItemText
              primary={question.label}
              secondary={
                <Typography variant="body2" color="textPrimary" className={classes.answerText}>
                  {answer}
                </Typography>
              }
            />
          )}

          {question.type === 'multipleChoice' && (
            <ListItemText
              primary={question.label}
              secondary={
                <Typography variant="body2" color="textPrimary" className={classes.answerText}>
                  {(answer as any).label}
                </Typography>
              }
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
