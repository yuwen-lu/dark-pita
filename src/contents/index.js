export default {
  amazon: [
    {
      name: "amazon_buy_now",
      identifier: "submit.buy-now",
      url: "www.amazon.com(\\S*)((/dp)|(/gp))",
      type: "online shopping platform",
      tag: ["asymmetric", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626",
      pattern: "Prominent Option",
      description:
        'The "Buy Now" button is in a more prominent orange color, making it easier to click on than the "Add to Cart" button. Buy now is a more friction-less experience for users and makes it more likely for users to purchase the item.',
      awareness:
        'You could select the "Buy Now" option subconsciously, buying items you don\'t necessarily need and sometimes even mistakenly make a purchase.',
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buy_now_before.png?v=1660677100767",
          component: "none",
          description: "No change.",
        },
        {
          name: "hide",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buynow_hide.gif?v=1660876577813",
          component: "amazon_buy_now_hide",
          description: 'Dark Pita will make the "Buy Now" button disappear. You can still purchase the item by adding it to your cart and check out there.',
        },
        {
          name: "change color",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amazon_buy_now_fairness.gif?v=1660676951948",
          component: "amazon_buy_now_fairness",
          description:
            'Dark Pita will make the "Buy Now" button be in the same color as the regular "Add to Cart" option.',
        },
        {
          name: "friction",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buy_now_friction.gif?v=1660676374305",
          component: "amazon_buy_now_friction",
          description:
            "Dark Pita will add an overlay as friction before you purchase, when you hover over buy now.",
        },
      ],
    },
    {
      name: "amazon_disguised_ads",
      identifier: "ad-feedback-text-auto-sparkle-hsa-tetris",
      url: "www.amazon.com/s\\?",
      type: "online shopping platform",
      tag: ["covert", "deceptive", "information hiding"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626",
      pattern: "Disguised Ads",
      description:
        'This is an advertisement, but the interface design put the "sponsored" notice at the right bottom corner, very hard to see for users.',
      awareness:
        "Disguised advertising may lead you to believe that it is part of the search result and potentially cause you financial loss.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_before.png?v=1660681628026",
          component: "none",
          description: "No change",
        },
        {
          name: "hide",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_hide.gif?v=1660681502216",
          component: "amazon_disguised_ads_hide",
          description: "Dark Pita will hide the disguised ads.",
        },
        {
          name: "friction",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_friction.gif?v=1660681503661",
          component: "amazon_disguised_ads_friction",
          description:
            "Dark Pita will make your cursor disappear if it navigates through the ads area.",
        },
        {
          name: "information disclosure",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_info_disc.png?v=1660681526249",
          component: "amazon_disguised_ads_disclosure",
          description:
            "Dark Pita will detect the ad and make it clear it's an advertisement for you.",
        },
        {
          name: "counterfactual thinking",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_count_th.png?v=1660681591634",
          component: "amazon_disguised_ads_counterfact",
          description:
            "Dark Pita will mark that the item(s) may be promoted because they paid Amazon. This may also help you avoid unnecessary browsing.",
        },
      ],
    },
    {
      name: "amazon_discount_price",
      identifier: "corePrice_desktop",
      url: "www.amazon.com(\\S*)/dp",
      type: "online shopping platform",
      tag: ["information hiding"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626",
      pattern: "Confusing Price Labels",
      description:
        "Discounts information may be shown in a confusing or exaggerated way. It tricks users into thinking the item is on sale and buy it while in fact it might just be a marketing strategy.",
      awareness:
        "You might get tricked to purchase this item with the confusing / exaggerated discount information, while it's in fact not on sale.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_before.png?v=1660680258968",
          component: "none",
          description: "No change.",
        },
        {
          name: "hide",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/price-hide.gif?v=1660786700320",
          component: "amazon_discount_price_hide",
          description:
            "Dark Pita can hide the discount information and prevent it from influencing your decision.",
        },
        {
          name: "information disclosure",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_info_disc.png?v=1660680264263",
          component: "amazon_discount_price_disclosure",
          description:
            "Dark pita will help you understand more information behind the price and the marketing jargon.",
        },
        {
          name: "animated metaphor",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_reflection.png?v=1660680246692",
          component: "amazon_discount_price_reflection",
          description:
            "Dark Pita will add some visual effects and remind you to give a second thought before making your purchase decision.",
        },
        {
          name: "action guide",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_action_guide.png?v=1660680267948",
          component: "amazon_discount_price_action",
          description:
            "Hover over the discount price and Dark Pita will provide some suggestions that you can take towards this item.",
        },
      ],
    },
    {
      name: "amazon_home_card",
      identifier: "desktop-grid-3",
      url: "https://www.amazon.com(/)?(#nav-top)?(#)?(ref=nav_logo)?$",
      type: "online shopping platform",
      tag: ["asymmetric", "disparate treatment", "information hiding"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626",

      pattern: "Recommended Items",

      description:
        "The highlighted section represents all recommended items on homepage. These are recommended items suggested by Amazon, partially based on user data. The interface design makes this part dominant and take the whole field of view.",

      awareness:
        "You are likely to be distracted from your initial purchase goals or spend more time browsing for less needed items, ultimately causing you to spend money on items you don't really need.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amz_homepage_before.png?v=1660682739077",
          component: "none",
          description: "No change.",
        },
        {
          name: "focus mode",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amz_home_focus_mode.gif?v=1660783201214",
          component: "amazon_home_card_focus",
          description: "Dark Pita will hide ALL recommended-items sections on the homepage.",
        },
        {
          name: "animated metaphor",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amazon_homepage_reflection.gif?v=1660676754864",
          component: "amazon_home_card_reflection",
          description:
            "Dark Pita will add visual effects and remind you to think twice before mindlessly browsing.",
        },
        {
          name: "cost tracker",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amz_homepage_cost_tracker.png?v=1660786833764",
          component: "amazon_home_card_progress",
          description:
            "Dark Pita will track and show your extra cost on Amazon that is likely caused by dark patterns.",
        },
      ],
    },
  ],
  youtube: [
    {
      name: "youtube_recommended_video",
      identifier: "content",
      url: "https://www.youtube.com/$",
      type: "video streaming platform",
      tag: ["asymmetric", "disparate treatment", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076",
      pattern: "Recommended Videos",
      description:
        "The highlighted video represents all recommended videos on homepage. These videos are individualized recommendations by YouTube, mostly through exploiting your history data.",
      awareness:
        "The videos are trying to cater to your interests. You are likely to get distracted and watch videos that you never planned to. Automatic preview on hover grabs your attention and distract you even further.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_before.png?v=1660683118921",
          component: "none",
          description: "No change.",
        },
        {
          name: "focus mode",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_focus.gif?v=1660683222367",
          component: "youtube_recommended_video_focus",
          description:
            "Dark Pita will hide ALL recommended videos on the homepage. You can still use the search bar on top; this is helpful when you visit YouTube with a goal in mind.",
        },
        {
          name: "block preview",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_blkpreview.gif?v=1660683589579",
          component: "youtube_recommended_video_preview",
          description:
            "Dark Pita will disable the preview function. This may prevent you from being distracted.",
        },
        {
          name: "reflection",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_reflection_timetracker.png?v=1660765926230",
          component: "youtube_recommended_video_reflection",
          description:
            "Dark Pita will track and show the extra time you spend on YouTube due to dark patterns.",
        },
      ],
    },
    {
      name: "youtube_video_dislike",
      identifier: "top-level-buttons-computed",
      url: "https://www.youtube.com/watch\\?v=*",
      type: "video streaming platform",
      tag: ["information hiding"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076",
      pattern: "Hidden Dislike Counts",
      description:
        "YouTube only displays the like count but not the dislike counts.",
      awareness:
        "You only see the popularity of the video while being unaware of its controversy.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/dislike-before?v=1660625022841",
          component: "none",
          description: "No change.",
        },
        {
          name: "fairness",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/dislike-after.gif?v=1660625143724",
          component: "youtube_video_dislike_fairness",
          description: "Show dislike counts.",
        },
      ],
    },
    {
      name: "youtube_sidebar_video",
      identifier: "ytd-compact-video-renderer",
      url: "https://www.youtube.com/watch\\?v=*",
      type: "video streaming platform",
      tag: ["asymmetric", "disparate treatment", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076",
      pattern: "Recommended Videos",
      description:
        "The highlighted video represents all recommended videos on sidebar. Video recommendations on the sidebar are personally customized based on your watch history and the video that you are currently watching.",
      awareness:
        "This may cause you to binge watch similar videos after you finish the current one, leading to distractions and time wasting.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_before.png?v=1660684441064",
          component: "none",
          description: "No change.",
        },
        {
          name: "focus mode",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_focus.gif?v=1660684900361",
          component: "youtube_sidebar_video_focus",
          description:
            "Dark Pita will hide ALL recommended videos on the sidebar. This is helpful when you want to prevent yourself from binge watching.",
        },
        {
          name: "block preview",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356",
          component: "youtube_sidebar_video_preview",
          description:
            "Dark Pita will disable the preview function. This may prevent you from being distracted and spending too much time on YouTube.",
        },
        {
          name: "reflection",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_reflection.png?v=1660685719313",
          component: "youtube_sidebar_video_reflection",
          description:
            "Dark Pita will track and show the time you spend on YouTube and let you know how much are through the dark patterns on YouTube interfaces.",
        },
      ],
    },
  ],
  // tailwind: [
  //   {
  //     name: "tailwind_header",
  //     identifier: "header",
  //     url: "https://tailwindcss.com/docs/",
  //     type: "video streaming platform",
  //     tag: ["asymmetric", "disparate treatment", "information hiding"],
  //     icon:
  //       "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388",
  //     pattern: "loss-gain framing",
  //     description:
  //       "A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.",
  //     awareness:
  //       "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //     action: [
  //       {
  //         name: "none",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "detection",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "bright pattern",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "tailwind_basic_usage",
  //     identifier: "basic-usage",
  //     url: "https://tailwindcss.com/docs/",
  //     type: "video streaming platform",
  //     tag: ["asymmetric", "disparate treatment", "information hiding"],
  //     icon:
  //       "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/privacy.png?v=1659250500782",
  //     pattern: "loss-gain framing",
  //     description:
  //       "A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.",
  //     awareness:
  //       "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //     action: [
  //       {
  //         name: "none",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "hide / disable",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "detection",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "bright pattern",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "tailwind_applying_conditionally",
  //     identifier: "applying-conditionally",
  //     url: "https://tailwindcss.com/docs/",
  //     type: "video streaming platform",
  //     tag: ["asymmetric", "disparate treatment", "information hiding"],
  //     icon:
  //       "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/cognition.png?v=1659250494144",
  //     pattern: "loss-gain framing",
  //     description:
  //       "A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.",
  //     awareness:
  //       "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //     action: [
  //       {
  //         name: "none",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "hide / disable",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "design friction",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //       {
  //         name: "bright pattern",
  //         image:
  //           "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375",
  //         component: "",
  //         description:
  //           "If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.",
  //       },
  //     ],
  //   },
  // ],
  twitter: [
    {
      name: "twitter_whats_happening",
      identifier: "Timeline: Trending now",
      url: "https://twitter.com/home",
      type: "social media platform",
      tag: ["disparate treatment", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539",
      pattern: "Suggested Content",
      description: "This section shows trending content suggested by Twitter.",
      awareness: "You might be distracted from your original goals of visiting Twitter.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/whathappen_before.png?v=1660855146667",
          component: "",
          description: "No change.",
        },
        {
          name: "hide / disable",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/trending_hide.gif?v=1660854950452",
          component: "twitter_whats_happening_hide",
          description:
            "Dark Pita will hide this section to help you focus on your feed. You can always use the \"Explore\" tab on the left sidebar. This is helpful for you to reduce Twitter consumption.",
        },
      ],
    },
    {
      name: "twitter_promoted",
      identifier: "See more",
      url: "https://twitter.com/home",
      type: "social media platform",
      tag: ["disparate treatment", "information hiding", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539",
      pattern: "Suggested Tweets",
      description:
        'This is suggested content by the Twitter algorithm, but it does not explicitly label itself as "sponsored" or "suggested". Instead, it is using confusing labels such as "Popular videos".',
      awareness:
        "It shows you tweets from people you don't follow and you might not be aware of it. You are likely to spend more time on Twitter than you would like.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/promt_before.gif?v=1660855544704",
          component: "",
          description: "No change.",
        },
        {
          name: "Marked Promoted",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/marked_prompt.gif?v=1660855624889",
          component: "twitter_promoted_highlight",
          description:
          "Dark Pita will detect this type of tweets and explicitly mark them as promoted for you.",
        },
        {
          name: "Add Friction",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/prompt_friction.gif?v=1660855677652",
          component: "twitter_promoted_friction",
          description:
            "Dark Pita will detect this type of tweets and replace them with an overlay. If you still want to see the tweet, you can click on the reveal button.",
        },
      ],
    },
  ],
  facebook: [
    {
      name: "facebook_reels",
      identifier: "Reels and short videos",
      url: "https://www.facebook.com/",
      type: "social media platform",
      tag: ["covert", "asymmetric"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539",
      pattern: "Suggested Content",
      description:
        "These are videos suggested by the Facebook algorithm. They can be created by non-friend users.",
      awareness:
        "You might spend extra time watching these videos, while you just wanted to come here to check out what your friends are posting recently.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/Reels.png?v=1660884228733",
          component: "",
          description: "No change",
        },
        {
          name: "hide / disable",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/reels-hide.gif?v=1660884549951",
          component: "facebook_reels_hide",
          description: "Dark Pita will hide the Reels.",
        },
        {
          name: "Explanation",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/reels-explain.gif?v=1660884550717",
          component: "facebook_reels_counterfact",
          description:
            "Dark Pita will prompt you to think about the mechanism behind the selected content.",
        },
        {
          name: "Covering",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/reels-cover.gif?v=1660884551935",
          component: "facebook_reels_friction",
          description:
            "Dark Pita will add an overlay to the Reels to prevent you from immediately being distracted by them. If you still want to view them, click on the reveal button.",
        },
      ],
    },
    {
      name: "facebook_suggested_for_you",
      identifier: "Suggested for you",
      url: "https://www.facebook.com/",
      type: "social media platform",
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539",
      pattern: "Suggested Content",
      tag: ["covert", "information hiding"],
      description: "Content prompted by the Facebook algorithm.",
      awareness:
        "You can get distracted by the suggested information and spend more time on Facebook than you would like to by mindlessly browsing.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/fb_suggested_before.png?v=1660856409025",

          // 'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: "",
          description: "No change",
        },
        {
          name: "hide / disable",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/fb_suggested.gif?v=1660856271171",
          component: "facebook_suggested_for_you_hide",
          description: "Dark Pita will hide the selected suggested content for you.",
        },
        {
          name: "highlight",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/fb_content_highlight.gif?v=1660789578695",
          component: "facebook_suggested_for_you_highlight",
          description:
            "Dark Pita will explicitly label it as suggested content.",
        },
      ],
    },
  ],
  netflix: [
    {
      name: "netflix_timeline",
      identifier: "controls-time-remaining",
      url: "https://www.netflix.com/watch/*",
      type: "video streaming platform",
      tag: ["restrictive", "covert", "information hiding"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076",
      pattern: "Remaining Time Only",
      description: "The timeline only shows the time remaining, not how long you have spent on the episode.",
      awareness:
        "This feature makes it easier for you to binge watch shows. It gives you an expectation about the time left and prompts you to finish the episode, however, it is easy to ignore the time spent.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/netflix_timeline_before.png?v=1660789248576",
          component: "none",
          description: "No change.",
        },
        {
          name: "reflection",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/netflix_time_tracker.png?v=1660782189787",
          component: "netflix_timeline_reflection",
          description:
            "Dark Pita tracks and shows the time you spend on Netflix. This may prevent binge-watching.",
        },
      ],
    },
    {
      name: "netflix_hugepreview",
      identifier: "Featured Content",
      url: "https://www.netflix.com/browse",
      type: "video streaming platform",
      tag: ["restrictive", "covert"],
      icon:
        "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076",
      pattern: "Automatic Background Preview",
      description:
        "Netflix automatically plays the featured trailer for you upon arriving on the site.",
      awareness:
        "The featured content is customized for your taste and since it automatically plays, it will likely grab your attention. You might get distracted and spend more time than you expected on this platform.",
      action: [
        {
          name: "none",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/netflix_preview_before.gif?v=1660857214243",
          component: "none",
          description: "No change.",
        },
        {
          name: "disable",
          image:
            "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/netflix_preview_disable.gif?v=1660857216480",
          component: "netflix_hugepreview_disable",
          description:
            "Dark Pita will disable background preview on Netflix homepage. This may help prevent you from being distracted by the featured content.",
        },
      ],
    },
  ],
};
