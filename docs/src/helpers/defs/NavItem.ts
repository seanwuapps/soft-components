export interface NavItem {
  text: string;
  url: string;
  active?: boolean;
  external?: boolean;
  disabled?: boolean;
  children?: NavItem[];
}
