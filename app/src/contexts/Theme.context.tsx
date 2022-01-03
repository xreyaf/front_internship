/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { ThemeType } from './Theme.model';

interface ThemeContextProps {
  themeType: ThemeType;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light'
} as ThemeContextProps);

const initialState =
  JSON.parse(localStorage.getItem('Theme') as string) || 'light';

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(initialState);
  useEffect(() => {
    localStorage.setItem('Theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ themeType: currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
