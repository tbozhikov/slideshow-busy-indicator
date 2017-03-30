import { Observable } from 'data/observable';

export class MainViewModel extends Observable {
  public message: string;
  public isBusy: boolean;
  public images = ["~/images/01.png", "~/images/02.png", "~/images/03.png", "~/images/04.png"];

  constructor() {
    super();

    this.message = "Loaded content";
    this.loadData();
  }

  loadData() {
    this.set("isBusy", true);
    this.set("message", "Loading now...");
    setTimeout(() => {
      this.set("message", "Loaded content");
      this.set("isBusy", false);
    }, 2500);
  }

  onLoadClick() {
    this.loadData()
  }
}