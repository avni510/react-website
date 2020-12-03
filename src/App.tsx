import React from 'react';
import './stylesheets/App.css';
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
          <MenuIcon isMenuOpen={this.state.isMenuOpen} onClick={this.onMenuClick}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <Menu isMenuOpen={this.state.isMenuOpen}>
            <a href="/about_me"> About Me </a>
            <a href="/gallery"> Gallery </a>
            <a href="/"> Home </a>
          </Menu>
        </Theme>
      </div>
    );
  }

  private onMenuClick = (): void => {
    this.setState(({isMenuOpen}) => {
      return {isMenuOpen: !isMenuOpen}
    })
  }
}
