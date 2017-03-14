import { Observable } from 'data/observable';
export declare class Common extends Observable {
    message: string;
    constructor();
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
import { AddArrayFromBuilder } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
import { StackLayout } from "ui/layouts/stack-layout";
export declare module knownCollections {
    const items = "items";
}
export declare class SlideshowBusyIndicatorControl extends StackLayout implements AddArrayFromBuilder {
    private _selectedIndexes;
    private _allowMultiple;
    private _separatorColor;
    private _headerHeight;
    private _headerTextColor;
    private _headerColor;
    private _headerTextVerticalAlignment;
    private _headerTextHorizontalAlignment;
    private _headerTextSize;
    static itemsProperty: Property;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    items: Array<any>;
    constructor();
}
