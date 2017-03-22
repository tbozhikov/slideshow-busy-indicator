import { Observable } from 'data/observable';
import { SlideshowBusyIndicatorControl } from './test-component'
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import enums = require("ui/enums");

var timer = require("timer");
var TRANSFORM_ANIMATION_DURATION = 600;

export class BusyIndicatorViewModel extends Observable {
    public imgSource1: string;
    public imgSource2: string;
    public isBusy: boolean;
    public lblText: string;
    public images: Array<any>;
    public image1: viewModule.View;
    public image2: viewModule.View;

    private stateSwitch: boolean;
    private image1Exit: animationModule.Animation;
    private image2Exit: animationModule.Animation;
    private image1Enter: animationModule.Animation;
    private image2Enter: animationModule.Animation;

    private index = 0;

    constructor() {
        super();
        this.images = [];
        timer.setInterval(() => this.onSwitchIntervalElapsed(), TRANSFORM_ANIMATION_DURATION + 100);
    }

    init() {
        this.image1Exit = this.image1.createAnimation({
            opacity: 0,
            scale: { x: 0.5, y: 0.5 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });
        // this.image1Enter = this.image1.createAnimation({
        //     opacity: 1,
        //     duration: TRANSFORM_ANIMATION_DURATION,
        //     curve: enums.AnimationCurve.easeInOut
        // });
        this.image2Exit = this.image2.createAnimation({
            opacity: 0,
            scale: { x: 0.5, y: 0.5 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });
        // this.image2Enter = this.image2.createAnimation({
        //     opacity: 1,
        //     duration: TRANSFORM_ANIMATION_DURATION,
        //     curve: enums.AnimationCurve.easeInOut
        // });

        var definitions1 = new Array<animationModule.AnimationDefinition>();
        var a11: animationModule.AnimationDefinition = {
            target: this.image1,
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        };
        definitions1.push(a11);

        var a21: animationModule.AnimationDefinition = {
            target: this.image1,
            rotate: 15,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions1.push(a21);
        var a31: animationModule.AnimationDefinition = {
            target: this.image1,
            rotate: -15,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions1.push(a31);

        var a41: animationModule.AnimationDefinition = {
            target: this.image1,
            rotate: 0,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions1.push(a41);
        this.image1Enter = new animationModule.Animation(definitions1);

        var definitions = new Array<animationModule.AnimationDefinition>();
        var a1: animationModule.AnimationDefinition = {
            target: this.image2,
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        };
        definitions.push(a1);

        var a2: animationModule.AnimationDefinition = {
            target: this.image2,
            rotate: 15,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions.push(a2);
        var a3: animationModule.AnimationDefinition = {
            target: this.image2,
            rotate: -15,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions.push(a3);

        var a4: animationModule.AnimationDefinition = {
            target: this.image2,
            rotate: 0,
            duration: TRANSFORM_ANIMATION_DURATION
        };
        definitions.push(a4);
        this.image2Enter = new animationModule.Animation(definitions);
    }

    onSwitchIntervalElapsed() {
        this.index = this.index + 1 < this.images.length ? this.index + 1 : 0;


        if (this.stateSwitch) {
            this.set("imgSource2", this.images[this.index]);

            this.image2Enter.play();
            this.image1Exit.play();
        } else {
            this.set("imgSource1", this.images[this.index]);

            this.image1Enter.play();
            this.image2Exit.play();
        }

        this.stateSwitch = !this.stateSwitch;
    }
}