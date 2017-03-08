import {Observable} from 'data/observable';
import {SlideshowBusyIndicator} from 'nativescript-slideshow-busy-indicator';

export class HelloWorldModel extends Observable {
  public message: string;
  private slideshowBusyIndicator: SlideshowBusyIndicator;

  constructor() {
    super();

    this.slideshowBusyIndicator = new SlideshowBusyIndicator();
    this.message = this.slideshowBusyIndicator.message;
  }
}