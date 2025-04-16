// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Saddle Brook, US",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://gemini.google.com/app",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Hello",
      background_url: "src/img/banners/cbg-14.gif",
      categories: [
        {
          name: "Steaming",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Plex Local",
              url: "http://truenas.local:32400/web/index.html#!",
              icon: "chevron-right",
              icon_color: palette.yellow,
            },
            {
              name: "qB Seed Box",
              url: "http://seed.loc:8080/",
              icon: "drop-circle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "utility",
          links: [
            {
              name: "Email",
              url: "http://truenas.local:31007/",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "Calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "JetKVM",
              url: "http://192.168.0.190/",
              icon: "circle-triangle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Messaging",
          links: [
            {
              name: "BlueBubbles",
              url: "https://bluebubbles.app/web/#/",
              icon: "message-dots",
              icon_color: palette.blue,
            },
            {
              name: "Google Messages",
              url: "https://messages.google.com/web/conversations",
              icon: "message",
              icon_color: palette.green,
            },
            {
              name: "TextNow",
              url: "https://www.textnow.com/messaging",
              icon: "message-circle-down",
              icon_color: palette.pink,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.sapphire,
            },
            {
              name: "Personal Site",
              url: "https://chrisgutie.xyz/",
              icon: "code",
              icon_color: palette.green,
            },
            // {
            //   name: "stackoverflow",
            //   url: "https://stackoverflow.com",
            //   icon: "brand-stackoverflow",
            //   icon_color: palette.red,
            // },
          ],
        },
        {
          name: "Home Lab",
          links: [
            {
              name: "TrueNAS",
              url: "https://truenas.local/ui/sessions/signin",
              icon: "coins",
              icon_color: palette.green,
            },
            {
              name: "Router",
              url: "http://tplinkwifi.net/webpages/index.html",
              icon: "network",
              icon_color: palette.peach,
            },
            {
              name: "XO Lite",
              url: "https://192.168.0.113/",
              icon: "server",
              icon_color: palette.red,
            },
            {
              name: "XOA",
              url: "http://192.168.0.240/signin",
              icon: "server-bolt",
              icon_color: palette.red,
            },
            {
              name: "Pi Hole",
              url: "http://192.168.0.155/admin/",
              icon: "eye-bolt",
              icon_color: palette.red,
            },
            {
              name: "iVMS Cameras",
              url: "http://192.168.0.64/",
              icon: "camera-share",
              icon_color: palette.green,
            },
            {
              name: "Torrent Checker",
              url: "https://iknowwhatyoudownload.com/en/peer/",
              icon: "zoom-exclamation",
              icon_color: palette.green,
            },
            {
              name: "Documentation",
              url: "https://github.com/Person1080p/HomeLabDocs",
              icon: "file-description",
              icon_color: palette.green,
            },
          ],
        },
        // {
        //   name: "resources",
        //   links: [
        //     {
        //       name: "dou",
        //       url: "https://dou.ua",
        //       icon: "brand-prisma",
        //       icon_color: palette.green,
        //     },
        //     {
        //       name: "hackernews",
        //       url: "https://news.ycombinator.com",
        //       icon: "brand-redhat",
        //       icon_color: palette.peach,
        //     },
        //     {
        //       name: "uber engineering",
        //       url: "https://www.uber.com/en-GB/blog/london/engineering",
        //       icon: "brand-uber",
        //       icon_color: palette.red,
        //     },
        //     {
        //       name: "netflix tech blog",
        //       url: "https://netflixtechblog.com",
        //       icon: "brand-netflix",
        //       icon_color: palette.blue,
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   name: "chi ll",
    //   background_url: "src/img/banners/cbg-08.gif",
    //   categories: [
    //     {
    //       name: "social media",
    //       links: [
    //         {
    //           name: "telegram",
    //           url: "https://web.telegram.org",
    //           icon: "brand-telegram",
    //           icon_color: palette.green,
    //         },
    //         {
    //           name: "facebook",
    //           url: "https://www.facebook.com",
    //           icon: "brand-facebook",
    //           icon_color: palette.peach,
    //         },
    //         {
    //           name: "reddit",
    //           url: "https://www.reddit.com/r/unixporn",
    //           icon: "brand-reddit",
    //           icon_color: palette.red,
    //         },
    //       ],
    //     },
    //     {
    //       name: "gaming",
    //       links: [
    //         {
    //           name: "IGN",
    //           url: "https://www.ign.com/account/playlist/library",
    //           icon: "device-gamepad",
    //           icon_color: palette.green,
    //         },
    //         {
    //           name: "steam",
    //           url: "https://store.steampowered.com",
    //           icon: "brand-steam",
    //           icon_color: palette.peach,
    //         },
    //         {
    //           name: "epicgames",
    //           url: "https://store.epicgames.com",
    //           icon: "brand-fortnite",
    //           icon_color: palette.red,
    //         },
    //         {
    //           name: "nintendo",
    //           url: "https://store.nintendo.co.uk",
    //           icon: "device-nintendo",
    //           icon_color: palette.blue,
    //         },
    //       ],
    //     },
    //     {
    //       name: "video",
    //       links: [
    //         {
    //           name: "anilist",
    //           url: "https://anilist.co/home",
    //           icon: "brand-funimation",
    //           icon_color: palette.green,
    //         },

    //         {
    //           name: "patreon",
    //           url: "https://www.patreon.com",
    //           icon: "brand-patreon",
    //           icon_color: palette.red,
    //         },
    //         {
    //           name: "kyivstar",
    //           url: "https://tv.kyivstar.ua",
    //           icon: "star-filled",
    //           icon_color: palette.blue,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
