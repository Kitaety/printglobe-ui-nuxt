import {apiRoot} from '~/utils/config';

export default defineEventHandler(event => {
	return proxyRequest(event, `${apiRoot}/${event.context.params?.slug}`);
});
