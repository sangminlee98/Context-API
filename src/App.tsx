import './App.css';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <SelectColor/>
      <ColorBox/>
    </ColorProvider>
  );
}

export default App;
