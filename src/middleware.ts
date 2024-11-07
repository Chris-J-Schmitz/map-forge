import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware();

export const config = {
  matcher: [
    // Matches all routes except static assets and Next.js internals
    '/((?!_next|static|.*\\..*).*)',
    // Always include API routes
    '/api/(.*)',
  ],
};
