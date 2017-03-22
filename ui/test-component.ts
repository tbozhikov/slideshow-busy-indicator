import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './test-component-view-model';
import observableModule = require("data/observable");
var observableObject = new observableModule.Observable();


var timer = require("timer");
var builder = require("ui/builder");
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;
var TRANSFORM_ANIMATION_DURATION = 600;

function onPropertyChanged(data: PropertyChangeData) {
  let busyIndicator = <SlideshowBusyIndicatorControl>data.object;
  busyIndicator.onPropertyChanged(data);
}

export class SlideshowBusyIndicatorControl extends GridLayout {
  public static lblTextProperty = new Property("lblText", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout, onPropertyChanged));
  public static imagesProperty = new Property("images", "SlideshowBusyIndicatorControl", new PropertyMetadata(new Array<any>(), AffectsLayout, onPropertyChanged));

  public static imgSource1Property = new Property("imgSource1", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static imgSource2Property = new Property("imgSource2", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));

  index = 0;

  stateSwitch: boolean;
  viewModel: BusyIndicatorViewModel;

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

  get images() {
    return this._getValue(SlideshowBusyIndicatorControl.imagesProperty);
  }

  set images(value: Array<any>) {
    this._setValue(SlideshowBusyIndicatorControl.imagesProperty, value);
  }

  constructor() {
    super();

    this.viewModel = new BusyIndicatorViewModel();
    this.viewModel.isBusy = this.isBusy;
    this.viewModel.lblText = this.lblText;
    this.viewModel.images = this.images;

    const uiFromXml = builder.load(__dirname + "/" + 'test-component.xml');
    uiFromXml.bindingContext = this.viewModel;

    this.addChild(uiFromXml);
  }

  onPropertyChanged(data: PropertyChangeData) {
    console.log(data.property.name + " has been changed and the new value is: " + data.newValue);
    this.viewModel.set(data.property.name, data.newValue);
  }
}