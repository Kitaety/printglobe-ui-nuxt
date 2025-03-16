import { getClientDocs } from "../constants/apiRoutes";
import type { BaseResponse } from "./responses";

export const getDocs = () => useFetch<BaseResponse>(getClientDocs);
