# AlMainAlert
Really simple jQuery drop down alert plugin being used on a few different websites. Pulled out for hosting on a single domain to aid updating it across multiple platforms.

## Getting Started

Add to the head of the HTML file, adjust paths accordingly

```
<script src="alMainAlert/alMainAlert.js"></script>
<link rel="stylesheet" type="text/css" href="alMainAlert/css/alMainAlert.css" />
```

## How to use

### Standard alert with a message

```
$.alMainAlerts({message: 'Hello World'});
```

### Applying a style

```
$.alMainAlerts({message: 'Hello World', class: 'alMainAlertError'});
```

Default Styles

```
Alert (default): alMainAlert
Error: alMainAlertError
```

### Type (Display)

There are two types, overlay is used by default. You can specify "block" if you do not want the alert to appear on top of anything else.

```
$.alMainAlerts({message: 'Hello World', type: 'block'});
```

Strongly suggest you do not mix block with overlay or risk message alerts stacked on top of each other.

## Things To Do When / If Needed

* Option to have the message disappear after a certain amount of time. Prehaps with a fade
* Box style notifications instead
* Add option for onscroll alerts that appear as a block at the top but will scroll with the page.
