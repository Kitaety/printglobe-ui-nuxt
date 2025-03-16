import queryString from "query-string";

export default defineEventHandler(event => {
	const config = useRuntimeConfig();
	const query = getQuery(event);
	const queryParamsString = queryString.stringify(query);
	return proxyRequest(event, `${config.app.apiRoot}/${event.context.params?.slug}${queryParamsString ? `?${queryParamsString}` : ''}`);
});
