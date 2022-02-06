import { createContext, useState } from 'react';

export type State = {
  state: {color: string, subcolor: string},
  actions: {
    setColor: React.Dispatch<React.SetStateAction<string>>,
    setSubcolor: React.Dispatch<React.SetStateAction<string>>
  }
}

const ColorContext = createContext<State>({
  state: {color: 'black', subcolor: 'red'},
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});
type Props = {children: React.ReactNode}
const ColorProvider = ({children}: Props) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  const value = {
    state: {color, subcolor},
    actions: {setColor, setSubcolor}
  };
  return(
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
const {Consumer: ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};
export default ColorContext;