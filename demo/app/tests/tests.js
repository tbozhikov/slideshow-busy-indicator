var SlideshowBusyIndicator = require("nativescript-slideshow-busy-indicator").SlideshowBusyIndicator;
var slideshowBusyIndicator = new SlideshowBusyIndicator();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(slideshowBusyIndicator.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(slideshowBusyIndicator.greet()).toEqual("Hello, NS");
  });
});