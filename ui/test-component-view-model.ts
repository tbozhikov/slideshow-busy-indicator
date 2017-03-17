import { Observable } from 'data/observable';

var timer = require("timer");
var TRANSFORM_ANIMATION_DURATION = 600;

export class BusyIndicatorViewModel extends Observable {
    public imgSource1: string;
    public imgSource2: string;
    public isBusy: boolean;
    public lblText: string;
    public images: Array<any>;
    stateSwitch: boolean;

    // public images = ["~/images/01.png", "~/images/02.png", "~/images/03.png", "~/images/04.png"];

    index = 0;

    constructor() {
        super();

        timer.setInterval(() => this.onSwitchIntervalElapsed(), TRANSFORM_ANIMATION_DURATION + 100);
    }

    onSwitchIntervalElapsed() {
        this.index = this.index + 1 < this.images.length ? this.index + 1 : 0;

        if (this.stateSwitch) {
            this.imgSource2 = this.images[this.index];
        } else {
            this.imgSource1 = this.images[this.index];
        }

        this.stateSwitch = !this.stateSwitch;
    }
}