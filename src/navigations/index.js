import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNav';

export default function AppNav() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
