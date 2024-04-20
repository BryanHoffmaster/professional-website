# Just a list of things to get done on this project at a high level overview

1. Introduction/splash page
2. Build/version numbering on bottom footer (about page maybe?)
3. Contact Page
   1. Links to Github page, linkedIn Page
4. Blog page
   1. Post about getting back into the saddle?
   2. Post about what's new in Angular versions? Seems like a nice way to get clicks and recognition (at least a little bit)
5. Projects Page 
   1. Component library 
   2. Ionic Mobile Apps

### The goal of the following TODOs is to promote my knowledge of intricate details that matter to those who wish to hire me and those who wish to know more about what I can offer.

* [ ] Push this project up to GitHub for src code management
* [x] light/dark mode (still needs work but foundation is set)
* [x] Fonts/Typography - Setup Second (still needs work but foundation is set)
* [ ] Test VERY SLOW connections speed and see if pager flickers when the theme changes - theres a video you have somewhere saved to fix this issue and I have a strong feeling you didn't set it up right the first time.
* [ ] Setup some more font types of both serif and not serif versions - *MAKE SURE YOU CAN'T SELECT A NON SERIF FONT WITH A SERIF FONT TYPE*!
* [ ] Theme - Do theme-ing *after* setting up a coherent **main** theme.
* [ ] Idea for Projects page -> Parallax photo (Forest trees looking up) to project the "forrest for the trees" kind of vibe.
* [ ] Switchable themes/fonts? Seems like a fun idea for showing off skill set.
* [ ] Get a favicon going
* [ ] Project idea - Theme builder for Angular Project/website - Color picker on components and then you build it out.
* [ ] Setup your website for i8lly 
* [ ] Setup your website to utilize internationalization (all possible through translate?) and have it run in multiple languages!
* [ ] Add quotes from previous supervisors (maybe fib one from your mom about something silly) and make it look like people are really saying them about you on your about(?) page. I.e something from Mark at Coyote in your LinkedIn quotes.
  * [ ] Funny ones? "Your stuff, but *FASTER*!" :D
* [ ] "This web app is happily made with Angular and Ionic" and then have a list of other tech stack info about the project. *not sure where to put this yet*.
* [ ] Fun animations section, and also embedded into components all around your web apps for that sweet 240hz effect.
  * [ ] Test what it's like when a component does **all** of it's animations at a slower speed and see what it's grow/shrink animations look like vs. the rest of the web app.
* [ ] Setup a logging service to catch and handle errors, especially ones that bubble up to root level!
* [ ] Loading Spinner using Signals! [Here is a link to a website demo](https://medium.com/@KkambizZ/angular-16-signals-explained-with-five-examples-6b773a12c974)


### CSS COLORS
The following should needs to be implemented, not sure how to flip these on the fly, will need to use some SCSS @mixins or something
to smoothly do this. There is a *manual* way for each of these that you would have to code each for, but I think you can @use these at
the root level, after giving each of these a name to reference (in the body element attr) and then propagate these into their respective components...maybe.

NOTE: Sass:map (map.get() or .map_get())  [here is the link](https://sass-lang.com/documentation/modules/map/) also [check out how they do it with material](https://v5.material.angular.io/guide/theming-your-components) for inspiration

