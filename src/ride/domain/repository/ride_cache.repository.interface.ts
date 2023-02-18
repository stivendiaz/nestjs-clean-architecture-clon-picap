import { ConnectDriverDto } from 'src/ride/infrastructure/dto/connect_driver.dto';
import { DisconnectDriverDto } from 'src/ride/infrastructure/dto/disconnect_driver.dto';
import { LocationDto } from 'src/ride/infrastructure/dto/location.dto';

export interface RideCacheRepositoryInterface {
  connectDriver(connectDriverDto: ConnectDriverDto): Promise<void>;
  disconnectDriver(disconnectDriver: DisconnectDriverDto): Promise<void>;
  getNearestDriver(locationDto: LocationDto): Promise<any>;
}
