import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './test-component-view-model';
import viewModule = require("ui/core/view");
import colorModule = require("color");

var builder = require("ui/builder");
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

function onPropertyChanged(data: PropertyChangeData) {
  let busyIndicator = <SlideshowBusyIndicatorControl>data.object;
  busyIndicator.onPropertyChanged(data);
}

export class SlideshowBusyIndicatorControl extends GridLayout {
  public static isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout, onPropertyChanged));
  public static imagesProperty = new Property("images", "SlideshowBusyIndicatorControl", new PropertyMetadata(new Array<any>(), AffectsLayout, onPropertyChanged));
  public static backOpacityProperty = new Property("backOpacity", "SlideshowBusyIndicatorControl", new PropertyMetadata(0.2, AffectsLayout, onPropertyChanged));
  public static indicatorOpacityProperty = new Property("indicatorOpacity", "SlideshowBusyIndicatorControl", new PropertyMetadata(1, AffectsLayout, onPropertyChanged));
  public static indicatorColorProperty = new Property("indicatorColor", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static backColorProperty = new Property("backColor", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));

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

  get backOpacity() {
    return this._getValue(SlideshowBusyIndicatorControl.backOpacityProperty);
  }

  set backOpacity(value: number) {
    this._setValue(SlideshowBusyIndicatorControl.backOpacityProperty, value);
  }

  get backColor() {
    return this._getValue(SlideshowBusyIndicatorControl.backColorProperty);
  }

  set backColor(value: colorModule.Color) {
    this._setValue(SlideshowBusyIndicatorControl.backColorProperty, value);
  }

  get indicatorColor() {
    return this._getValue(SlideshowBusyIndicatorControl.indicatorColorProperty);
  }

  set indicatorColor(value: colorModule.Color) {
    this._setValue(SlideshowBusyIndicatorControl.indicatorColorProperty, value);
  }

  get indicatorOpacity() {
    return this._getValue(SlideshowBusyIndicatorControl.indicatorOpacityProperty);
  }

  set indicatorOpacity(value: number) {
    this._setValue(SlideshowBusyIndicatorControl.indicatorOpacityProperty, value);
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
    this.viewModel.backOpacity = this.backOpacity;
    this.viewModel.backColor = this.backColor;
    this.viewModel.indicatorColor = this.indicatorColor;
    this.viewModel.indicatorOpacity = this.indicatorOpacity;

    this.viewModel.init();

    innerComponent.bindingContext = this.viewModel;

    this.addChild(innerComponent);
  }

  onPropertyChanged(data: PropertyChangeData) {
    this.viewModel.set(data.property.name, data.newValue);
  }
}