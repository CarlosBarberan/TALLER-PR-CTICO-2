import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';
import RegisterScreen from '../screens/RegisterScreen';
import { ProductsScreen } from '../screens/ProductsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerContentStyle: {
                backgroundColor: PRIMARY_COLOR
            },
            drawerStyle: {
                backgroundColor: '#0cf6ef'
            },
            sceneStyle: {
                backgroundColor: SECUNDARY_COLOR
            }
        }}>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="Products" component={ProductsScreen} />
        </Drawer.Navigator>
    );
}
