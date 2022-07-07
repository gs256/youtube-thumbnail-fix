const BLOCKED_URL_SEARCH_STRING = "yt3.ggpht.com"
const SAFE_URL_SEARCH_STRING = "yt4.ggpht.com"

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        if (details.url.includes(BLOCKED_URL_SEARCH_STRING)) {
            const newUrl = details.url.replace(
                BLOCKED_URL_SEARCH_STRING,
                SAFE_URL_SEARCH_STRING
            )
            return { redirectUrl: newUrl }
        }
    },
    {
        urls: ["https://" + BLOCKED_URL_SEARCH_STRING + "/*"],
    },
    ["blocking"]
)
