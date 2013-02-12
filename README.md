jQuery-Knob-Countdown
=====================
* A simple, amazing jQuery countdown timer, visualized with jQuery Knob (aterrien/jQuery-Knob). Dates can be supplied in "DD-MON-YEAR-TIME" format (like "19 April 2013 16:24:00").
* The plugin is modular, and can be adapted to fit almost any needs.
* Lightweight & fast
* Incredibly accurate
* Cookie / Session free (harder to break, no problems with clearing cache)
* Can be easily used to trigger a server-side event, for example, to execute a function when the countdown reaches zero.

---
###Example:

The Markup required to create a knob element:

```HTML```
  <section class="countdown">
  <input class="knob" id="days" data-min="0" data-max="365">
  <input class="knob" id="hours" data-min="0" data-max="24">
  <input class="knob" id="mins" data-min="0" data-max="60">
  <input class="knob" id="secs" data-min="0" data-max="60">
  </section>
````

The javascript required to apply the countdown plugin to that specific `.countdown` element:

```javascript```

$('.countdown').countdown( { date: '19 April 2013 16:24:00' } );

````
