import React from 'react';

export interface ThemeType {
  buttonType:string;
}

const themContextDefaultValue:ThemeType = {
  buttonType: 'default',
};

export const ThemeContext = React.createContext(themContextDefaultValue);
