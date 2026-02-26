"use client";

import Script from "next/script";

const ChatwootWidget = () => {
    return (
        <>
            <Script
                id="chatwoot-sdk"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(d,t) {
              var BASE_URL="https://app.chatwoot.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'aZ6xpMzvmDhRXFncrBCYumGd',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `,
                }}
            />
        </>
    );
};

export default ChatwootWidget;
