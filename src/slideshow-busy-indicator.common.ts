import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './ui/test-component-view-model';
import viewModule = require("ui/core/view");
import colorModule = require("color");

var builder = require("ui/builder");
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

function onPropertyChanged(data: PropertyChangeData) {
  let busyIndicator = <BusyIndicator>data.object;
  busyIndicator.onPropertyChanged(data);
}

export class BusyIndicator extends GridLayout {
  public static isBusyProperty = new Property("isBusy", "BusyIndicator", new PropertyMetadata(true, AffectsLayout, onPropertyChanged));
  public static imagesProperty = new Property("images", "BusyIndicator", new PropertyMetadata(new Array<any>(), AffectsLayout, onPropertyChanged));
  public static backOpacityProperty = new Property("backOpacity", "BusyIndicator", new PropertyMetadata(0.2, AffectsLayout, onPropertyChanged));
  public static indicatorOpacityProperty = new Property("indicatorOpacity", "BusyIndicator", new PropertyMetadata(1, AffectsLayout, onPropertyChanged));
  public static indicatorColorProperty = new Property("indicatorColor", "BusyIndicator", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static backColorProperty = new Property("backColor", "BusyIndicator", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static indicatorHeightProperty = new Property("indicatorHeight", "BusyIndicator", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static indicatorWidthProperty = new Property("indicatorWidth", "BusyIndicator", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));
  public static indicatorBorderRadiusProperty = new Property("indicatorBorderRadius", "BusyIndicator", new PropertyMetadata(undefined, AffectsLayout, onPropertyChanged));

  private index = 0;
  private viewModel: BusyIndicatorViewModel;

  get isBusy() {
    return this._getValue(BusyIndicator.isBusyProperty);
  }

  set isBusy(value: boolean) {
    this._setValue(BusyIndicator.isBusyProperty, value);
  }

  get images() {
    return this._getValue(BusyIndicator.imagesProperty);
  }

  set images(value: Array<any>) {
    this._setValue(BusyIndicator.imagesProperty, value);
  }

  get backOpacity() {
    return this._getValue(BusyIndicator.backOpacityProperty);
  }

  set backOpacity(value: number) {
    this._setValue(BusyIndicator.backOpacityProperty, value);
  }

  get backColor() {
    return this._getValue(BusyIndicator.backColorProperty);
  }

  set backColor(value: colorModule.Color) {
    this._setValue(BusyIndicator.backColorProperty, value);
  }

  get indicatorColor() {
    return this._getValue(BusyIndicator.indicatorColorProperty);
  }

  set indicatorColor(value: colorModule.Color) {
    this._setValue(BusyIndicator.indicatorColorProperty, value);
  }

  get indicatorOpacity() {
    return this._getValue(BusyIndicator.indicatorOpacityProperty);
  }

  set indicatorOpacity(value: number) {
    this._setValue(BusyIndicator.indicatorOpacityProperty, value);
  }

  get indicatorHeight() {
    return this._getValue(BusyIndicator.indicatorHeightProperty);
  }

  set indicatorHeight(value: number) {
    this._setValue(BusyIndicator.indicatorHeightProperty, value);
  }

  get indicatorWidth() {
    return this._getValue(BusyIndicator.indicatorWidthProperty);
  }

  set indicatorWidth(value: number) {
    this._setValue(BusyIndicator.indicatorWidthProperty, value);
  }

  get indicatorBorderRadius() {
    return this._getValue(BusyIndicator.indicatorBorderRadiusProperty);
  }

  set indicatorBorderRadius(value: number) {
    this._setValue(BusyIndicator.indicatorBorderRadiusProperty, value);
  }

  constructor() {
    super();
    var innerComponent = builder.load(__dirname + "/ui/" + 'test-component.xml') as viewModule.View;

    var viewModel = new BusyIndicatorViewModel();
    this.viewModel = viewModel;
    this.viewModel.isBusy = this.isBusy;
    this.viewModel.images = this.images;
    this.viewModel.image1 = innerComponent.getViewById<viewModule.View>("image1");
    this.viewModel.image2 = innerComponent.getViewById<viewModule.View>("image2");

    this.viewModel.init();

    innerComponent.bindingContext = this.viewModel;

    this.addChild(innerComponent);
  }

  onPropertyChanged(data: PropertyChangeData) {
    this.viewModel.set(data.property.name, data.newValue);
  }
}