import { Observable } from 'data/observable';

export class MainViewModel extends Observable {
  public message: string;
  public isBusy: boolean;
  public images = ["~/images/01.png", "~/images/02.png", "~/images/03.png", "~/images/04.png"];

  constructor() {
    super();

    this.message = "Test content";
    this.isBusy = true;
  }

  onClick() {
    this.set("isBusy", !this.isBusy);
  }
}