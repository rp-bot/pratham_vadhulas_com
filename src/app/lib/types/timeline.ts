// types/timeline.ts
export type Category = 'education' | 'career';

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  institution: string;
  description: string;
  category: Category;
}
