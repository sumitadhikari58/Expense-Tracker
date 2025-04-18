import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// ✅ Define all public routes here (with wildcard for Clerk internal routing)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',  // 👈 This is key
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}