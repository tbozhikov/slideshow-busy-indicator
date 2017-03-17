import { Observable } from 'data/observable';
import { SlideshowBusyIndicator } from 'nativescript-slideshow-busy-indicator';

export class HelloWorldModel extends Observable {
  public message: string;
  public isBusy: boolean;
  private slideshowBusyIndicator: SlideshowBusyIndicator;

  constructor() {
    super();

    this.slideshowBusyIndicator = new SlideshowBusyIndicator();
    this.message = this.slideshowBusyIndicator.message;
    this.isBusy = true;

    setInterval(() => this.onTimeout(), 1500);
  }

  onTimeout() {
    this.set("isBusy", !this.isBusy);
  }
}