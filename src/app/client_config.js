import { fromJSOrdered } from './utils/immutable';

// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const APP_NAME = 'NaturalProducts';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
// ie. "Голос" > "Golos"
export const APP_NAME_LATIN = 'NaturalProducts';
export const APP_NAME_UPPERCASE = 'NATURALPRODUCTS';
export const APP_ICON = 'natural';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_URL = 'https://www.naturalproducts.today';
export const APP_DOMAIN = 'www.naturalproducts.today';
// max num of tags. if unset, default is 10. This is due to previous hardcoded number.
export const APP_MAX_TAG = 10;
export const SCOT_TAG = 'naturalproducts';
export const TAG_LIST = fromJSOrdered({
    business: ['healthmarkets', 'naturalmarkets'],
    food: ['functionalfood', 'healthfood'],
    beverages: ['functionalbeverages', 'healthybeverages', 'sportsbeverages'],
    healthyliving: [],
    hemp: ['cbd'],
    industry: [],
    ingredients: ['vitamins', 'minerals'],
    lifestyle: [],
    microbiome: ['probiotics', 'prebiotics', 'synbiotics'],
    nutraceuticals: [],
    organics: [],
    personalcare: ['cleanbeauty'],
    practitioner: [],
    regulations: ['fda', 'ftc', 'dshea', 'pop65', 'efsa'],
    research: [],
    retailer: [],
    supplements: ['omega3', 'dietarysupplements', 'foodsupplements'],
    botanicals: ['tumeric', 'ashwaghanda', 'cranderry', 'amla', 'herbs'],
    trends: ['cleanlabel', 'permaculture', 'regenerativeagriculture', 'sustainability'],
    vegan: [],
    community: ['innerblocks', 'naturalmedicine', 'ecotrain', 'steembasicincome'],
    contest: [],
});
export const LIQUID_TOKEN = 'Natural';
// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const LIQUID_TOKEN_UPPERCASE = 'NATRL';
// used as backup
export const SCOT_DENOM = 1000000;
export const VOTE_WEIGHT_DROPDOWN_THRESHOLD = 1;
export const VESTING_TOKEN = 'NATRL POWER';
export const INTERLEAVE_PROMOTED = true;
export const PROMOTED_POST_ACCOUNT = 'naturalpromo';

export const INVEST_TOKEN_UPPERCASE = 'STEEM POWER';
export const INVEST_TOKEN_SHORT = 'SP';
export const DEBT_TOKEN = 'STEEM DOLLAR';
export const DEBT_TOKENS = 'STEEM DOLLARS';
export const CURRENCY_SIGN = '$';
export const WIKI_URL = ''; // https://wiki.golos.io/
export const LANDING_PAGE_URL = 'https://steem.io/';
export const TERMS_OF_SERVICE_URL = 'https://' + APP_DOMAIN + '/tos.html';
export const PRIVACY_POLICY_URL = 'https://' + APP_DOMAIN + '/privacy.html';
export const WHITEPAPER_URL = 'https://steem.io/SteemWhitePaper.pdf';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'STEEM';
export const VEST_TICKER = 'VESTS';
export const DEBT_TICKER = 'SBD';
export const DEBT_TOKEN_SHORT = 'SBD';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];

// meta info
export const TWITTER_HANDLE = '@steemit';
export const SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/steemit-share.png';
export const TWITTER_SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/steemit-twshare.png';
export const SITE_DESCRIPTION =
    'NaturalProducts is a social media platform where everyone gets paid for ' +
    'creating and curating content. It leverages a robust digital points system, called NATRL, that ' +
    'supports real value for digital rewards through market price discovery and liquidity';

// various
export const SUPPORT_EMAIL = 'support@' + APP_DOMAIN;
