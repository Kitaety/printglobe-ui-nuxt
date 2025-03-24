import {applicationLdJsonType, defaultScriptType, httpsProtocol, stylesheetType} from '../constants/common';
import {defaultWLFavicon, imageTypes, pgFavicon} from '../constants/file';
import {cookieScriptTypes} from '../constants/cookies';
import {defaultPageSchema, noindexPages} from '../constants/head';
import {startsWithArray} from './string';
import {isServer, parseBoolean} from './common';
import {CommunicationApproachEnum, type WlPartnerInfo} from '../types/partner';
import type {PageState} from '../types/page';
import type {MetaObject} from 'nuxt/schema';

export const getHeadObjecs = (partnerData: WlPartnerInfo, pageState: PageState): MetaObject => {
    const result: MetaObject = {
        title: '',
        script: [],
        style: [],
        meta: [],
        link: [],
        noscript: []
    };
    const metaTemplate = getMetaTemplate(partnerData, pageState);
    const firstOrderScriptsTemplate = getFistOrderScriptsTemplate(partnerData, pageState);
    const themeStyle = getThemeStyle(partnerData);
    const secondOrderScriptsTemplate = getSecondOrderScriptsTemplate(partnerData, pageState);

    result.title = metaTemplate.title;
    result.script = result.script?.concat(
        metaTemplate.script || [],
        firstOrderScriptsTemplate.script || [],
        themeStyle.script || [],
        secondOrderScriptsTemplate.script || []
    );
    result.style = result.style?.concat(
        metaTemplate.style || [],
        firstOrderScriptsTemplate.style || [],
        themeStyle.style || [],
        secondOrderScriptsTemplate.style || []
    );
    result.meta = result.meta?.concat(
        metaTemplate.meta || [],
        firstOrderScriptsTemplate.meta || [],
        themeStyle.meta || [],
        secondOrderScriptsTemplate.meta || []
    );
    result.link = result.link?.concat(
        metaTemplate.link || [],
        firstOrderScriptsTemplate.link || [],
        themeStyle.link || [],
        secondOrderScriptsTemplate.link || []
    );
    result.noscript = result.noscript?.concat(
        metaTemplate.noscript || [],
        firstOrderScriptsTemplate.noscript || [],
        themeStyle.noscript || [],
        secondOrderScriptsTemplate.noscript || []
    );

    return result;
};

