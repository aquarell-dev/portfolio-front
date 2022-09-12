import { TSetter } from '../../../utils/types';

export interface IProjectPreview {
  title: string;
  photo: string;
  description: string;
  tags: string[];
}

export interface IProject extends IProjectPreview {

}

export interface IProjectsSearch {
  value: string;
  setValue: TSetter<string>;
}
