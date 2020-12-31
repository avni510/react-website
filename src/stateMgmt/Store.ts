export type Subscriber<T> = (state: T) => void | Promise<void>;
export type Update<T> = (state: T) => T;

export class Store<T> {
  private subscribers: Subscriber<T>[] = []
  public constructor(private state: T) {}

  public getState(): T {
    return this.state;
  }

  /*
   * sets the class' state to the new state, but also sends
   * the new state to all the subscribers in the list
   */
  public async setState(newState: T): Promise<void> {
    this.state = newState;
    await Promise.all(
      this.subscribers.map(async (subscriber) => subscriber(newState))
    )
  }

  /*
   * takes in a function that has state as the parameter and returns
   * an updated state. It then sets the store's state as the new state
   * and sends the new state to the all the subscribers
   */

  public async update(updateFunc: Update<T>): Promise<void> {
    return this.setState(updateFunc(this.state));
  }

  public subscribe(subscriber: Subscriber<T>): void {
    this.subscribers.push(subscriber);
  }

  public unsubscribe(toUnsubscribe: Subscriber<T>): void {
    this.subscribers = this.subscribers.filter(subscriber =>
      subscriber !== toUnsubscribe
    )
  }
}
