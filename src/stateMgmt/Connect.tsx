import * as React from 'react';
import { ComponentClass, ComponentState } from 'react';
import { ContainerContext, StoreContext } from './Provider';
import { Store } from './Store'

export type Connector<TProps> = (c: ComponentClass<TProps>) =>
  ComponentClass<TProps>

export type CommandsInjector<TContainer, TProps> = (container: TContainer) =>
  Partial<TProps>

export type StateInjector<TGlobalState, TProps> = (state: TGlobalState, props: TProps) =>
  Partial<TProps>

/*
 * This takes in a component and injects in the appropiate state variables into the component as props
 */
export function injectState<TGlobalState, TProps>(func: StateInjector<TGlobalState, TProps>): Connector<TProps> {
  return (Target: ComponentClass<TProps>) => {
    return class injectStateHOC extends React.Component<TProps, ComponentState> {
      public render(): JSX.Element {
        return (
          <StoreContext.Consumer>
            {store => (<Target
                {...this.props}
                {...this.inject(store as Store<TGlobalState>)}
              />)
            }
          </StoreContext.Consumer>
        )
      }

      private inject(store: Store<TGlobalState>): Partial<TProps> {
        if(!store) {
          throw 'Store not found'
        }
        return func(store.getState(), this.props)
      }
    }
  }
}

/*
 * This takes in a component and injects in the appropiate container variables into the component as props
 */
export function injectCommands<TContainer, TProps>(func: CommandsInjector<TContainer, TProps>): Connector<TProps> {
  return (Target: ComponentClass<TProps>) => {
    return class injectHOC extends React.Component<TProps, ComponentState> {
      public render(): JSX.Element {
        return (
          <ContainerContext.Consumer>
            {container => (<Target
              {...this.props}
              {...this.inject(container as TContainer)}
            />)
            }
          </ContainerContext.Consumer>
        )
      }

      private inject(container: TContainer): Partial<TProps> {
        if (!container) {
          throw 'Container not found'
        }
        return func(container)
      }
    }
  }
}

export function connect<TProps>(
    targetComponent: ComponentClass<TProps>,
    ...connectors: Connector<TProps>[]
): ComponentClass<TProps> {
    return connectors.reduce((component, nextConnector) => nextConnector(component), targetComponent);
}
