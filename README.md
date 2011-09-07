# 55 Minutes CSS3/HTML5 Foundation #

The 55 Minutes foundation is a [Compass](http://compass-style.org/ "Compass Home | Compass Documentation")-based CSS3/HTML5 project template for crafting modern web applications in Rails, Django and Wicket.

The project requires [Ruby](http://www.ruby-lang.org/en/) and [RubyGems](http://rubygems.org/), as well as the [compass](https://github.com/chriseppstein/compass) and [compass-colors](https://github.com/chriseppstein/compass-colors) gems.

## Feature Highlights ##

* A fluid, responsive layout following the principles of [Responsive Web Design](http://www.abookapart.com/products/responsive-web-design "A Book Apart, Responsive Web Design").
* Best practices recommended by the [320 and Up](http://stuffandnonsense.co.uk/projects/320andup/ "320 and up") boilerplate project, as well as our own experience developing web applications.
* Integration with the [jQuery](http://jquery.com/ "jQuery: The Write Less, Do More, JavaScript Library"), [jQuery UI](http://jqueryui.com/ "jQuery UI - Home") and [Modernizr](http://www.modernizr.com/ "Modernizr") JavaScript libraries, as well as 55 Minutes' own set of JS utilities and conveniences.
* A style guide similar to the [Twitter bootstrap](http://twitter.github.com/bootstrap/ "Bootstrap, from Twitter") containing examples of the default styles defined in the project.

## Getting Started ##

Once you've got Ruby, RubyGems, compass and compass-colors installed, all you need to do is change into the <code>css3-foundation/styles/</code> directory in your favorite terminal application and type <code>compass watch</code>. This will monitor changes to your source files and recompile the output on demand. To compile the code one time only, type <code>compass compile</code>. More details can be found in the [Compass documentation](http://compass-style.org/reference/compass/ "Compass Core Framework | Compass Documentation").

## File organization ##

Files in this project are organized into directories like so:

    css3-foundation/
      styles/
        basics/
        shared/
      styles-compiled/
      scripts/
        lib/

Please refer to individual source files for details on what should be included there, but here are some general guidelines for file organization:

* **styles/** contains the Sass source files. We use the SCSS syntax for this project.
    * **styles/basics/** contains the building blocks of our styles: the colors, the typography, the grid, and the reset stylesheet.
    * **styles/shared/** contains application-wide styles like header, footer and form styles. Default styles for the basic HTML tags should also be included here.
* **styles-compiled/** contains the compiled stylesheets, the CSS files that we will include in our markup.
* **scripts/** contains all of the project's JavaScript files. Put custom JavaScript at the top level of this directory.
    * **scripts/lib/** contains libraries like jQuery and Modernizr.

## CSS rule organization ##

A single CSS rule set can quickly grow large and unwieldy, so to promote ease of reading, we recommend following a prescribed order for writing your CSS rules. In general, we work from the outside in, from layout to text:

    selector
    {
      /* Display and positioning */
      display: …;
      visibility: …;
      position: …;
      top: …;
      right: …;
      bottom: …;
      left: …;
      z-index: …;
      float: …;
      clear: …;
      /* Box model/layout */
      margin: …;
      outline: …;
      border: …;
      padding: …;
      width: …;
      min-width: …;
      max-width: …;
      height: …;
      min-height: …;
      max-height: …;
      overflow: …;
      /* Alignment */
      vertical-align: …;
      text-align: …;
      /* Background/foreground color */
      background: …;
      color: …;
      /* Text properties */
      font-family: …;
      font-size: …;
      line-height: …;
      font-style: …;
      font-variant
      text-decoration: …;
      text-indent: …;
      text-transform: …;
      letter-spacing: …;
      word-spacing: …;
      list-style: …;
      white-space: …;
    }

