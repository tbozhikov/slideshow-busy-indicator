import observable = require("data/observable");
import view = require("ui/core/view");
import label = require("ui/label");

var count = 0;
// export function buttonTap(args: observable.EventData) {
//     count++;

//     var parent = (<view.View>args.object).parent;
//     if (parent) {
//         var lbl = <label.Label>view.getViewById(parent, "Label1");
//         if (lbl) {
//             lbl.text = "You tapped " + count + " times!";
//         }
//     }
// }