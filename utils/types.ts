import { Dispatch, SetStateAction } from 'react';

export type TSetter<T> = Dispatch<SetStateAction<T>>;
