// fro checking what kind of device is being used
const userAgent = (re) => {
    if (typeof window === "undefined" || window.navigator == null) {
        return null;
    }
    return (
        window.navigator["userAgentData"]?.brands.some((brand) =>
            re.test(brand.brand)
        ) || re.test(window.navigator.userAgent)
    );
};

function testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null
        ? re.test(
            window.navigator["userAgentData"]?.platform || window.navigator.platform
        )
        : false;
}

export function isMac() {
    return testPlatform(/^Mac/i);
}

export function isIPhone() {
    return testPlatform(/^iPhone/i);
}

export function isIPad() {
    return (
        testPlatform(/^iPad/i) ||
        // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
        (isMac() && navigator.maxTouchPoints > 1)
    );
}

export function isIOS() {
    return isIPhone() || isIPad();
}

export function isAppleDevice() {
    return isMac() || isIOS();
}

export function isWebKit() {
    return userAgent(/AppleWebKit/i) && !isChrome();
}

export function isChrome() {
    return userAgent(/Chrome/i);
}

export function isAndroid() {
    return userAgent(/Android/i);
}

export function isMobile() {
    return isIOS() || isAndroid();
}

export function isDesktop() {
    return !isMobile();
}

export function isWindows() {
    return testPlatform(/^Win/i);
}

export function isLinux() {
    return testPlatform(/^Linux/i);
}

  // run this code in the browser console to see the results

