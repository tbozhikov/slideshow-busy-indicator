
# Nativescript-slideshow-busy-indicator

This plug-in allows you to easily create a busy indicator like the one illustrated (loader) using a set of images that you provide. What it does is cycle through them with a nice transition.

![Sample Android](screenshots/screencast.gif)

## Prerequisites

This plug-in requires a set of images that will be used to be cycled through. The format can be any format that the [NS Image module](https://docs.nativescript.org/cookbook/ui/image) supports. For best looks icon-like images with transparency (.PNG) do the job. See demo.  

## Installation

```
npm install nativescript-slideshow-busy-indicator
```

## Usage

You will have to add `xmlns:indicator="nativescript-slideshow-busy-indicator"` namespace to your page tag, and then simply use `<indicator:BusyIndicator/>` in order to add the widget to your page.

The must-set properties are:
images - set this property to an array strings that represent paths to the images you would like to display
isBusy - when set to true, the indicator is visible, when false - it is not

Customization properties: 
backOpacity
backColor
indicatorOpacity
indicatorColor
indicatorHeight
indicatorWidth
indicatorBorderRadius

A few examples:

![Sample Android](screenshots/screencast.gif)

Code samples in order of appearance:

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
xmlns:rt="nativescript-rich-textfield">
  <StackLayout >

    <rt:RichTextField icon="0xf123" height="60" iconColor="red" fieldHintColor="red" fieldPaddingLeft="20" textPaddingLeft="80" fieldPaddingRight="90" fieldBackgroundColor="transparent"/>

    <rt:RichTextField icon="&#xf099;" iconSize="20" iconColor="rgba(240,248,255,1)" fieldHint="Twitter Hint"
     height="60" style="background-color:rgba(30,144,255,1)" fieldBorderColor="rgba(255,255,255,1)" fieldBottomBorderWidth="2"/>

    <rt:RichTextField icon="&#xf262;" fieldBorderColor="rgba(212,175,55,1)" fieldColor="rgba(138,43,226,1)" fieldHeight="50" height="50" fieldBottomBorderWidth="4"
     fieldTopBorderWidth="4" iconColor="rgba(138,43,226,0.8)" fieldHintColor="rgba(138,43,226,0.6)" style="background-color:rgba(255,223,0,1);margin-top:10;" />

    <rt:RichTextField icon="&#xf17b;" fieldBorderColor="rgba(124,252,0,1)" fieldHeight="45" height="45" fieldTopBorderWidth="3" iconColor="rgba(173,255,47,1)" 
     style="background-color:rgba(34,139,34,1);margin-top:10;margin-bottom:10;" fieldColor="rgba(34,139,34,1)" />

     <rt:RichTextField iconSize="15" icon="&#xf028;" iconColor="rgba(1,1,1,1)" style="margin-bottom:10;" fieldBackgroundColor="red" fieldBorderColor="white" fieldBorderWidth="3" 
      fieldHint="Volume value Hint" fieldHintColor="rgba(1,1,1,0.6)" fieldHeight="45" width="90%" />

    <rt:RichTextField icon="&#xf007;" fieldLeftBorderWidth="8" width="80%" fieldHint="Username" fieldPaddingLeft="34" />

    <rt:RichTextField icon="&#xf13e;" fieldLeftBorderWidth="4" fieldRightBorderWidth="4" width="80%" fieldHint="Password" />

  </StackLayout>
</Page>
```
## API

RichTextField attributes:

| Attribute | Description |
| ------ | ------ |
| icon| can be code value from http://fontawesome.io/cheatsheet/ (e.g. `&#xf123;`) or hex representation (e.g. `0xf123`)
| fieldHeight| height of the field (e.g. `50`)
| fieldColor| text color of the field. The value can be known color name or rgba (red/green/blue/alpha) representation  (e.g. `"red"` or `"rgba(34,139,34,0.8)"`). Alpha value can be in the range `0-1` the rest can be `0-255`.
| fieldPaddingLeft| left hand side space to the parent element (e.g. `"50"`)
| fieldPaddingRight| right hand side space to the parent element (e.g. `"50"`)
| textPaddingLeft| the distance between the icon and the text/hint of the field (e.g. `"50"`)
| fieldBackgroundColor| background color of the field (e.g. `"red"` or `"rgba(34,139,34,0.8)"`)
| iconColor| icon color (e.g. `"red"` or `"rgba(34,139,34,0.8)"`)
| fieldHint| string value of the field hint (e.g. `"Custom Hint"`)
| iconSize| icon size (e.g. `"20"`)
| fieldHintColor| color value of the hint text (e.g. `"red"` or `"rgba(34,139,34,0.8)"`)
| fieldBorderColor| color value of the border (e.g. `"red"` or `"rgba(34,139,34,0.8)"`)
| fieldBorderWidth| border width (e.g. `"2"`). Setting this applies all sides border.
| fieldLeftBorderWidth| left side border width (e.g. `"2"`). Setting this applies only left side border.
| fieldRightBorderWidth| right side border width (e.g. `"2"`). Setting this applies only right side border.
| fieldTopBorderWidth| top side border width (e.g. `"2"`). Setting this applies only top side border.
| fieldBottomBorderWidth| bottom side border width (e.g. `"2"`). Setting this applies only bottom side border.

## License

Apache License Version 2.0, January 2004
