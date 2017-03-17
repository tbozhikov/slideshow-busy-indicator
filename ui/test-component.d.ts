import { GridLayout } from "ui/layouts/grid-layout";
import { Property } from "ui/core/dependency-observable";
export declare class SlideshowBusyIndicatorControl extends GridLayout {
    static lblTextProperty: Property;
    static isBusyProperty: Property;
    static imagesProperty: Property;
    static imgSource1Property: Property;
    static imgSource2Property: Property;
    index: number;
    stateSwitch: boolean;
    lblText: string;
    isBusy: boolean;
    images: Array<any>;
    imgSource1: string;
    imgSource2: string;
    constructor();
    onSwitchIntervalElapsed(): void;
}
