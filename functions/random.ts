import { randomEntry } from '../src/webring';

export const onRequestGet: PagesFunction = async (context) => {
  const url = randomEntry()?.url ?? new URL(context.request.url).origin;
  return Response.redirect(url, 303);
};
