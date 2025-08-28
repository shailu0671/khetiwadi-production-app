export const API_BASE_URL = "https://khetiwadi.com";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const SIGNUP = getApiUrl('/signup');


export const FetchMandi = getApiUrl('/mandi/api/mandi')
export const FetchState = getApiUrl('/mandi/api/state/')
export const FetchCrops = getApiUrl('/mandi/api/crop/')
export const FetchTages = getApiUrl('/mandi/api/tages/')


export const FetchBlog = getApiUrl('/blog/api/blog')

export const FetchTips = getApiUrl('/api-tips/api')


export const Add_BlogViews = getApiUrl('/blog/api/add_view/')


