# visible-height-css

![npm type definitions](https://img.shields.io/npm/types/typescript)

Its like css' `vh` but _working_. `vh` stands for 'viewport height' when most often we care about the visible height. Things like menu bars in mobile browsers dont affect `vh` while we often want to take them into consideration. See the [demo](https://shilangyu.github.io/visible-height-css) (on a mobile browser with a menu bar) to see the difference.

### install

```sh
npm i visible-height-css
```

### usage

This will set a [css var](https://developer.mozilla.org/en-US/docs/Web/CSS/var) named '--vih'. If no string is passed, defaults to '--visible-height'.

```js
import { setVisibleHeight } from 'visible-height-css'

setVisibleHeight('vih')
```

Then use it in css

```css
.my-super-class {
	height: calc(100 * var(--vih, /*fallback*/ 1vh));
}
```
