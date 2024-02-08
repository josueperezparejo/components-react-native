import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { ThemeProvider } from './src/provider/ThemeProvider';

export default function App() {

  return (
    <Provider store={store}>
      <ThemeProvider />
    </Provider>
  )
}