import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './test-component-view-model';
import observableModule = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import colorModule = require("color");

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
  public static isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout, onPropertyChanged));
  public static imagesProperty = new Property("images", "SlideshowBusyIndicatorControl", new PropertyMetadata(new Array<any>(), AffectsLayout, onPropertyChanged));

  private index = 0;
  private viewModel: BusyIndicatorViewModel;

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

    var innerComponent = builder.load(__dirname + "/" + 'test-component.xml') as viewModule.View;

    var viewModel = new BusyIndicatorViewModel();
    this.viewModel = viewModel;
    this.viewModel.isBusy = this.isBusy;
    this.viewModel.images = this.images;
    this.viewModel.image1 = innerComponent.getViewById<viewModule.View>("image1");
    this.viewModel.image2 = innerComponent.getViewById<viewModule.View>("image2");
    this.viewModel.init();

    innerComponent.bindingContext = this.viewModel;

    this.style.on("propertyChange", (args) => { this.onStyleChanged(args); })

    this.addChild(innerComponent);
  }

  onStyleChanged(args: any) {
    switch (args.propertyName) {
      case "backgroundColor":
        this.viewModel.set("backgroundColor", args.value);
        break;
      case "color":
        this.viewModel.set("color", args.value)
        break;
    }
  }

  onPropertyChanged(data: PropertyChangeData) {
    this.viewModel.set(data.property.name, data.newValue);
  }
}