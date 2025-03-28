export function openLiveChat() {
    const chatWidget = document.getElementById('chat-widget-minimized') as HTMLIFrameElement;

    if (!chatWidget) {
        return;
    }

    const chatButtons = chatWidget.contentDocument?.getElementsByTagName('button');
    const [chatButton] = chatButtons || [];
    if (chatButton) {
        chatButton.click();
    }
}

export function openChat(e: Event) {
    e.preventDefault();
    if (isServer) {
        return;
    }
    openLiveChat();
}

export const isServer = typeof window === 'undefined';

export const parseBoolean = (value: string | undefined) => value === 'true';

export function clickPhoneNumber(partnerPhone: string | null | undefined = null) {
    const tel = document.createElement('a');
    const number = document.getElementsByClassName('site-phone')[0];

    const phoneText = partnerPhone || number.innerHTML;

    tel.href = `tel:${phoneText.replace(/\D/g, '')}`;
    tel.click();
}
