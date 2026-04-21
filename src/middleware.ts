import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Ignore the root path '/' and any paths with file extensions (assets)
  if (path !== '/' && !path.includes('.')) {
    // If path doesn't end with a slash, redirect 301 to the slash version
    if (!path.endsWith('/')) {
      url.pathname = `${path}/`;
      return Response.redirect(url.toString(), 301);
    }
  }

  return next();
});
