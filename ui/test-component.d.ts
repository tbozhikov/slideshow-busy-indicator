import { GridLayout } from "ui/layouts/grid-layout";
import { Property, PropertyChangeData } from "ui/core/dependency-observable";
import colorModule = require("color");
export declare class SlideshowBusyIndicatorControl extends GridLayout {
    static isBusyProperty: Property;
    static imagesProperty: Property;
    static backOpacityProperty: Property;
    static indicatorColorProperty: Property;
    static backColorProperty: Property;
    private index;
    private viewModel;
    isBusy: boolean;
    images: Array<any>;
    backOpacity: number;
    backColor: colorModule.Color;
    indicatorColor: colorModule.Color;
    constructor();
    onPropertyChanged(data: PropertyChangeData): void;
}
