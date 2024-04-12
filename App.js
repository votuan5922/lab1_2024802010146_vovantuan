import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Project_1 from './src/Project_1';
import Project_2 from './src/Project_2';
import Project_3 from './src/Project_3';
import Project_4 from './src/Project_4';
import Project_5 from './src/Project_6';
import Project_6 from './src/Project_5';
import Project_7 from './src/Project_7';
import Project_8 from './src/Project_8';
const Drawer = createDrawerNavigator();
const App =() =>{  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Project_1" component={Project_1}/>
        <Drawer.Screen name="Project_2" component={Project_2}/>
        <Drawer.Screen name="Project_3" component={Project_3}/>
        <Drawer.Screen name="Project_4" component={Project_4} />
        <Drawer.Screen name="Project_5" component={Project_5} />
        <Drawer.Screen name="Project_6" component={Project_6} />
        <Drawer.Screen name="Project_7" component={Project_7} />
        <Drawer.Screen name="Project_8" component={Project_8} />
      </Drawer.Navigator>
  </NavigationContainer>
  )
}
export default App;
