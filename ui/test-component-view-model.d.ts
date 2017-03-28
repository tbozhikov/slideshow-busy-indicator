import { Observable } from 'data/observable';
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import colorModule = require("color");
export declare class BusyIndicatorViewModel extends Observable {
    imgSource1: string;
    imgSource2: string;
    isBusy: boolean;
    images: Array<any>;
    image1: viewModule.View;
    image2: viewModule.View;
    backgroundColor: colorModule.Color;
    color: colorModule.Color;
    rootColor: undefined;
    private stateSwitch;
    private image1Exit;
    private image2Exit;
    private image1Enter;
    private image2Enter;
    private image1Transition;
    private image2Transition;
    private index;
    constructor();
    init(): void;
    createTransitionAnimationForView(view: viewModule.View): animationModule.Animation;
    onSwitchIntervalElapsed(): void;
}
