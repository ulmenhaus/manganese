# Manganese: A browser for the web app age

## Why another browser?

- Live in an age where traditionally native apps are on the web
- We don't need a way to "surf the web" anymore

## Features

### Minimal UI

- Tob bar slides down to reveal your spaces
- Left bar slides to reveal your pages
- Right bar slides to reveal your stream

### Developer Friendly

- Configured in yaml
- All data (bookmarks) are human-readable and version controllable

### Lets you Focus

- Removes the clutter
- Keeps track of how you spend your time by writing JSON to an event stream
  - tab switched
  - went active/inactive
  - side-bar hidden
  - notification received


## How I use it

* Use gmail with keyboard shortcuts enabled and hack to remove sidebar
* Example yaml

```yaml
spaces:
  workspace:
    default: true
    icons:
      major: ...
      minor: ...

  news:
    icons:
      major: ...
      minor: ...
    autorefresh: 5m
    pages:
      ...

  chats:
    pages:
      docker_slack:
        icons:
          major: ...
          minor: ...
      uhaus_slack: ...
      telegram: ...
      whatsapp: ...
```

* This plus a terminal running tmux should take care of 99% of my interractions with my computer

# Prototype

- Support multiple pages with key combo
- Add page with hard-coded pages
- Support hide-show sidebar
- Add/Close page
- Add space bar with hard-coded spaces (Chasper read? #666666?)
- Configurage spaces and pages in yaml
- Hack gmail to remove sidebar
- README with screenshots

# MVP

- Bookmakrs
- URL autocompletion
- Notification support (maybe have support for "hidden" pages so you can write your own apps that just provide notifications)
