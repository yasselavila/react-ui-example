import { makeStyles, Theme } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React, { ReactElement, useCallback } from 'react';

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    flexGrow: 1
  },
  textarea: {
    borderColor: palette.divider,
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: 120,
    maxHeight: 400
  }
}));

export interface TextQuestionProps {
  onChange?: (value: number) => void;
}

export function TextQuestion({ onChange }: TextQuestionProps): ReactElement {
  const classes = useStyles();

  const handleChange = useCallback((e) => onChange?.(e.target.value), [onChange]);

  return (
    <div className={classes.root}>
      <TextareaAutosize
        className={classes.textarea}
        placeholder="Say something"
        onChange={handleChange}
      />
    </div>
  );
}
