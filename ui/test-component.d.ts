import { GridLayout } from "ui/layouts/grid-layout";
import { Property, PropertyChangeData } from "ui/core/dependency-observable";
import { BusyIndicatorViewModel } from './test-component-view-model';
export declare class SlideshowBusyIndicatorControl extends GridLayout {
    static isBusyProperty: Property;
    static imagesProperty: Property;
    index: number;
    stateSwitch: boolean;
    viewModel: BusyIndicatorViewModel;
    isBusy: boolean;
    images: Array<any>;
    constructor();
    onPropertyChanged(data: PropertyChangeData): void;
}
