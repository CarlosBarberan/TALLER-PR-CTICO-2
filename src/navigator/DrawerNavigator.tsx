import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';
import RegisterScreen from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/homeComponents/HomeScreen';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
    Register: undefined;
    Login: undefined;
    Home: undefined;
};

export interface User {
    id: number,
    user: string,
    password: string,
    email: string
}

export const DrawerNavigator = () => {
    const users: User[] = [
        { id: 1, password: 'asd', user: 'asd', email: 'asd' }
    ]

    const [listUser, setListUser] = useState(users)

    const handleAddUser=(user: User)=>{
        setListUser([...listUser, user])
    }

    return (
        <Drawer.Navigator
            initialRouteName='Login'
            screenOptions={{
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
            <Drawer.Screen  options={{headerShown: false}} name="Login" children={()=><LoginScreen users={listUser}/>} />
            <Drawer.Screen  options={{headerShown: false}} name="Register" children={()=><RegisterScreen users={listUser} handleAddUser={handleAddUser}/>} />
            <Drawer.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
        </Drawer.Navigator>
    );
}
