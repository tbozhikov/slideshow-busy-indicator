import { Observable } from 'data/observable';
import { SlideshowBusyIndicatorControl } from './test-component'
import viewModule = require("ui/core/view");
import animationModule = require("ui/animation");
import enums = require("ui/enums");
import colorModule = require("color");

var timer = require("timer");
var TRANSFORM_ANIMATION_DURATION = 600;
var ROTATE_ANIMATION_DURATION = 200;

export class BusyIndicatorViewModel extends Observable {
    public imgSource1: string;
    public imgSource2: string;
    public isBusy: boolean;
    public images: Array<any>;
    public image1: viewModule.View;
    public image2: viewModule.View;
    public backColor: colorModule.Color;
    public indicatorColor: colorModule.Color;
    public backOpacity: number;
    public indicatorOpacity: number;

    private stateSwitch: boolean;
    private image1Exit: animationModule.Animation;
    private image2Exit: animationModule.Animation;
    private image1Enter: animationModule.Animation;
    private image2Enter: animationModule.Animation;
    private image1Transition: animationModule.Animation;
    private image2Transition: animationModule.Animation;

    private index = 0;

    constructor() {
        super();
        this.images = [];
        this.indicatorColor = new colorModule.Color("red");
        this.backColor = new colorModule.Color("black");

        timer.setInterval(() => this.onSwitchIntervalElapsed(), TRANSFORM_ANIMATION_DURATION + 100);
    }

    init() {
        this.image1Exit = this.image1.createAnimation({
            opacity: 0,
            scale: { x: 0.5, y: 0.5 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });
        this.image1Enter = this.image1.createAnimation({
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });
        this.image2Exit = this.image2.createAnimation({
            opacity: 0,
            scale: { x: 0.5, y: 0.5 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });
        this.image2Enter = this.image2.createAnimation({
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: TRANSFORM_ANIMATION_DURATION,
            curve: enums.AnimationCurve.easeInOut
        });

        this.image1Transition = this.createTransitionAnimationForView(this.image1);
        this.image2Transition = this.createTransitionAnimationForView(this.image2);
    }

    createTransitionAnimationForView(view: viewModule.View) {
        var definitions = new Array<animationModule.AnimationDefinition>();

        var rotationStates = [15, -15, 0];

        rotationStates.forEach((value) => {
            var animation: animationModule.AnimationDefinition = {
                target: view,
                rotate: value,
                duration: ROTATE_ANIMATION_DURATION / rotationStates.length,
                curve: enums.AnimationCurve.easeOut
            };
            definitions.push(animation);
        });

        return new animationModule.Animation(definitions, true);
    }

    onSwitchIntervalElapsed() {
        this.index = this.index + 1 < this.images.length ? this.index + 1 : 0;

        if (this.stateSwitch) {
            this.set("imgSource2", this.images[this.index]);

            this.image2Enter.play();
            this.image1Exit.play();
            this.image1Transition.play();

        } else {
            this.set("imgSource1", this.images[this.index]);

            this.image1Enter.play();
            this.image2Exit.play();
            this.image2Transition.play();
        }

        this.stateSwitch = !this.stateSwitch;
    }
}