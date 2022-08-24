export interface NavBarProps {
  darkMode: boolean;
  onSetDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PageProps {
  darkMode: boolean;
}

export interface RTLProps {
  children: JSX.Element | JSX.Element[];
}
