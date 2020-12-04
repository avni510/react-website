export type Subscriber<T> = (state: T) => void | Promise<void>;
export type Update<T> = (state: T) => T;

export class Store<T> {
  private subscribers: Subscriber<T>[] = []
  public constructor(private state: T) {}

  public getState(): T {
    return this.state;
  }

  public async setState(newState: T): Promise<void> {
    this.state = newState;
    await Promise.all(
      this.subscribers.map(async subscriber => subscriber(newState))
    )
  }

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
