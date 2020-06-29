import { configureAxios } from './api/configuration';
import { createAppContainer } from 'react-navigation';
import { MainRoutes } from './routes';

configureAxios();

export default createAppContainer(MainRoutes);
