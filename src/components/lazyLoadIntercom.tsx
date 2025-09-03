'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const INTERCOM_APP_ID = 'pk1lmohm'

// Pages where Intercom should be loaded (interactive/support pages)
const INTERCOM_ENABLED_PAGES = [
  '/', // Home page - main conversion point
  '/apply', // Application page - users need support
  '/for-founders', // Founder landing page - sales support
  '/for-investors', // Investor landing page - sales support
  '/careers', // Career page - recruitment support
  '/careers/apply', // Career application - support needed
  '/faq', // FAQ page - additional support might be needed
] as const

// Pages that shouldn't load Intercom (static/legal pages)
const INTERCOM_DISABLED_PAGES = [
  '/legal',
  '/legal/privacy',
  '/legal/terms', 
  '/legal/cookies',
  '/legal/dmca',
  '/data-request',
] as const

/**
 * Determines if Intercom should be loaded on the current page
 */
function shouldLoadIntercom(pathname: string): boolean {
  // Explicitly disabled pages
  if (INTERCOM_DISABLED_PAGES.some(page => pathname.startsWith(page))) {
    return false
  }
  
  // Explicitly enabled pages
  if (INTERCOM_ENABLED_PAGES.includes(pathname as any)) {
    return true
  }
  
  // Enable on career application pages
  if (pathname.includes('/careers/') && pathname.includes('/apply')) {
    return true
  }
  
  // Default: load on interactive pages, skip on static ones
  return !pathname.startsWith('/legal') && !pathname.includes('/sitemap')
}

/**
 * Simple Intercom Facade - Lightweight JavaScript Implementation
 * Creates a custom launcher button and loads Intercom on demand
 */
export default function IntercomProvider() {
  const pathname = usePathname()
  const shouldEnableIntercom = shouldLoadIntercom(pathname)

  useEffect(() => {
    // Don't load Intercom on pages that don't need it
    if (!shouldEnableIntercom) {
      return
    }

    // Set up Intercom settings
    window.intercomSettings = {
      app_id: INTERCOM_APP_ID,
      background_color: '#232428',
    }

    // Load the simple Intercom facade
    const script = document.createElement('script')
    script.innerHTML = `
      (function(t){var c=t.app_id!=="undefined"?t.app_id:"";if(!c){return}var e=typeof t.background_color!=="undefined"?t.background_color:"#333333";var n=function(e,t=null,n=null){var o=document.createElement("div");Object.keys(e).forEach(function(t){o.style[t]=e[t]});if(t){o.setAttribute("id",t)}o.innerHTML=n;return o};var o=function(t){if(!window.Intercom){var e=window;var n=e.Intercom;if(typeof n==="function"){n("reattach_activator");n("update",window.intercomSettings)}else{var o=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(t){i.q.push(t)};e.Intercom=i;var r=function(){var t=o.createElement("script");t.type="text/javascript";t.async=true;t.src="https://widget.intercom.io/widget/"+c+"/";var e=o.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}r()}if(t){s.style.opacity="0";d.style.opacity="1";d.style.transform="rotate(0deg)";window.Intercom("show")}var a=0;var l=setInterval(function(){a++;if(window.Intercom.booted){if(document.querySelector("#intercom-facade-btn")!==null){document.querySelector("#intercom-facade-btn").remove()}clearInterval(l)}else if(a>10){clearInterval(l)}},1e3);return true};var i=\`<svg height="24px" width="22px" focusable="false" aria-hidden="true" fill="none" viewBox="0 0 205 223"><path fill="#fff" fill-rule="evenodd" d="M195 6V5v1ZM0 223ZM87 52 0 0v223h10c35 0 75-15 92-61-15 5-88 53-92 56V105l77 47V52ZM195 5h1l-1 113-93-56v99l103 62V0h-10c-35 0-76 15-93 60 15-4 85-49 93-54V5Z" clip-rule="evenodd"/></svg>\`;var s=n({display:"flex",WebkitBoxAlign:"center",alignItems:"center",WebkitBoxPack:"center",justifyContent:"center",position:"absolute",top:"0px",bottom:"0px",width:"100%",transform:"rotate(0deg) scale(1)",transition:"transform 0.16s linear 0s, opacity 0.08s linear 0s"},null,i);var r=\`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"></path></svg>\`;var d=n({display:"flex",WebkitBoxAlign:"center",alignItems:"center",WebkitBoxPack:"center",justifyContent:"center",position:"absolute",top:"0px",bottom:"0px",width:"100%",transition:"transform 0.16s linear 0s, opacity 0.08s linear 0s",opacity:"0",transform:"rotate(-30deg)"},null,r);var a=n({position:"absolute",top:"0px",left:"0px",width:"48px",height:"48px",borderRadius:"50%",cursor:"pointer",transformOrigin:"center",overflowX:"hidden",overflowY:"hidden",WebkitBackfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"});var l=n({fontFamily:"intercom-font, 'Helvetica Neue', 'Apple Color Emoji', Helvetica, Arial, sans-serif",fontSize:"100%",fontStyle:"normal",letterSpacing:"normal",fontStretch:"normal",fontVariantLigatures:"normal",fontVariantCaps:"normal",fontVariantEastAsian:"normal",fontVariantPosition:"normal",fontWeight:"normal",textAlign:"left",textDecorationLine:"none",textDecorationStyle:"initial",textDecorationColor:"initial",textDecoration:"none",textIndent:"0px",textShadow:"none",textTransform:"none",boxSizing:"content-box",WebkitTextEmphasisStyle:"none",WebkitTextEmphasisColor:"initial",WebkitFontSmoothing:"antialiased",lineHeight:1});var p=n({zIndex:2147483004,position:"fixed",bottom:"20px",display:"block",right:"20px",width:"48px",height:"48px",borderRadius:"50%",boxShadow:"rgba(0, 0, 0, 0.0588235) 0px 1px 6px 0px, rgba(0, 0, 0, 0.156863) 0px 2px 32px 0px",backgroundColor:e},"intercom-facade-btn");a.append(s);a.append(d);l.append(a);l.addEventListener("click",function(){o(true)});l.addEventListener("mouseenter",function(){o(false)});p.append(l);document.querySelector("body").append(p);if(typeof t.custom_launcher_selector!=="undefined"){document.querySelectorAll(t.custom_launcher_selector).forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();o(true)})})}})(window.intercomSettings);
    `
    
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove the custom button if it exists
      const btn = document.querySelector('#intercom-facade-btn')
      if (btn) {
        btn.remove()
      }
      
      // Remove the script
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [shouldEnableIntercom, pathname])

  // Don't render anything - the script handles everything
  return null
}

// TypeScript declarations for global objects
declare global {
  interface Window {
    intercomSettings?: {
      app_id: string
      background_color?: string
      custom_launcher_selector?: string
      [key: string]: unknown
    }
  }
  
  var Intercom: ((action: string, data?: Record<string, unknown>) => void) & {
    booted?: boolean
  }
}
