import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { HelloWorldModel } from './main-view-model';
// import { BusyIndicator } from 'nativescript-slideshow-busy-indicator';

var view = require("ui/core/view");
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    // var a = new BusyIndicator();
    // var stackLayout = view.getViewById(page, "root")
    // stackLayout.addChild(a);
}

