import { GridLayout } from "ui/layouts/grid-layout";
import { Property } from "ui/core/view";
import * as colorModule from "color";
export declare const isBusyProperty: Property<BusyIndicator, boolean>;
export declare const imagesProperty: Property<BusyIndicator, any[]>;
export declare const backOpacityProperty: Property<BusyIndicator, number>;
export declare const backOpacityProperty: Property<BusyIndicator, number>;
export declare const indicatorOpacityProperty: Property<BusyIndicator, number>;
export declare const indicatorColorProperty: Property<BusyIndicator, colorModule.Color>;
export declare const backColorProperty: Property<BusyIndicator, colorModule.Color>;
export declare const indicatorHeightProperty: Property<BusyIndicator, number>;
export declare const indicatorWidthProperty: Property<BusyIndicator, number>;
export declare const indicatorBorderRadiusProperty: Property<BusyIndicator, number>;
export declare class BusyIndicator extends GridLayout {
    isBusy: boolean;
    images: Array<any>;
    private index;
    private viewModel;
    constructor();
    onPropertyChanged(propertyName: any, newValue: any): void;
}
