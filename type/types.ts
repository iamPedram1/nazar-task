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

export interface AboutUsProps {
  darkMode: boolean;
  showSkelet: boolean;
  onSetShowSkelet: React.Dispatch<React.SetStateAction<boolean>>;
  showContent: boolean;
  onSetShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}
