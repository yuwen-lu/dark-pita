export default {
  amazon: [
    {
      name: 'amazon_buy_now',
      identifier: 'submit.buy-now',
      url: 'www.amazon.com(\\S*)((/dp)|(/gp))',
      type: 'online shopping platform',
      tag: ['asymmetric', 'covert'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
      pattern: 'Prominent Option',
      description:
        'The "Buy Now" button is in color orange, while the regular "Add to Cart" button is yellow.',
      awareness:
        'You could choose the "Buy Now" option more easily, and sometimes even mistakenly make a purchase.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buy_now_before.png?v=1660677100767',
          component: 'none',
          description:
            'Not modified.'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buy_now_hide.gif?v=1660676427334',
          component: 'amazon_buy_now_hide',
          description:
            'Let the "Buy Now" button disappear.'
        },
        {
          name: 'fairness',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amazon_buy_now_fairness.gif?v=1660676951948',
          component: 'amazon_buy_now_fairness',
          description:
            'Let the "Buy Now" button be in the same color as the regular "Add to Cart" option.'
        },
        {
          name: 'friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/buy_now_friction.gif?v=1660676374305',
          component: 'amazon_buy_now_friction',
          description:
            'Add a bit friction before you actually proceed to purchase, even you click buy now.'
        }
      ]
    },
    {
      name: 'amazon_disguised_ads',
      identifier: 'ad-feedback-text-auto-sparkle-hsa-tetris',
      url: 'www.amazon.com/s\\?',
      type: 'online shopping platform',
      tag: ['covert', 'deceptive', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
      pattern: 'Disguised Ads',
      description:
        'The interface design makes this section large and makes it less obvious that this is an inserted ads. The "sponsored" notice is minimal at the right bottom corner.',
      awareness:
        'It is harder to avoid clicking the ads. As a user, you may be confused that the product you are looking for is behind this link.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_before.png?v=1660681628026',
          component: 'none',
          description:
            'Not modified'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_hide.gif?v=1660681502216',
          component: 'amazon_disguised_ads_hide',
          description:
            'Let the ads disappear.'
        },
        {
          name: 'friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_friction.gif?v=1660681503661',
          component: 'amazon_disguised_ads_friction',
          description:
            'Your cursor will disappear if it navigates through ads area.'
        },
        {
          name: 'information disclosure',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_info_disc.png?v=1660681526249',
          component: 'amazon_disguised_ads_disclosure',
          description:
            'Dark Pita will detect and indicate the ads area explicitly for you.'
        },
        {
          name: 'counterfactual thinking',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ads_count_th.png?v=1660681591634',
          component: 'amazon_disguised_ads_counterfact',
          description:
            'Dark Pita will motivate you to give a second thought before you proceed. This may also help you avoid unnecessary browsing.'
        }
      ]
    },
    {
      name: 'amazon_discount_price',
      identifier: 'apex_desktop',
      url: 'www.amazon.com(\\S*)/dp',
      type: 'online shopping platform',
      tag: ['information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
      pattern: 'Confusing Price Labels',
      description:
        'Discounts information may be showed in an exaggerated way. Some key information about the price could be hidden.',
      awareness:
        'You may be more likely to purchase this item with the given discounts information.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_before.png?v=1660680258968',
          component: 'none',
          description:
            'Not modified.'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_discount_price_hide',
          description:
            'Hide the discounts alert to not let it influence your purchase decision.'
        },
        {
          name: 'information disclosure',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_info_disc.png?v=1660680264263',
          component: 'amazon_discount_price_disclosure',
          description:
            'Dark pita will help you understand more information behind the price and the marketing jargons.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_reflection.png?v=1660680246692',
          component: 'amazon_discount_price_reflection',
          description:
            'When you are navigating through this area, Dark Pita will add some visual effects so that you will be reminded to give a second thought before making your purchase decision.'
        },
        {
          name: 'action guide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/discounts_action_guide.png?v=1660680267948',
          component: 'amazon_discount_price_action',
          description:
            'Dark Pita will suggest something you can do about this item.'
        }
      ]
    },
    {
      name: 'amazon_home_card',
      identifier: 'desktop-grid-1',
      url: 'https://www.amazon.com(/)?(#nav-top)?(#)?(ref=nav_logo)?\$',
      type: 'online shopping platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',

      pattern: 'Recommended Items',

      description:
        'These are recommended items suggested by Amazon, partially based on user data. The interface design makes this part big and take the whole field of view.',
      awareness:
        'Users are more likely to deviate from their original purchase goals or spend more time browsing less relavant items.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amz_homepage_before.png?v=1660682739077',
          component: 'none',
          description:
            'Not Modified.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_home_card_focus',
          description:
            'Hide the recommended-items section on the home page.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/amazon_homepage_reflection.gif?v=1660676754864',
          component: 'amazon_home_card_reflection',
          description:
            'Dark Pita adds a bit push-back to help you avoid mindless browsing.'
        },
        {
          name: 'cost tracker',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/progress.png?v=1660678117572',
          component: 'amazon_home_card_progress',
          description:
            'A progress circle that helps you track your daily cost on Amazon, with which you can better avoid binge shopping.'
        }
      ]
    }
  ],
  youtube: [
    {
      name: 'youtube_recommended_video',
      identifier: 'content',
      url: 'https://www.youtube.com/\$',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'covert'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'Recommended Videos',
      description:
        'Videos on the homepage are individualized recommendations by YouTube, mostly through exploiting your history data.',
      awareness:
        'The videos are trying to cater to your tastes. You are more likely to consume more content than you originally intent to. Auxilary functions such as preview will make it even easier to be distracted.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_before.png?v=1660683118921',
          component: 'none',
          description:
            'Not Modified.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_focus.gif?v=1660683222367',
          component: 'youtube_recommended_video_focus',
          description:
            'Dark Pita will hide ALL recommended videos on the homepage. This is especially helpful when you visit YouTube for a study lecture or work-relevant tasks.'
        },
        {
          name: 'block preview',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_blkpreview.gif?v=1660683589579',
          component: 'youtube_recommended_video_preview',
          description:
            'Dark Pita will disable the preview function. This may prevent you from being distracted by less relevant content.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_time_tracker.png?v=1660683895184',
          component: 'youtube_recommended_video_reflection',
          description:
            'Dark Pita will put a mini clock on the right top corner as a reminder to track time you spend on YouTube. This may help prevent overconsumption of YouTube videos.'
        }
      ]
    },
    {
      name: 'youtube_video_dislike',
      identifier: 'top-level-buttons-computed',
      url: 'https://www.youtube.com/watch\\?v=\*',
      type: 'video streaming platform',
      tag: ['information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'Hidden Dislike Counts',
      description:
        'Only Like counts shows up, but you cannot see how many Dislikes the video gets.',
      awareness:
        'You might mistakenly perceive pupularity of the video while being unaware of its controversy.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/dislike-before?v=1660625022841',
          component: 'none',
          description:
            'Not modified.'
        },
        {
          name: 'fairness',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/dislike-after.gif?v=1660625143724',
          component: 'youtube_video_dislike_fairness',
          description:
            'Show dislike counts.'
        }
      ]
    },
    {
      name: 'youtube_sidebar_video',
      identifier: 'ytd-compact-video-renderer',
      url: 'https://www.youtube.com/watch\\?v=\*',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'covert'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'Recommended Videos',
      description:
        'Videos on the sidebar are individualized recommendations based on your watch history and the video that you are currently watching.',
      awareness:
        'It is likely that you will watch more similar videos after you finish the current one.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_before.png?v=1660684441064',
          component: 'none',
          description:
            'Not modified.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_focus.gif?v=1660684900361',
          component: 'youtube_sidebar_video_focus',
          description:
            'Dark Pita will hide ALL recommended videos on the sidebar. This is especially helpful when you visit YouTube for a study lecture or work-relevant tasks.'
        },
        {
          name: 'block preview',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356',
          component: 'youtube_sidebar_video_preview',
          description:
            'Dark Pita will disable the preview function. This may prevent you from being distracted by less relevant content.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_sidebar_reflection.png?v=1660685719313',
          component: 'youtube_sidebar_video_reflection',
          description:
            'Dark Pita will put a mini clock on the right top corner as a reminder to track time you spend on YouTube. This may help prevent overconsumption of YouTube videos.'
        }
      ]
    }
  ],
  tailwind: [
    {
      name: 'tailwind_header',
      identifier: 'header',
      url: 'https://tailwindcss.com/docs/',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388',
      pattern: 'loss-gain framing',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'detection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'bright pattern',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'tailwind_basic_usage',
      identifier: 'basic-usage',
      url: 'https://tailwindcss.com/docs/',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/privacy.png?v=1659250500782',
      pattern: 'loss-gain framing',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'detection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'bright pattern',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'tailwind_applying_conditionally',
      identifier: 'applying-conditionally',
      url: 'https://tailwindcss.com/docs/',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/cognition.png?v=1659250494144',
      pattern: 'loss-gain framing',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'design friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'bright pattern',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    }
  ],
  twitter: [
    {
      name: 'twitter_tweet',
      identifier: 'Tweet',
      url: 'https://twitter.com/home',
      type: 'social media platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539',
      pattern: 'loss-gain framing',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'bright pattern',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'twitter_who_to_follow',
      identifier: 'Who to follow',
      url: 'https://twitter.com/home',
      type: 'social media platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539',
      pattern: 'loss-gain framing',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'design friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'detection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'bright pattern',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    }
  ],
  facebook: [
    {
      name: 'facebook_suggested',
      identifier: 'People You May Know',
      url: 'https://www.facebook.com/',
      type: 'social media platform',
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388',
      pattern: 'People you may know – Hidden Information',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'Contents that I don\'t desire would be prompted onto my homepage feed.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            ''
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            'Contents that I don\'t desire would be prompted onto my homepage feed.'
        }
      ]
    },
    {
      name: 'facebook_reels',
      identifier: 'Reels and short videos',
      url: 'https://www.facebook.com/',
      type: 'social media platform',
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388',
      pattern: 'Reels – Hidden Information',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'Contents that I don\'t desire would be prompted onto my homepage feed.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            ''
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'facebook_reels_hide',
          description:
            'Contents that I don\'t desire would be prompted onto my homepage feed.'
        },
        {
          name: 'counterfactual thinking',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'facebook_reels_counterfact',
          description:
            'Contents that I don\'t desire would be prompted onto my homepage feed.'
        }
      ]
    },
    {
      name: 'facebook_sponsored',
      identifier: 'ads/about',
      url: 'https://www.facebook.com/',
      type: 'social media platform',
      tag: ['covert', 'deceptive', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/social_media.png?v=1660533416539',
      pattern: 'Sponsored Feed',
      description:
        'These are sponsored/promoted posts prompted onto your homepage feed, instead of being posted by your friends.',
      awareness:
        'You will possibly consume them as posts from your friends or people you follow. These posts are possibly exploiting your attention.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/fb_spons_before.png?v=1660686155283',
          component: '',
          description:
            'Not modified.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'facebook_sponsored_hide',
          description:
            'Dark Pita will hide the sponsored posts for you.'
        }
      ]
    },
    {
      name: 'facebook_suggested_for_you',
      identifier: 'Suggested for you',
      url: 'https://www.facebook.com/',
      type: 'social media platform',
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388',
      pattern: 'Suggested for you - Hidden Information',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'Contents that I don\'t desire would be prompted onto my homepage feed.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: '',
          description:
            ''
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'facebook_suggested_for_you_hide',
          description:
            'Contents that I don\'t desire would be prompted onto my homepage feed.'
        },
        {
          name: 'highlight',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'facebook_suggested_for_you_highlight',
          description:
            'Contents that I don\'t desire would be prompted onto my homepage feed.'
        }
      ]
    }
  ]
};
