import React, { ReactElement } from 'react';
import { Rating } from '../../../../../../core/components/rating/rating';

export interface ScaleQuestionProps {
  onChange?: (value: number) => void;
}

export function ScaleQuestion({ onChange }: ScaleQuestionProps): ReactElement {
  return <Rating onChange={onChange} />;
}
