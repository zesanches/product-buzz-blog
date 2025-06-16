export type Action = {
  label: string;
  icon?: React.ReactNode;
  onClick?: (row) => void;
}