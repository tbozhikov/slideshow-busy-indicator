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

import { View, AddArrayFromBuilder } from "ui/core/view";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from "platform";

export module knownCollections {
  export const items = "items";
}
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

const itemsProperty = new Property("items", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));


export class SlideshowBusyIndicatorControl extends StackLayout implements AddArrayFromBuilder {
  private _selectedIndexes;
  private _allowMultiple: boolean;
  private _separatorColor: string;
  private _headerHeight: number;
  private _headerTextColor: string;
  private _headerColor: string;
  private _headerTextVerticalAlignment: string;
  private _headerTextHorizontalAlignment: string;
  private _headerTextSize: number;
  public static itemsProperty = itemsProperty;
  // public static selectedIndexProperty = selectedIndexProperty;

  public _addArrayFromBuilder(name: string, value: Array<any>) {
    if (name === "items") {
      this.items = value;
    }
  }

  get items() {
    return this._getValue(SlideshowBusyIndicatorControl.itemsProperty);
  }

  set items(value: Array<any>) {
    this._setValue(SlideshowBusyIndicatorControl.itemsProperty, value);
  }

  constructor() {
    super();

    var lbl = new LabelModule.Label();
    lbl.text = "This is a text label inside the plugin";
    this.addChild(lbl);

    const uiFromXml = builder.load({
      path: '',
      name: 'testComponent'
    });

    this.addChild(uiFromXml);
  }
}
