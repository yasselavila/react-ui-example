import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, useCallback, useState } from 'react';
import { Question, QuestionOption } from '../../../../../../core/models';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    width: '100%'
  },
  item: {
    borderRadius: 5,
    margin: spacing(1, 0),
    padding: spacing(2.5, 4),
    fontSize: 16,
    backgroundColor: '#F2F3F4'
  },
  itemSelected: {
    backgroundColor: '#59636E !important',
    color: '#FFFFFF !important'
  }
}));

export interface MultipleChoiceQuestionProps {
  question: Question;
  onChange?: (value: QuestionOption) => void;
}

export function MultipleChoiceQuestion(props: MultipleChoiceQuestionProps): ReactElement {
  const classes = useStyles();
  const [selected, setSelected] = useState<number | null>(null);

  const handleChange = useCallback(
    (option: QuestionOption) => {
      props.onChange?.(option);
      setSelected(option.value);
    },
    [props.onChange]
  );

  return (
    <List className={classes.root} aria-label="contacts">
      {props.question.options?.map((option) => (
        <ListItem
          button
          key={option.value}
          className={clsx(classes.item, { [classes.itemSelected]: selected === option.value })}
          selected={selected === option.value}
          onClick={() => handleChange(option)}
        >
          <ListItemText primary={option.label} />
        </ListItem>
      ))}
    </List>
  );
}
