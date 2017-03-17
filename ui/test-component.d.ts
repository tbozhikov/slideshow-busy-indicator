import { GridLayout } from "ui/layouts/grid-layout";
import { Property } from "ui/core/dependency-observable";
export declare class SlideshowBusyIndicatorControl extends GridLayout {
    static lblTextProperty: Property;
    static isBusyProperty: Property;
    lblText: string;
    isBusy: boolean;
    constructor();
}
