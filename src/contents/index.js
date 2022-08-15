export default {
  amazon: [
    {
      name: 'amazon_buy_now',
      identifier: 'buyNow_feature_div',
      url: 'www.amazon.com(\\S*)((/dp)|(/gp))',
      type: 'online shopping platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
      pattern: 'false hierarchy',
      description:
        'Visual or interactive prominence of one option over others, whereas available choices should be evenly leveled rather than hierarchical.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_buy_now_hide',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'fairness',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_buy_now_fairness',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_buy_now_friction',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'amazon_disguised_ads',
      identifier: 'CardInstance',
      url: 'www.amazon.com/s\\?',
      type: 'online shopping platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
      pattern: 'hidden information',
      description:
        'Disguising relevant information (options, actions) as irrelevant.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_disguised_ads_hide',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'friction',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_disguised_ads_friction',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'information disclosure',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_disguised_ads_disclosure',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'counterfactual thinking',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_disguised_ads_counterfact',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'amazon_discount_price',
      identifier: 'apex_desktop',
      url: 'www.amazon.com(\\S*)/dp',
      type: 'online shopping platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/online_shopping.png?v=1660533261626',
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
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_discount_price_hide',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'information disclosure',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_discount_price_disclosure',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_discount_price_reflection',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'action guide',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_discount_price_action',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
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
      pattern: 'disguised ads',
      description:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_home_card_focus',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'amazon_home_card_reflection',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
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
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'false hierarchy',
      description:
        'Visual or interactive prominence of one option over others, whereas available choices should be evenly leveled rather than hierarchical.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_recommended_video_focus',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'block preview',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_recommended_video_preview',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_recommended_video_reflection',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'youtube_video_dislike',
      identifier: 'top-level-buttons-computed',
      url: 'https://www.youtube.com/watch\\?v=\*',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'false hierarchy',
      description:
        'Visual or interactive prominence of one option over others, whereas available choices should be evenly leveled rather than hierarchical.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'fairness',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_video_dislike_fairness',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        }
      ]
    },
    {
      name: 'youtube_sidebar_video',
      identifier: 'ytd-compact-video-renderer',
      url: 'https://www.youtube.com/watch\\?v=\*',
      type: 'video streaming platform',
      tag: ['asymmetric', 'disparate treatment', 'information hiding'],
      icon:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/video_streamming.png?v=1660533549076',
      pattern: 'false hierarchy',
      description:
        'Visual or interactive prominence of one option over others, whereas available choices should be evenly leveled rather than hierarchical.',
      awareness:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.',
      action: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'focus mode',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_sidebar_video_focus',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'block preview',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_sidebar_video_preview',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'reflection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'youtube_sidebar_video_reflection',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
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
      twitter: 'twitter_who_to_follow',
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
  ]
};
