import React from 'react';
import './App.css';
import { MenuIcon } from './styledComponents/MenuIcon.styled';
import Theme from './styledComponents/Theme';
import { Menu } from './styledComponents/Menu.styled';

type State = {
  isMenuOpen: boolean
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { isMenuOpen: false }
  }

  public render(): JSX.Element {
    return (
      <div>
        <Theme>
          <MenuIcon onClick={() => this.setState({isMenuOpen: true})}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <Menu isMenuOpen={this.state.isMenuOpen}>
            <a href="/about_me"> About Me </a>
          </Menu>
        </Theme>
      </div>
    );
  }
}
