export const cookieScriptTypes = {
    performance: 'javascript/performance',
    analytics: 'javascript/analytics',
    marketing: 'javascript/marketing'
};

export const cookieTypes = {
    essential: 'ESSENTIAL',
    performance: 'PERFORMANCE',
    marketing: 'MARKETING',
    analytics: 'ANALYTICS'
};

export const cookieDetails = [
    {
        type: cookieTypes.essential,
        title: 'Essential Website Cookies',
        necessary: true,
        description: `These cookies are strictly necessary to provide you with the services and features available through our website.
        Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how the website functions.`
    },
    {
        type: cookieTypes.performance,
        title: 'Performance and Functionality Cookies',
        necessary: false,
        description: `These cookies are used to enhance the functionality of the website. They help us to customize the website and application
        (where applicable) for you in order to enhance your experience. Although important to us, these cookies are non-essential to the use
        of the website. However, without these cookies, certain functionality may become unavailable.`
    },
    {
        type: cookieTypes.marketing,
        title: 'Marketing Cookies',
        necessary: false,
        description: `These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions
        like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting
        advertisements that are based on your interests.`
    },
    {
        type: cookieTypes.analytics,
        title: 'Analytics and Customization Cookies',
        necessary: false,
        description: `These cookies collect information to help us understand how the website is being used or how effective our marketing campaigns
        are. They help us to know which pages are the most and least popular and to see how visitors move around the website. These cookies may be
        set by us or by third-party providers whose services we have added to our pages.`
    }
];
