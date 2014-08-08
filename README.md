tips
===
CSS tooltips with minimal effort!

![alt tag](https://raw.github.com/jh3y/pics/master/tips/tips.gif)

##example

    <a data-tip="true" data-tip-content="I'm a tooltip!" class="top"></a>

Tooltips shouldn't be complicated and they shouldn't do more than what's absolutely necessary. If your tooltips need to do more than just supply a small snippet of info then consider your design or consider using something like a popover component instead maybe.

##no js required
Tooltips should be simple and as such, so is this implementation.

By default `tips` will work on `hover` when viewing from a desktop environment.

On mobile devices, due to the nature of how `hover` behaves, tapping will work to show and hide `tips`.

If you do want to use javascript to trigger the showing and hiding of `tips` you can do simply by toggling the class `show` on the element that has a tip.

    var tip = document.getElementById('myTip');
    tip.className += ' show';

Or with jQuery maybe

    $('#myTip').toggleClass('show');

##how to use
1. Simply add `data-tip` as an attribute to your element.
2. Add its content with the `data-tip-content` attribute.
3. Add helper classes to position and size your tip.

##helper classes
* `top`: position top
* `right`: position right
* `bottom`: position bottom
* `left`: position left
* `small`: small size
* `large`: large size

##how does this work?
`tips` is simply taking advantage of pseudo elements `:before` and `:after`.

##how do I change the colors? sizes? etc.
`tips` is available in both `less` and `sass` versions and has various variables for things like color and size that can be changed. There are two sizing helper classes included for `small` and `large` tips.

I use `gulp` as my task runner and therefore there are gulp tasks already written for getting up and running with a static livereload server that will watch your source files and compile them when necessary. The default task will do this and watch `less` files.

To get up and running with development (assuming you have npm and gulp cli installed).

1.Clone the repo

    git clone https://github.com/jh3y/tips.git

2.Install dependencies

    npm install

3.Start hacking away!

##contributing
As always any suggestions etc. are welcome!
Tweet me @ `_jh3y` or submit an issue!

##license
MIT

__@jh3y__
