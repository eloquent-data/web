const MAILCHIMP_ENDPOINT =
  'https://eloquentdata.us2.list-manage.com/subscribe/post-json?u=dcecb2cfb309250d79bc47e22&amp;id=c4cfd3ae38&amp;';

interface MailChimpResponse {
  result: string;
  msg: string;
}

export function subscribeToMailchimp(name: string, email: string): Promise<MailChimpResponse> {
  return new Promise((resolve, reject) => {
    const callbackName = `mc_callback_${Date.now()}`;
    const params = new URLSearchParams({
      FULLNAME: name,
      EMAIL: email,
      subscribe: 'Subscribe',
      b_dcecb2cfb309250d79bc47e22_c4cfd3ae38: '',
      c: callbackName,
    });

    const url = MAILCHIMP_ENDPOINT + params.toString();

    const script = document.createElement('script');
    script.src = url;

    (window as any)[callbackName] = (response: MailChimpResponse) => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      resolve(response);
    };

    script.onerror = () => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      reject(new Error('Network error'));
    };

    document.body.appendChild(script);
  });
}
