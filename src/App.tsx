import { useState } from 'react';
import { data, IItem } from './data';
import { ThemeProvider, useTheme } from './Context';
import './styles.css';

export function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  const changeTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className={`app app_${currentTheme}`}>
        <button onClick={changeTheme}>Toggle theme</button>
        <List data={data} />
      </div>
    </ThemeProvider>
  );
}

function List({ data }: { data: IItem[] }) {
  return (
    <div>
      {data.map((item) => (
        <ListItem key={item.id} caption={item.name} />
      ))}
    </div>
  );
}

function ListItem({ caption }: { caption: string }) {
  const theme = useTheme();
  return <div className={`listItem listItem_${theme}`}>{caption}</div>;
}