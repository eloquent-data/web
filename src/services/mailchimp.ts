const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL as string;

export function subscribeToMailchimp(
  email: string,
  firstName: string
): Promise<{ result: string; msg: string }> {
  return new Promise((resolve, reject) => {
    if (!MAILCHIMP_URL) {
      reject(new Error('MailChimp URL not configured'));
      return;
    }

    const params = new URLSearchParams({
      EMAIL: email,
      FNAME: firstName,
      subscribe: 'Subscribe',
    });

    const url = `${MAILCHIMP_URL}&${params.toString()}`;
    const callbackName = `mc_cb_${Date.now()}`;

    const script = document.createElement('script');
    script.src = url.replace('/post?', '/post-json?') + `&c=${callbackName}`;

    (window as Record<string, unknown>)[callbackName] = (data: { result: string; msg: string }) => {
      delete (window as Record<string, unknown>)[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    script.onerror = () => {
      delete (window as Record<string, unknown>)[callbackName];
      document.body.removeChild(script);
      reject(new Error('Network error'));
    };

    document.body.appendChild(script);
  });
}
