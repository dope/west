West
====

West is a slide-in navigation with gesture support on mobile & tablet. It is also browser compatible and is incredibly lightweight and easy to install. View it live [here](http://dope.github.io/west)

# Installation
The installation is not hard, if you literally have basic HTML & CSS knowledge, you will be fine. First you need to download the [master](https://github.com/dope/west/archive/master.zip) and link your stylesheets and scripts.

```
<link rel="stylesheet" type="text/css" href="css/west.css">
<script src="js/west.js" type="text/javascript"></script>
```

In order for this to work, you'll need to link jQuery — You can either do this by downloading the libraries from the [jQuery](http://jquery.com) website or link them direct:
```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.min.js"></script>
```

Once your scripts are set up, you need to create your ```html``` document. I would reccomend putting the ```.trigger``` at the top of your page, just below the opening ```<body>```
```
<button class="nav-btn">&#9776;</button>
```
Next is the actual navigation itself.
```
<nav class="navWrap">
	<button data-role="none" class="trigger">&#9776;</button>
	<ul class="mainList">
		<li><a href="#">Menu Item</a></li>
		<li><a href="#">Menu Item</a></li>
		<li><a href="#">Menu Item</a></li>
		<li><a href="#">Menu Item</a></li>
		<li><a href="#">Menu Item</a></li>
		<li><a href="#">Menu Item</a></li>
	</ul>
</nav>
```

# That's it.
It's that simple, if you have any issues or questions: [tweet me](http://twitter.com/joericho)
