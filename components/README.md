### common components in project
> `Nuxt` will auto-import *.vue file as global component，so that our pages or components could use directly without import them in script node!!
> But I use my custom setting for global components where and how to auto-imported, browse the setting below:
```typescript
export default defintNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components/global']
  }
})
```
✨ As the several setting defined in `nuxt.config.ts`, I had changed the global components directory to `/components/global`, which meant the *.vue file in `/components/global` will be auto-imported in project!!

### global and business components description

#### global components
1. TopActivityBlock: the top banner defined at the top of page!
2. KbInput: the common input which has custom ui interface and interact, and with auto clear icon when it is focused!

#### business components
> this directory divide into several parts, there are global bussiness component in the root directory, and in the sub directory they are different modules!

**As Below they are diferent business modules in project**
+ mall: components in mall pages
  - MallSearch: top header component that supply quickly search in mall which on the top of mall;
  - CategoryBanner: with cateory and banner in project;

**As Below they are global component**
1. MeachentsFooter: ask merchant to settled in mall, become a seller who make deal in mall!
2. TopNav: a quick block on the top of screen, which supply quickly functions jump!