import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {
  public message: string;
  public isBusy: boolean;
  public images = ["~/images/01.png", "~/images/02.png", "~/images/03.png", "~/images/04.png"];

  constructor() {
    super();

    this.message = "Test message";
    this.isBusy = true;
  }

  onTimeout() {
    this.set("isBusy", !this.isBusy);
  }

  onClick() {
    this.set("isBusy", !this.isBusy);
  }
}