
![alt tag](https://raw.github.com/jh3y/pics/master/tips/tips.png)

CSS tooltips with minimal effort!

##Example

    <a data-tip="true" data-tip-content="I'm a tooltip!" class="tip--top"></a>

Tooltips shouldn't be complicated and they shouldn't do more than what's absolutely necessary. If your tooltips need to do more than just supply a small snippet of info then consider your design or consider using something like a popover component instead maybe.

##No JavaScript required!
Tooltips should be simple and as such, so is this implementation.

By default `tips` will work on `hover` when viewing from a desktop environment.

On mobile devices, due to the nature of how `hover` behaves, tapping will work to show and hide `tips`.

If you do want to use javascript to trigger the showing and hiding of `tips` you can do simply by toggling the class `tip--visible` on the element that has a tip.

    var tip = document.getElementById('myTip');
    tip.className += ' tip--visible';

Or with jQuery maybe

    $('#myTip').toggleClass('tip--visible');

##How to use
1. Simply add `data-tip` as an attribute to your element.
2. Add its content with the `data-tip-content` attribute.
3. Add helper classes to position and size your tip.

##Helper classes
* `tip--top`: position top
* `tip--right`: position right
* `tip--bottom`: position bottom
* `tip--left`: position left
* `tip--small`: small width
* `tip--large`: large width
* `tip--visible`: show tip

##How does this work?
`tips` is simply taking advantage of pseudo elements `:before` and `:after`.

##How do I change the colors? sizes? etc.
`tips` is available in both `less` and `scss` versions and has various variables for things like color and size that can be changed. There are two sizing helper classes included for `small` and `large` tips.

All sizing is also recalculated into `rem`. This means that if you change the base font size for your document, tips and their contents will scale accordingly. If you wish to not use `rem`, the mixin/function for less/scss/styl can be altered for this or if needed I can publish a pixel version.

I use `gulp` as my task runner and therefore there are gulp tasks already written for getting up and running with a static livereload server that will watch your source files and compile them when necessary. The default task will do this and watch `styl` files.

To get up and running with development (assuming you have npm and gulp cli installed).

1.Clone the repo

    git clone https://github.com/jh3y/tips.git

2.Install dependencies

    npm install

3.Start hacking away!

##Contributing
As always any suggestions etc. are welcome!
Tweet me @ `_jh3y` or submit an issue!

##License
MIT

__@jh3y__
