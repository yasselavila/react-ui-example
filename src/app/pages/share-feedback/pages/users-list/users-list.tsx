import { Typography } from '@material-ui/core';
import React, { ReactElement, useCallback } from 'react';
import { ContentWrapper } from '../../../../core/components/content-wrapper/content-wrapper';
import { DataProjector } from '../../../../core/components/data-projector/data-projector';
import { UserList, UserListItem } from '../../../../core/components/user-list';
import { useApiQuestions } from '../../../../core/hooks/use-api-questions/use-api-questions';
import { useApiUsers } from '../../../../core/hooks/use-api-users/use-api-users';
import { UserAction } from '../../components/user-action/user-action';

export default function UsersList(): ReactElement {
  const users = useApiUsers();
  const questions = useApiQuestions();

  const refetch = useCallback(() => {
    users.refetch();
    questions.refetch();
  }, [users, questions]);

  return (
    <ContentWrapper noPadding header={<Typography variant="h4">Share Feedback</Typography>}>
      <DataProjector
        loading={users.loading || questions.loading}
        error={users.error || questions.error}
        onRetry={refetch}
      >
        {users.data && questions.data && (
          <UserList>
            {users.data?.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                actions={<UserAction user={user} questions={questions.data as any} />}
              />
            ))}
          </UserList>
        )}
      </DataProjector>
    </ContentWrapper>
  );
}
