import { clerkMiddleware } from "@clerk/nextjs/server";
console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);


export default clerkMiddleware();

export const config = {
  matcher: [
    // Matches all routes except static assets and Next.js internals
    '/((?!_next|static|.*\\..*).*)',
    // Always include API routes
    '/api/(.*)',
  ],
};
