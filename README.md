West
====

West is a slide-in navigation with gesture support on mobile & tablet. It is also browser compatible and is incredibly lightweight and easy to install. View it live [here](http://dope.github.io/west)

# Installation
The installation is not hard, if you literally have basic HTML & CSS knowledge, you will be fine. First you need to download the [master](https://github.com/dope/west/archive/master.zip) and link your stylesheets and scripts.

```
<link rel="stylesheet" type="text/css" href="css/west.css">
<script src="js/west.js" type="text/javascript"></script>
```

In order for this to work, you'll need to link jQuery — You can either do this by downloading the library from the [jQuery](http://jquery.com) website or link them direct:
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

Once your scripts are set up, you need to create your ```html``` document.

Next is the actual navigation itself.
```
<nav class="site-menu js-menu">
    <span class="site-menu__trigger js-trigger"></span>
    <ul class="site-menu__nav">
        <li class="site-menu__list"><a href="#" class="site-menu__link">List Item</a></li>
        <li class="site-menu__list"><a href="#" class="site-menu__link">List Item</a></li>
        <li class="site-menu__list"><a href="#" class="site-menu__link">List Item</a></li>
        <li class="site-menu__list"><a href="#" class="site-menu__link">List Item</a></li>
        <li class="site-menu__list"><a href="http://github.com/dope/west" class="site-menu__link">GitHub Project</a></li>
        <li class="site-menu__list"><a href="http://twitter.com/joericho" class="site-menu__link">@joericho</a></li>
    </ul>
</nav>
```

# That's it.
It's that simple, if you have any issues or questions: [tweet me](http://twitter.com/joericho)
