export type TColumn = {
    textAlign?: 'left' | 'center' | 'right';
    textVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    defaultValue?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    type?: 'money' | 'text' | 'date' | 'datetime' | 'status';
    key: string;
    name: string;
    overlay?: boolean;
}
