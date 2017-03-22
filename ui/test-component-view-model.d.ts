import { Observable } from 'data/observable';
import viewModule = require("ui/core/view");
export declare class BusyIndicatorViewModel extends Observable {
    imgSource1: string;
    imgSource2: string;
    isBusy: boolean;
    lblText: string;
    images: Array<any>;
    image1: viewModule.View;
    image2: viewModule.View;
    private stateSwitch;
    private image1Exit;
    private image2Exit;
    private image1Enter;
    private image2Enter;
    private index;
    constructor();
    init(): void;
    onSwitchIntervalElapsed(): void;
}
