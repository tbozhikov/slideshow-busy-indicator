import { GridLayout } from "ui/layouts/grid-layout";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { isAndroid } from "platform";
import { BusyIndicatorViewModel } from './test-component-view-model';

var timer = require("timer");
var builder = require("ui/builder");
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;
var TRANSFORM_ANIMATION_DURATION = 600;

export class SlideshowBusyIndicatorControl extends GridLayout {
  public static lblTextProperty = new Property("lblText", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));
  public static isBusyProperty = new Property("isBusy", "SlideshowBusyIndicatorControl", new PropertyMetadata(true, AffectsLayout));
  public static imagesProperty = new Property("images", "SlideshowBusyIndicatorControl", new PropertyMetadata(new Array<any>(), AffectsLayout));

  public static imgSource1Property = new Property("imgSource1", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));
  public static imgSource2Property = new Property("imgSource2", "SlideshowBusyIndicatorControl", new PropertyMetadata(undefined, AffectsLayout));

  index = 0;
  // imgSource1: any;
  // imgSource2: any;
  stateSwitch: boolean;

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

  get imgSource1() {
    return this._getValue(SlideshowBusyIndicatorControl.imgSource1Property);
  }

  set imgSource1(value: string) {
    this._setValue(SlideshowBusyIndicatorControl.imgSource1Property, value);
  }

  get imgSource2() {
    return this._getValue(SlideshowBusyIndicatorControl.imgSource2Property);
  }

  set imgSource2(value: string) {
    this._setValue(SlideshowBusyIndicatorControl.imgSource2Property, value);
  }

  constructor() {
    super();

    // var viewModel = new BusyIndicatorViewModel();

    const uiFromXml = builder.load(__dirname + "/" + 'test-component.xml');
    // uiFromXml.bindingContext = new BusyIndicatorViewModel();
    uiFromXml.bindingContext = this;

    this.addChild(uiFromXml);

    timer.setInterval(() => this.onSwitchIntervalElapsed(), TRANSFORM_ANIMATION_DURATION + 100);

    // this.on(SlideshowBusyIndicatorControl.propertyChangeEvent, function (propertyChangeData: PropertyChangeData) {
    //   console.log(propertyChangeData.property.name + " has been changed and the new value is: " + propertyChangeData.newValue);

    //   viewModel.set(propertyChangeData.property.name, propertyChangeData.newValue);
    // })
  }

  // constructor() {
  //       // set the interval to a value greater than the time needed to finish the animations (avoid animation exceptions)
  //       timer.setInterval(() => this.onSwitchIntervalElapsed(), TRANSFORM_ANIMATION_DURATION + 100);
  //   }

  // ngOnInit() {
  //     this.stateSwitch = true;
  //     this.imgSource1 = this.images[this.index];
  // }

  onSwitchIntervalElapsed() {
    this.index = this.index + 1 < this.images.length ? this.index + 1 : 0;

    if (this.stateSwitch) {
      this.imgSource2 = this.images[this.index];
    } else {
      this.imgSource1 = this.images[this.index];
    }

    this.stateSwitch = !this.stateSwitch;
  }
}