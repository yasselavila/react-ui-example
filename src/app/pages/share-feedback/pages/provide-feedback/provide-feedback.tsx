import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../../../../core/components/content-wrapper/content-wrapper';
import { DataProjector } from '../../../../core/components/data-projector/data-projector';
import { useUserQuestions } from '../../../../core/hooks/use-user-questions/use-user-questions';
import { MultipleChoiceQuestion } from './components/multiple-choice-question/multiple-choice-question';
import { PageHeader } from './components/page-header/page-header';
import { ScaleQuestion } from './components/scale-question/scale-question';
import { TextQuestion } from './components/text-question/text-question';
import { ThankYou } from './components/thank-you/thank-you';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  buttonsContainer: {
    textAlign: 'right'
  },
  saveButton: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: spacing(4)
  }
}));

export default function ProvideFeedback(): ReactElement {
  const classes = useStyles();

  const { userId } = useParams<{ userId: string }>();
  const { pendingQuestion, saveQuestion, user, loading, error, refetch } = useUserQuestions(userId);

  const [state, setState] = useState<string | number | null>(null);

  const onChange = useCallback((value) => setState(value), [setState]);

  const save = useCallback(() => {
    saveQuestion(state as never);
    setState(null);
  }, [saveQuestion, state]);

  return (
    <ContentWrapper
      header={
        pendingQuestion &&
        user && <PageHeader title={pendingQuestion?.label as string} user={user} />
      }
    >
      <DataProjector loading={loading} error={error} onRetry={refetch}>
        {pendingQuestion && (
          <>
            {pendingQuestion.type === 'scale' && <ScaleQuestion onChange={onChange} />}

            {pendingQuestion.type === 'text' && <TextQuestion onChange={onChange} />}

            {pendingQuestion.type === 'multipleChoice' && (
              <MultipleChoiceQuestion question={pendingQuestion} onChange={onChange} />
            )}

            <div className={classes.buttonsContainer}>
              <Button
                variant="outlined"
                size="large"
                color="default"
                className={classes.saveButton}
                disabled={state === null}
                onClick={save}
              >
                Next
              </Button>
            </div>
          </>
        )}

        {!pendingQuestion && !loading && <ThankYou />}
      </DataProjector>
    </ContentWrapper>
  );
}
