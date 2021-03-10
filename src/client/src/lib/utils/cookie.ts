export const setCookie = (
	cookieKey: string, 
	cookieValue: string, 
	cookieExpire: number, 
	isSecure: boolean,
	cookiePath: string = '/'
) => {
	const date = new Date();
	date.setTime(date.getTime() + cookieExpire * 60 * 60 * 1000);

	let cookie = `${escape(cookieKey)}=${escape(cookieValue)}`;
	cookie+=(cookieExpire ? '; EXPIRES='+ date.toUTCString() : '');
	cookie+=(cookiePath ? '; PATH='+cookiePath : '');
	cookie+=(isSecure ? '; SECURE' : '');

	document.cookie = cookie;
}