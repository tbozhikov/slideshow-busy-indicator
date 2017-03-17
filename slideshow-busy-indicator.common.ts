import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
var builder = require("ui/builder");
import LabelModule = require("ui/label");

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

    // var myComponentInstance = builder.load({
    //   path: "~/slideshow-busy-indicator",
    //   name: "SlideshowBusyIndicator"
    // });

    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}

// import { View } from "ui/core/view";
// import { PropertyMetadata } from "ui/core/proxy";
// import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
// import { GridLayout } from "ui/layouts/grid-layout";
// import { isAndroid } from "platform";

// let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

// const lblTextProperty = new Property("lblText", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));
// const isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout));

// export class SlideshowBusyIndicatorControl extends GridLayout {
//   public static lblTextProperty = lblTextProperty;
//   public static isBusyProperty = isBusyProperty;
  
//   get lblText() {
//     return this._getValue(SlideshowBusyIndicatorControl.lblTextProperty);
//   }

//   set lblText(value: string) {
//     this._setValue(SlideshowBusyIndicatorControl.lblTextProperty, value);
//   }

//   get isBusy() {
//     return this._getValue(SlideshowBusyIndicatorControl.isBusyProperty);
//   }

//   set isBusy(value: boolean) {
//     this._setValue(SlideshowBusyIndicatorControl.isBusyProperty, value);
//   }

//   constructor() {
//     super();
    
//     const uiFromXml = builder.load(__dirname + "/ui/" + 'test-component.xml');
//     uiFromXml.bindingContext = this;
    
//     this.addChild(uiFromXml);
//   }
// }
