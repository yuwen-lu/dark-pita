# Dark Pita

Dark Pita stands for Dark Pattern Intervention for Transparency and Awareness. A chrome extension aiming at intervention for dark patterns on websites.

## Build Setup

```bash
# install dependencies
$ yarn

# build in dev mode
$ yarn dev

# build for production
$ yarn build
```

## Testing locally on Chrome

In order to test the package holding the extension in Chrome we need to:

1. Go to `chrome://extensions/` page.
2. Toggle `Developer mode` ON.
3. Select `Load Unpacked`.
4. Select the `/dist` directory.

## Adding a new UI alternative

1. Create or Go to the folder named by the site in `src/contents/components`.
2. Create a new folder named by your target dark pattern, e.g. `amazon/buy_now`.
3. Create a new file named by your alternative design, e.g. `/buy_now/amazon_buy_now_hide.vue`.
4. Copy the following to the new file.

```javascript
<template>
  <div></div>
</template>
<script>
export default {
  data() {},
  mounted() {
    this.emitter.on('template', (massage) => {
      if (massage === 'on') {
        console.log('template on');
        this.$emit('update');
      } else if (massage === 'off') {
        console.log('template off');
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
```

5. add the name of your targeted dark pattern in `data() {}` of `src/contents/App.vue`.

```javascript
targetNames: {
  ...,
  amazon_buy_now: false
}
```

6. Import your alternative in `src/contents/App.vue`.

```javascript
// Action components
import amazon_buy_now_hide from '@/contents/components/amazon/buy_now/amazon_buy_now_hide.vue';
```

7. Register your alternative in `src/contents/App.vue`.

```javascript
components: {
  ...,
  amazon_buy_now_hide
}
```

8. Add your alternative in `src/contents/App.vue` template.

```javascript
<template>
  <div id="DP_wrapper" :key="reload">
    ...
    <amazon_buy_now_hide
      v-if="targetNames.amazon_buy_now"
      @update="generateOverviewOverlay"
    />
  </div>
</template>
```

9. Add your alternative in `data() {}` of `src/contents/components/basic/Action.vue`.

```javascript
interventionState: {
  ...
  amazon_buy_now_hide: 'off'
}
```

10. Add your alternative in `alterIntervention(index)` of `src/contents/components/basic/Action.vue`.

```javascript
alterIntervention(index) {
  ...
  else if (this.intervention.component === 'amazon_buy_now_hide') {
    this.emitter.emit('amazon_buy_now_hide', 'on');
  }

  ...
},
```

11. Now you can develop your alternative and test it by choosing and selecting in the action panel after you build and add the extension to Chrome.

:exclamation:Note: the name of your targeted dark pattern (e.g. amazon_buy_now) and the name of your alternatives for it (e.g. amazon_buy_now_hide) should be kept same across all files, including `index.js`, `App.js`, and `Action.js`.

## Adding a new site

1. Add relevant information about the target site and the dark patterns on it in `src/contents/index.js`.
2. Add the target site in `src/manifest.json`.

```json
"content_scripts": [
  {
    "matches": [
      "https://tailwindcss.com/*",
      "https://twitter.com/*",
      "https://www.amazon.com/*"
    ],
    "js": ["contents/main.js"]
  }
],
```

3. Add the selector and import the information in `src/contents/App.vue`

```javascript
// Define the identifier
if (url.search(/tailwindcss.com/) !== -1) {
  this.website = 'tailwind';
  this.info = INDEX.tailwind;
} else if (url.search(/twitter.com/) !== -1) {
  this.website = 'twitter';
  this.info = INDEX.twitter;
} else if (url.search(/amazon.com/) !== -1) {
  this.website = 'amazon';
  this.info = INDEX.amazon;
}
```

```javascript
// Set the selector
if (this.website === 'tailwind') {
  element = document.getElementById(this.targets[i]);
} else if (this.website === 'twitter') {
  element = document.querySelector('[aria-label="' + this.targets[i] + '"]');
} else if (this.website === 'amazon') {
  element = document.querySelectorAll('[id^=' + this.targets[i] + ']')[0];
}
```
