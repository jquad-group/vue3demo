# Vue 3 Features in Typescript following Vuemastery Videos

The Git Branches in this repository contain a **Typescript** implementation of the **Vue 3** features demonstrated in the Video Tutorials on the [Vuemastery](https://www.vuemastery.com/) website. 

## Content

| Video  | Git Branch | Description |
| ------------- | ------------- | ------------- |
| [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3)  | [intro-to-vue3-options-style](https://github.com/jquad-group/vue3demo/commits/intro-to-vue3-options-style)  | Intro to Vue3 in Typescript with the Options Style API|
| [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3)  | [intro-to-vue3-composition-style](https://github.com/jquad-group/vue3demo/commits/intro-to-vue3-composition-style)  | Intro to Vue3 in Typescript with the Composition Style API (Recommended over Options Style API) |

## How to use this Tutorial

1) Checkout this repo and start the application from the main Branch:

```
npm run serve
```

Find the App running on localhost:8080. 

2) Watch the Videos on Vuemastery and follow along by cherry-picking commits from the branches in this Repository

For example, start watching the video tutorial [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3). After you have seen the Video "2. Creating the Vue App", go to the Git Branch [intro-to-vue3-composition-style](https://github.com/jquad-group/vue3demo/commits/intro-to-vue3-composition-style) page and copy the ID of the commit "intro-to-vue3 step 2. Creating the Vue App". Then, cherry-pick it:

```
git cherry-pick 9640a786ec2db18cd30f6aa83105f7460957e1ef
```

You can seed the difference immediately on the App, running in your browser on localhost:8080. 

To see the code changes:
```
git diff origin/main
```

### Stay tuned! More Typescript Implementations are comming soon.
