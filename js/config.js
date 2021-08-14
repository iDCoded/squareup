class Config {
  constructor() {}

  getThemeMode() {
    const themeModes = {
      light: {
        name: "Light",
        icon: "light-mode",
      },
      dark: {
        name: "Dark",
        icon: "dark-mode",
      },
      auto: {
        name: "Auto",
        icon: "auto-mode",
        lightHour: "7",
        darkHour: "18",
      },
    };

    return themeModes;
  }

  getFontFamily() {
    const fontFamilies = {
      monospace:
        "Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace",
      "sans-serif": "Inter, SF Pro Text, Roboto, Open Sans, sans-serif",
      serif: "serif",
    };

    return fontFamilies;
  }

  getQuickSearchData() {
    const quickSearchData = {
      "r/": {
        urlPrefix: "https://reddit.com/r/",
      },
      "w/": {
        urlPrefix: "https://wikipedia.org/wiki/",
      },
      "u/": {
        urlPrefix: "https://unsplash.com/s/photos/",
      },
      "a/": {
        urlPrefix: "https://amazon.com/s?k=",
      },
      "e/": {
        urlPrefix: "https://ebay.com/sch/?_nkw=",
      },
      "y/": {
        urlPrefix: "https://youtube.com/results?search_query=",
      },
      "n/": {
        urlPrefix: "https://nhentai.net/g/",
      },
      "g/": {
        urlPrefix: "https://github.com/search?q=",
      },
    };

    return quickSearchData;
  }

  getSearchEngines() {
    const searchEngines = {
      startpage: {
        name: "Startpage",
        prefix: "https://www.startpage.com/do/dsearch?query=",
        icon: "startpage",
      },
      google: {
        name: "Google",
        prefix: "https://www.google.com/search?q=",
        icon: "google",
      },
    };

    return searchEngines;
  }

  getWebSites() {
    // Web menu
    // A list of websites that will be generated and put on the web menu
    const webSites = [
      {
        site: "Reddit",
        icon: "reddit",
        url: "https://reddit.com/",
        category: "social",
      },
      {
        site: "Github",
        icon: "github",
        url: "https://github.com/",
        category: "development",
      },
      {
        site: "Gmail",
        icon: "gmail",
        url: "https://mail.google.com/",
        category: "social",
      },
      {
        site: "Youtube",
        icon: "youtube",
        url: "https://youtube.com/",
        category: "media",
      },
      {
        site: "Google Drive",
        icon: "gdrive",
        url: "https://drive.google.com/",
        category: "cloud",
      },
      {
        site: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
        category: "social",
      },
      {
        site: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/",
        category: "social",
      },
      {
        site: "Bitbucket",
        icon: "bitbucket",
        url: "https://bitbucket.org/",
        category: "development",
      },
      {
        site: "Gitlab",
        icon: "gitlab",
        url: "https://gitlab.com/",
        category: "development",
      },
      {
        site: "Google",
        icon: "google",
        url: "https://google.com/",
        category: "search engine",
      },
      {
        site: "Wikipedia",
        icon: "wikipedia",
        url: "https://wikipedia.org/",
        category: "information",
      },
      {
        site: "Unsplash",
        icon: "unsplash",
        url: "https://unsplash.com/",
        category: "design",
      },
      {
        site: "Twitch",
        icon: "twitch",
        url: "https://twitch.tv/",
        category: "media",
      },
      {
        site: "Material.io",
        icon: "materialio",
        url: "https://material.io/",
        category: "design",
      },
      {
        site: "Netflix",
        icon: "netflix",
        url: "https://netflix.com/",
        category: "media",
      },
      {
        site: "Discord",
        icon: "discord",
        url: "https://discord.com/",
        category: "social",
      },
      {
        site: "Spotify",
        icon: "spotify",
        url: "https://spotify.com/",
        category: "media",
      },
      {
        site: "Figma",
        icon: "figma",
        url: "https://figma.com/",
        category: "design",
      },
      {
        site: "Stackoverflow",
        icon: "stackoverflow",
        url: "https://stackoverflow.com/",
        category: "development",
      },
      {
        site: "Stackexchange",
        icon: "stackexchange",
        url: "https://stackexchange.com/",
        category: "development",
      },
      {
        site: "Calendar",
        icon: "calendar",
        url: "https://calendar.google.com/",
        category: "social",
      },
      {
        site: "Icons8",
        icon: "icons8",
        url: "https://icons8.com/",
        category: "design",
      },
      {
        site: "Markdown Cheatsheet",
        icon: "markdown",
        url: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/",
        category: "development",
      },
      {
        site: "Keycode",
        icon: "keycode",
        url: "https://keycode.info/",
        category: "development",
      },
      {
        site: "Amazon",
        icon: "amazon",
        url: "https://amazon.com/",
        category: "shop",
      },
      {
        site: "Flaticon",
        icon: "flaticon",
        url: "https://flaticon.com/",
        category: "design",
      },
      {
        site: "Startpage",
        icon: "startpage",
        url: "https://startpage.com/",
        category: "search engine",
      },
    ];

    return webSites;
  }

  getPanelSites() {
    // Panel
    // A list of websites that will be generated and put on the Panel
    const panelSites = [
      {
        site: "Reddit",
        icon: "reddit",
        url: "https://reddit.com/",
      },
      {
        site: "Github",
        icon: "github",
        url: "https://github.com/",
      },
      {
        site: "Gmail",
        icon: "gmail",
        url: "https://mail.google.com/",
      },
      {
        site: "Youtube",
        icon: "youtube",
        url: "https://youtube.com/",
      },
      {
        site: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/",
      },
    ];

    return panelSites;
  }
}
