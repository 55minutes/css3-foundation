# 55 Minutes CSS3/HTML5 Foundation #

This project is a [Compass](http://compass-style.org/ "Compass Home | Compass Documentation")-based CSS3/HTML5 template for crafting modern web applications. We're particularly focused on establishing patterns that work well with server-side frameworks like Rails, Django and Wicket.

To use this project, the following must be installed on your computer:

* [Ruby](http://www.ruby-lang.org/en/)
* [RubyGems](http://rubygems.org/)
* [Bundler](http://gembundler.com/)
* [compass gem](https://github.com/chriseppstein/compass)
* [compass-colors gem](https://github.com/chriseppstein/compass-colors)
* [sassy-buttons gem](https://github.com/jhardy/Sassy-Buttons)

## Feature Highlights ##

* A fluid, responsive layout following the principles of [Responsive Web Design](http://www.abookapart.com/products/responsive-web-design "A Book Apart, Responsive Web Design").
* Best practices recommended by the [320 and Up](http://stuffandnonsense.co.uk/projects/320andup/ "320 and up") boilerplate project, as well as our own experience developing web applications.
* Integration with the [jQuery](http://jquery.com/ "jQuery: The Write Less, Do More, JavaScript Library"), [jQuery UI](http://jqueryui.com/ "jQuery UI - Home") and [Modernizr](http://www.modernizr.com/ "Modernizr") JavaScript libraries, as well as 55 Minutes' own set of JS utilities and conveniences.
* A style guide similar to the [Twitter bootstrap](http://twitter.github.com/bootstrap/ "Bootstrap, from Twitter") containing examples of the default styles defined in the project.
* The [1140 CSS grid](http://cssgrid.net "The 1140px CSS Grid System &middot; Fluid down to mobile") for rapid prototyping.

## Getting Started ##

1. Install Ruby, RubyGems and Bundler, or verify that they are already installed. 
2. Change into the <code>css3-foundation/</code> directory in your favorite terminal application and type <code>bundle install</code>.
3. Once the dependencies have been installed, regenerate the sassy-buttons mixin file:

        bundle exec compass install -r sassy-buttons -f sassy-buttons

    Note that <code>bundle exec</code> ensures that any command you type after it is executed within the context of the bundle; in our case this means that the versions of Compass, etc. that we specifically required are being used.
4. Steps 1-3 are one-time-only setup requirements. Hereafter, all you need to do is run the following command from <code>css3-foundation/</code>:

        bundle exec compass watch

    This will monitor changes to your source files and recompile the output on demand. To compile the code one time only, type:

        bundle exec compass compile

    More details can be found in the [Compass documentation](http://compass-style.org/reference/compass/ "Compass Core Framework | Compass Documentation").

    If you're interested in using this foundation with the [Apache Wicket](http://wicket.apache.org/) framework, you'll want to check out our [fiftyfive-wicket](https://github.com/55minutes/fiftyfive-wicket) project, which includes a Maven archetype that bundles all of these CSS3 and HTML5 practices and integrates them nicely with Wicket.

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
      clear: …;
      float: …;

      /* Transforms and animations */
      transform: …;
      animation: …;
      transition: …;

      /* Box model/layout */
      box-*: …;
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
      clip: …;
      resize: …;
      table-layout: …;

      /* Alignment */
      vertical-align: …;
      text-align: …;

      /* Background/foreground color */
      background: …;
      color: …;
      opacity: …;

      /* Text properties */
      font-family: …;
      font-size: …;
      line-height: …;
      direction: …;
      font-style: …;
      font-variant
      text-decoration: …;
      text-indent: …;
      text-transform: …;
      letter-spacing: …;
      word-spacing: …;
      word-break: …;
      word-wrap: …;
      quotes: …;
      page-break-*: …;
      list-style: …;
      white-space: …;
    }

This is of course not required; some teams prefer, for example, to alphabetize the rules instead. The important thing is that whatever your team chooses, there is a consistent, documented pattern.

