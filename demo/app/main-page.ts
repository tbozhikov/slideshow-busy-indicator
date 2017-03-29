import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { MainViewModel } from './main-view-model';

var view = require("ui/core/view");

export function pageLoaded(args: observable.EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = new MainViewModel();
}

