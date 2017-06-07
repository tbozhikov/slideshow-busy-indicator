import { GridLayout } from "ui/layouts/grid-layout";
import { View, Property, CssProperty, InheritedCssProperty, Style, } from "ui/core/view";
import { PropertyOptions } from "ui/core/properties";
import { PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './ui/test-component-view-model';
import * as colorModule from "color";
import * as builder from "ui/builder";

let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

export const isBusyProperty = new Property<BusyIndicator, boolean>({ name: "isBusy", defaultValue: false, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("isBusy", newValue) });
export const imagesProperty = new Property<BusyIndicator, Array<any>>({ name: "images", defaultValue: new Array<any>(), valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("images", newValue) });
export const backOpacityProperty = new Property<BusyIndicator, number>({ name: "backOpacity", defaultValue: 0.2, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("backOpacity", newValue) });
export const backOpacityProperty = new Property<BusyIndicator, number>({ name: "backOpacity", defaultValue: 0.2, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("backOpacity", newValue) });
export const indicatorOpacityProperty = new Property<BusyIndicator, number>({ name: "indicatorOpacity", defaultValue: 1, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("indicatorOpacity", newValue) });
export const indicatorColorProperty = new Property<BusyIndicator, colorModule.Color>({ name: "indicatorColor", defaultValue: undefined, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("indicatorColor", newValue) });
export const backColorProperty = new Property<BusyIndicator, colorModule.Color>({ name: "backColor", defaultValue: undefined, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("backColor", newValue) });
export const indicatorHeightProperty = new Property<BusyIndicator, number>({ name: "indicatorHeight", defaultValue: undefined, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("indicatorHeight", newValue) });
export const indicatorWidthProperty = new Property<BusyIndicator, number>({ name: "indicatorWidth", defaultValue: undefined, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("indicatorWidth", newValue) });
export const indicatorBorderRadiusProperty = new Property<BusyIndicator, number>({ name: "indicatorBorderRadius", defaultValue: undefined, valueChanged: (target, oldValue, newValue) => target.onPropertyChanged("indicatorBorderRadius", newValue) });

export class BusyIndicator extends GridLayout {
  isBusy: boolean;
  images: Array<any>;

  private index = 0;
  private viewModel: BusyIndicatorViewModel;

  constructor() {
    super();
    debugger;
    var innerComponent = builder.load(__dirname + "/ui/" + 'test-component.xml') as View;

    var viewModel = new BusyIndicatorViewModel();
    this.viewModel = viewModel;
    this.viewModel.isBusy = this.isBusy;
    this.viewModel.images = this.images;
    this.viewModel.image1 = innerComponent.getViewById<View>("image1");
    this.viewModel.image2 = innerComponent.getViewById<View>("image2");

    this.viewModel.init();

    innerComponent.bindingContext = this.viewModel;

    this.addChild(innerComponent);
  }

  onPropertyChanged(propertyName, newValue) {
    this.viewModel.set(propertyName, newValue);
  }
}

isBusyProperty.register(BusyIndicator);
imagesProperty.register(BusyIndicator);
backOpacityProperty.register(BusyIndicator);
indicatorOpacityProperty.register(BusyIndicator);
indicatorColorProperty.register(BusyIndicator);
backColorProperty.register(BusyIndicator);
indicatorHeightProperty.register(BusyIndicator);
indicatorWidthProperty.register(BusyIndicator);
indicatorBorderRadiusProperty.register(BusyIndicator);