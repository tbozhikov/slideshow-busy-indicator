import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { isAndroid } from "platform";

var builder = require("ui/builder");
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

export class SlideshowBusyIndicatorControl extends GridLayout {
  public static lblTextProperty = new Property("lblText", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));
  public static isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout));
  
  get lblText() {
    return this._getValue(SlideshowBusyIndicatorControl.lblTextProperty);
  }

  set lblText(value: string) {
    this._setValue(SlideshowBusyIndicatorControl.lblTextProperty, value);
  }

  get isBusy() {
    return this._getValue(SlideshowBusyIndicatorControl.isBusyProperty);
  }

  set isBusy(value: boolean) {
    this._setValue(SlideshowBusyIndicatorControl.isBusyProperty, value);
  }

  constructor() {
    super();
    
    const uiFromXml = builder.load(__dirname + "/" + 'test-component.xml');
    uiFromXml.bindingContext = this;
    
    this.addChild(uiFromXml);
  }
}