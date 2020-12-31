import { Dispatch } from '../stateMgmt/Reducer';
import { PhotoService } from '../services/PhotoService';
import { PhotoActions } from '../reducers/PhotoReducer';

export interface PhotoCommands {
  fetchPhoto(): Promise<void>;
}

export class PhotoCommandsDispatcher implements PhotoCommands {
  constructor(
    private dispatch: Dispatch<PhotoActions>,
    private photoService: PhotoService
  ) {}

  public async fetchPhoto(): Promise<void> {
    this.dispatch({ type: 'Photo.Loading' });
    const photo = await this.photoService.loadPhoto();
    this.dispatch({ type: 'Photo.Loaded', photo });
  }
}
