export const defaultPageSchema = `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "legalName": "PrintGlobe",
    "name": "PrintGlobe",
    "sameAs": [
        "https://twitter.com/PrintGlobe",
        "https://www.facebook.com/PrintGlobe/",
        "https://www.pinterest.com/printglobe/",
        "https://plus.google.com/+Printglobe/"
    ],
    "url": "https://www.printglobe.com/",
    "image": {
        "@type": "ImageObject",
        "url": "https://www.printglobe.com/images/Logo.svg",
        "width": 300,
        "height": 95
    },
    "description": "Custom Printed Personalized Promotional Items and Products by PrintGlobe. Since 1995 PrintGlobe has been Your One Stop Shop for Wholesale, Custom Merchandise such as Promotional Items, Personalized Products and more. We are a Full Service Supplier of all Things Custom Printed. Learn More Today.",
    "currenciesAccepted": "840",
       "paymentAccepted": "Cash, Credit Card, etc.",
       "priceRange": "$",
    "address": {
            "@type": "PostalAddress",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "streetAddress": "5812 Trade Center Drive Suite 100",
            "postalCode": "78744",
            "telephone": "+18009892181"
        }
}`;

export const noindexPages = ['/search', '/account', '/accountmanager', '/login', '/quick-ship'];
