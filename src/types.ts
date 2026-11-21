export type CodeLanguage = 'html' | 'css' | 'javascript';

export interface CodeTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  html: string;
  css: string;
  js: string;
}

export interface ConsoleLogMessage {
  id: string;
  type: 'log' | 'warn' | 'error' | 'info';
  content: string;
  time: string;
}
