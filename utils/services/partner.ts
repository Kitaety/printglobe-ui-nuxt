import {getPartnerDataRoute, getPartnerPrefixSkuRoute, partnersListRoute, sendTestSmtpEmailRouter} from '../constants/apiRoutes';
import type {BaseResponse} from './responses';

export const getPartners = (data: {page: number; pageSize: number; filterTerm: string}) =>
    useFetch(partnersListRoute, {
        method: 'post',
        body: data
    });

export const getPartnerConfig = () => useFetch<BaseResponse>(getPartnerDataRoute, {
	headers: {
		domain: useRequestURL().hostname
	}
});

export const getPartnerPrefixSku = (id: number) => useFetch(`${getPartnerPrefixSkuRoute}/${id}`);

export const sendTestEmail = (partnerId: number, email: string) =>
    useFetch(`${sendTestSmtpEmailRouter}/${partnerId}`, {
        body: {email}
    });
