import * as React from 'react';
import { connect, injectCommands, injectState } from '../stateMgmt/Connect';
import { PhotoCommands } from '../commands/PhotoCommands';
import { AppContainer, State } from  '../Setup'

type Props = {
  isLoading?: boolean,
  photo?: string,
  photoCommands?: PhotoCommands
}

class PhotoTest extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    const { photoCommands } = this.props
    photoCommands && photoCommands.fetchPhoto();
  }

  public render(): JSX.Element {
    const { isLoading, photo } = this.props;
    return (
      <div>
        {console.log(`isLoading ${isLoading}`)}
        {console.log(`photo ${photo}`)}
      </div>
    )
  }
}

export default connect(
  PhotoTest,
  injectCommands<AppContainer, Props> (c => ({
    photoCommands: c.photoCommands
  })),
  injectState<State, Props>((state, props) => {
    const isLoading = state.photos.isLoading
    const photo = state.photos.photo
    return {
      isLoading,
      photo
    }
  })
)
