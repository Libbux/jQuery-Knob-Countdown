#jQuery-Knob-Countdown
---
* A simple, *amazing* jQuery countdown timer plugin, visualized with jQuery Knob ([aterrien/jQuery-Knob] (http://github.com/aterrien/jQuery-Knob)). Dates can be supplied in `"DD-MON-YEAR-TIME"` format (like `19 April 2013 16:24:00`).
* The plugin is modular, and can be adapted to fit almost any needs.
* Lightweight & fast
* Incredibly accurate
* Cookie / Session free (harder to break, no problems with clearing cache)
* Can be easily used to trigger a server-side event, for example, to execute a function when the countdown reaches zero.

##Example
=====================

The Markup required to create a knob element:

```HTML
  <section class="countdown">
  <input class="knob" id="days" data-min="0" data-max="365">
  <input class="knob" id="hours" data-min="0" data-max="24">
  <input class="knob" id="mins" data-min="0" data-max="60">
  <input class="knob" id="secs" data-min="0" data-max="60">
  </section>
````

The javascript required to apply the countdown plugin to that specific `.countdown` element:

```javascript

$('.countdown').countdown( { date: '19 April 2013 16:24:00' } );

````
Note: Date is parsed by jQuery, and must be supplied in the format shown in the example above.

##Contributers
====================
If your fork of the plugin gets pulled back in, I'll add you to this list.
* [Jonathan Libby] (http://github.com/TheLibbster) - Everything so far!
* Countdown logic based on example by [TheNewBoston] (http://www.youtube.com/user/thenewboston)

##License
=====================
© Jonathan Libby 2013.

This work is licensed under the GPL v3 (``gpl.txt``).

    jQuery-Knob-Countdown is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    jQuery-Knob-Countdown is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with jQuery-Knob-Countdown.  If not, see <http://www.gnu.org/licenses/>.
## Contact
=====================
* Feel free to contact for help, or if you have questions, concerns, or comments. I'll get back to you as soon as I can.
* I can be reached for specific help topics directly at [j@thelibbster.com] (mailto:j@thelibbster.com?Subject=jQuery-Knob-Countdown%20on%20GitHub&Body=Hello%2C%20I%20have%20a%20question%2C%20comment%2C%20or%20concern%20about%20jQuery-Knob-Countdown%20on%20GitHub%3A%0A%0A%0AThanks%21).
