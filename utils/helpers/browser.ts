export function changeContentScrollState(shouldLock: boolean) {
    if (!document) {
        return;
    }

    const htmlElement = document.getElementsByTagName('html')[0];

    if (!htmlElement) {
        return;
    }

    if (shouldLock) {
        htmlElement.classList.add('lock-scroll');
    } else {
        htmlElement.classList.remove('lock-scroll');
    }
}