const getMetaTemplate = (partnerData: WlPartnerInfo, pageState: PageState) => {
    const config = useRuntimeConfig().public;
    const {title, description, prev, next, canonical, host} = pageState;
    const isPartner = Boolean(partnerData.partner_id);
    const partnerFavicon = isPartner && partnerData.favicon ? partnerData.favicon : defaultWLFavicon;
    const addNoIndexRobots = parseBoolean(config.preventCrawlers) || isPartner || startsWithArray(canonical, noindexPages);

    const result: MetaObject = {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0'},
            {name: 'msvalidate.01', content: 'AA4D07BC63F832B71C35E3C4E102DFAF'},
            {name: 'google-site-verification', content: 'I8dgiQryaMgvX--sv6Gfvfvge39595P9cySPzKvQz74'},
            {name: 'facebook-domain-verification', content: 'ixds3tndek3ophfbsh6x918skycnaf'},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        script: [
            {type: defaultScriptType, innerHTML: `console.debug('VERSION:', '${config.buildVersion}');`},
            {type: defaultScriptType, src: 'https://scripts.sirv.com/sirv.js', async: true}
        ],
        title: useEscape(isPartner ? partnerData.business_name : title),
        link: [
            {rel: 'icon', type: imageTypes.favicon, href: isPartner ? partnerFavicon : pgFavicon},
            {rel: stylesheetType, href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'}
        ]
    };

    if (isPartner) {
        result.meta?.push({name: 'description', content: useEscape(description)});
        result.link?.push({
            rel: stylesheetType,
            href: 'https://tgscript.s3.amazonaws.com/cert-style-v1.024.css',
            integrity: 'sha384-PzfduepNOPTKNfShxcius5IlrRQUUwINOCc14DrQlKzVnKWHX2OvyT01RRPVD43C',
            crossorigin: '' as const
        });
    }
    if (addNoIndexRobots) {
        result.meta?.push({name: 'robots', content: 'noindex,nofollow'});
    }
    if (prev) {
        result.link?.push({rel: 'prev', href: `${httpsProtocol}://${host}${prev}`});
    }
    if (next) {
        result.link?.push({rel: 'next', href: `${httpsProtocol}://${host}${next}`});
    }
    if (canonical) {
        result.link?.push({rel: 'canonical', href: `${httpsProtocol}://${host}${canonical}`});
    }
    return result;
};

const getFistOrderScriptsTemplate = (partnerData: WlPartnerInfo, page: PageState) => {
    const config = useRuntimeConfig().public;
    const enableCookieSettings = parseBoolean(config.enableCookieSettings);

    const {skipScripts} = page;
    const isPartner = Boolean(partnerData.partner_id);

    const _klaviyoPublicKey = isPartner ? config.wlKlaviyoPublicKey : config.klaviyoPublicKey;
    const _useKlaviyo = _klaviyoPublicKey && parseBoolean(config.useKlaviyo);
    const gtmId = isPartner ? config.wlGoogleTagManagerId : config.googleTagManagerId;
    const _ga4MeasurementId = isPartner ? config.wlGa4MeasurementId : config.ga4MeasurementId;
    const _gaMeasurementId = isPartner ? config.wlGaMeasurementId : config.gaMeasurementId;

    const analyticsScriptType = enableCookieSettings ? cookieScriptTypes.analytics : defaultScriptType;
    const marketingScriptType = enableCookieSettings ? cookieScriptTypes.marketing : defaultScriptType;

    if (skipScripts) {
        return {
            script: []
        };
    }

    const result: MetaObject = {
        script: [
            {type: marketingScriptType, src: '//www.googleadservices.com/pagead/conversion_async.js', async: true},
            {
                type: marketingScriptType,
                innerHTML: `
                /*! modernizr 3.3.1 (Custom Build) | MIT *
                * https://modernizr.com/download/?-csspositionsticky-setclasses !*/
                !function(e,n,s){function t(e,n){return typeof e===n}function o(){var e,n,s,o,a,i,f;for(var c in r)if(r.hasOwnProperty(c)){if(e=[],n=r[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],f=i.split("."),1===f.length?Modernizr[f[0]]=o:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=o),l.push((o?"":"no-")+f.join("-"))}}function a(e){var n=c.className,s=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(t,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),u?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var l=[],r=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){r.push({name:e,fn:n,options:s})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var c=n.documentElement,u="svg"===c.nodeName.toLowerCase(),p=f._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];f._prefixes=p,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",s=i("a"),t=s.style;return t.cssText=e+p.join(n+";"+e).slice(0,-e.length),-1!==t.position.indexOf(n)}),o(),a(l),delete f.addTest,delete f.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);
                `
            },
            //Google Tag Manager
            {
                type: analyticsScriptType,
                innerHTML: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${gtmId}');
                `
            },
            {type: analyticsScriptType, src: `https://www.googletagmanager.com/gtag/js?id=${_gaMeasurementId}`, async: true},
            {
                type: analyticsScriptType,
                innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${_gaMeasurementId}');
                `
            },
            //Facebook Pixel Code
            {
                type: marketingScriptType,
                innerHTML: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', ${config.fbPixelId});
                    fbq('track', 'PageView');
                `
            },
            {
                type: defaultScriptType,
                src: config.pjPubUrl
            },
            {
                type: defaultScriptType,
                defer: true,
                innerHTML: `
					  try {
						  window.pj = PayJunction('${config.pjPubKey}');
						  console.log('Init PJ successful', '${config.pjPubKey}'); 
					  } catch (error) {
						  console.error('Init PJ failed', error); 
					  }
				  `
            }
        ]
    };

    if (!parseBoolean(config.disableGA)) {
        //Global site tag (gtag.js) - Google Analytics
        result.script?.push({type: analyticsScriptType, src: `https://www.googletagmanager.com/gtag/js?id=${_ga4MeasurementId}`});
        result.script?.push({
            type: analyticsScriptType,
            innerHTML: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${_ga4MeasurementId}');
				gtag('get', '${_ga4MeasurementId}', 'client_id', clientId => {
					window.clientAnalyticsID = clientId
				});
			`
        });
        result.script?.push({type: analyticsScriptType, src: `https://www.googletagmanager.com/gtag/js?id=${_ga4MeasurementId}`});
    }
    if (_useKlaviyo) {
        result.script?.push({
            type: defaultScriptType,
            src: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${_klaviyoPublicKey}`,
            async: true,
            innerHTML: `
			  !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();
		  `
        });
    }
    return result;
};

const getThemeStyle = (partnerData: WlPartnerInfo) => {
    const isPartner = Boolean(partnerData.partner_id);

    if (!isPartner) {
        return {
            style: []
        } as MetaObject;
    }

    return {
        style: [
            {
                innerHTML: `
                :root {
                    --theme-color-1:${partnerData.theme_color1};
                    --theme-color-2:${partnerData.theme_color2};
                    --theme-color-3:${partnerData.theme_color3};
                    --theme-color-1-fade:${partnerData.theme_color1_fade};
                    --theme-color-2-fade:${partnerData.theme_color2_fade};
                    --theme-color-3-fade:${partnerData.theme_color3_fade};
                    --theme-color-1-tint:${partnerData.theme_color1_tint};
                    --theme-color-2-tint:${partnerData.theme_color2_tint};
                    --theme-color-3-tint:${partnerData.theme_color3_tint};
                    --theme-color-1-tint5:${partnerData.theme_color1_tint5};
                    --theme-color-2-tint5:${partnerData.theme_color2_tint5};
                    --theme-color-3-tint5:${partnerData.theme_color3_tint5};
                    --wl-grey:${partnerData.wlGrey};
                    --wl-white:white;
                    --wl-black:black;
                    --wl-dark:#2D2D2D;
                    --wl-input-border:#838383;
                    --wl-header-grey:#E6E7E8;
                    --wl-chat-icon: url(/images/chat/chat_minim_gray.png);
                }

            `
            }
        ]
    } as MetaObject;
};

const getSecondOrderScriptsTemplate = (partnerData: WlPartnerInfo, page: PageState) => {
    const config = useRuntimeConfig().public;
    const enableCookieSettings = parseBoolean(config.enableCookieSettings);

    const {skipScripts, removeChat, schema} = page;

    if (skipScripts) {
        return {
            noscript: [],
            script: [],
            link: []
        };
    }

    const isPartner = Boolean(partnerData.partner_id);

    const gtmId = isPartner ? config.wlGoogleTagManagerId : config.googleTagManagerId;
    const marketingScriptType = enableCookieSettings ? cookieScriptTypes.marketing : defaultScriptType;

    const showLiveChat = removeChat !== true && (!isPartner || partnerData.communication_approach === CommunicationApproachEnum.communicateWithClient);

    const result: MetaObject = {
        noscript: [],
        script: [
            {
                type: marketingScriptType,
                innerHTML: `
                    var js = document.createElement('script');
                    js.type = '${defaultScriptType}';
                    js.async = true;
                    js.id = 'AddShoppers';
                    js.src = ('https:' == document.location.protocol ? 'https://shop.pe/widget/' : 'http://cdn.shop.pe/widget/') + 'widget_async.js#5aa04973bbddbdb17f2fb753';
                    document.getElementsByTagName("head")[0].appendChild(js);
                `
            }
        ],
        link: []
    };

    if (!isServer) {
        result.script?.push({
            type: marketingScriptType,
            src: '//cdn.callrail.com/companies/936938502/94b229991046c591a5f0/12/swap.js'
        });
    }
    if (!parseBoolean(config.disableGA)) {
        //Google Tag Manager (noscript)
        result.noscript?.push({
            innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        });
    }
    if (showLiveChat) {
        //LiveChat (www.livechat.com) code
        result.noscript?.push({
            innerHTML: `<a href="https://www.livechat.com/chat-with/${config.wlLiveChatId}/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`
        });
        result.script?.push({
            type: defaultScriptType,
            innerHTML: `
			  window.__lc = window.__lc || {};
			  window.__lc.license = ${config.wlLiveChatId};
			  window.__lc.chat_between_groups = false;
			  window.__lc.ga_version = "gtm";
			  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
		  `
        });
    }
    if (!isPartner) {
        result.script?.push({type: applicationLdJsonType, innerHTML: schema || defaultPageSchema});
    }

    return result;
};
