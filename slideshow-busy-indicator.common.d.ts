import { Observable } from 'data/observable';
export declare class Common extends Observable {
    message: string;
    constructor();
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
import { Property } from "ui/core/dependency-observable";
import { GridLayout } from "ui/layouts/grid-layout";
export declare module knownCollections {
    const items = "items";
}
export declare class SlideshowBusyIndicatorControl extends GridLayout {
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
    static lblTextProperty: Property;
    lblText: string;
    constructor();
}
