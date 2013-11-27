impress.js-utils
================

Some enhancements for impress.js.

##initialize impress.js-utils
put utils.js in your presentation folder and append this to your HTML:

    <script src="./utils.js" type="text/javascript"></script>
    <script type="text/javascript">var utils = new ImpressUtilities();</script>

##keymap
###description
This will enable keyboard interactivity. The following example will associate t with the slide #title, c with #criteria ...
###example
    utils.keymap({
        't':'title',
        'c':'criteria',
        's':'structure'
    });

##keymapMenu
###description
This will enable a menu that displays keyboard commands when pressing a hotkey. When the menu is active it will be given the CSS class active.
###example
[1] = Hotkey:

    utils.enableKeymapMenu(document.getElementById('utils-menu'), 1);