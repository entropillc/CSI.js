CSI.js - Client Side Includes
=============================

CSI.js allows you to include inline HTML within another page using standard
SSI (Server Side Includes) directives from the client-side. This is especially
helpful when developing large SPAs (Single Page Applications) in a development
environment where you may not have access to a local web server with SSI
capabilities.

Usage
-----

Simply include the JavaScript with jQuery:

``` html
<script src="jquery-1.7.2.js"></script>
<script src="csi.js"></script>
```

Then, use an SSI directive to include an external HTML file:

``` html
<!--#include virtual="some-external-content.html" -->
```

License
---------------------
Copyright 2012 Entropi Software, LLC.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
