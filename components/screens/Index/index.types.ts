import React from 'react';

export interface IAboutProperty {
  title: string;
  icon: React.ReactNode;
  content: string;
  addition?: string;
}

export interface IIndexPageInfo {
  age: string;
  location: string;
  avatar: string;
}
