import type { ReactNode } from 'react';

export type SectionId = 
  | 'intro' 
  | 'setup'
  | 'components'
  | 'props'
  | 'state'
  | 'hooks'
  | 'context'
  | 'routing';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  content?: ReactNode;
  category: 'getting_started' | 'basics' | 'advanced';
  icon: string;
  prev: SectionId | null;
  next: SectionId | null;
} 