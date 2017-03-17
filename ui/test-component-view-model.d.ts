import { Observable } from 'data/observable';
export declare class BusyIndicatorViewModel extends Observable {
    imgSource1: string;
    imgSource2: string;
    isBusy: boolean;
    lblText: string;
    images: Array<any>;
    stateSwitch: boolean;
    index: number;
    constructor();
    onSwitchIntervalElapsed(): void;
}
