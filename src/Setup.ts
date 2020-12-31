import { PhotoCommands, PhotoCommandsDispatcher } from './commands/PhotoCommands';
import { PhotoState, initialPhotoState } from './state/PhotoState';
import { photoReducer, PhotoActions } from './reducers/PhotoReducer';
import { Store } from './stateMgmt/Store';
import { combine, createDispatch, Dispatch } from './stateMgmt/Reducer';
import { PhotoServiceAPI } from './services/PhotoService';

export type AppContainer = {
  photoCommands: PhotoCommands
};

export type State = {
  photos: PhotoState
};

type Action =
  PhotoActions;

export class Setup {
  public executeState() {
    const state = this.initState();
    return new Store<State>(state);
  }

  public executeContainer(store: Store<State>) {
    const reducer = this.initReducer();
    const dispatch = createDispatch(store, reducer);

    return this.initContainer(dispatch);
  }

  private initState(): State {
    return {
      photos: initialPhotoState
    };
  }

  private initReducer() {
    return combine<Action, State>({
      photos: photoReducer
    });
  }

  private initContainer(dispatch: Dispatch<Action> ) {
    return {
      photoCommands: new PhotoCommandsDispatcher(
        dispatch,
        new PhotoServiceAPI()
      )
    };
  }
}
