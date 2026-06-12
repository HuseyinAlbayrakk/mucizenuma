/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Feedback {
  id: string;
  client: string;
  type: string; // 'Bireysel' | 'Toplu'
  tag: string; // e.g. "Evlilik ve İlişki Dönüşümü", "EMDR ve Korku Seansı"
  text: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    score: string; // 'A' | 'B' | 'C'
  }[];
}

export interface SolutionItem {
  id: string;
  category: string; // e.g. "Ruhsal", "İlişki"
  title: string;
  icons?: string;
  items: string[];
}
