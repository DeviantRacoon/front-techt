export type TToast = {
  id: number;
  title: string;
  message: string;
  variant: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary';
  timestamp: string;
  duration: number;
};
