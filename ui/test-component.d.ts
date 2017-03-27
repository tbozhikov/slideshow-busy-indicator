import { GridLayout } from "ui/layouts/grid-layout";
import { Property, PropertyChangeData } from "ui/core/dependency-observable";
export declare class SlideshowBusyIndicatorControl extends GridLayout {
    static isBusyProperty: Property;
    static imagesProperty: Property;
    private index;
    private root;
    private indicator;
    private viewModel;
    isBusy: boolean;
    images: Array<any>;
    constructor();
    onStyleChanged(args: any): void;
    onPropertyChanged(data: PropertyChangeData): void;
}
