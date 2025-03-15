export const imageTypes = {
    all: 'image/*',
    favicon: 'image/png, image/x-icon'
};

export const fileTypes = {
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    wordDocuments: '.doc, .docx, application/msword',
    photoshop: '.psd, image/vnd.adobe.photoshop',
    illustrator: '.ai',
    esp: '.eps, application/postscript'
};

export const artworkFileTypes = [imageTypes.all, fileTypes.pdf, fileTypes.wordDocuments, fileTypes.photoshop, fileTypes.illustrator, fileTypes.esp].join();
export const defaultWLFavicon = '/images/partner_favicon.ico';
export const pgFavicon = '/images/favicon.ico';
export const heroBannerPlaceholderImage = '/images/hero_banner_placeholder.png';
export const heroBannerMobilePlaceholderImage = '/images/hero_banner_placeholder_mobile.png';

export const fileSize10mbInBytes = 10485760;
export const typesForCheckingIsImage = ['.jpg', '.png', '.gif', 'image/', 'jpeg'];
