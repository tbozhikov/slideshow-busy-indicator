import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
var builder = require("ui/builder");


export class Common extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = Utils.SUCCESS_MSG();
  }

  public greet() {
    return "Hello, NS";
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {

    var myComponentInstance = builder.load({
      path: "~/slideshow-busy-indicator",
      name: "SlideshowBusyIndicator"
    });

    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}

