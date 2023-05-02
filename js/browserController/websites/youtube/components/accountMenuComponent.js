"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeAccountMenuComponent = void 0;
const componentObject_1 = require("../../abstractions/componentObject");
const webElementObject_1 = require("../../abstractions/webElementObject");
class YoutubeAccountMenuComponent extends componentObject_1.ComponentObject {
    // Web locators for the composing web elements of the account menu component:
    static studioWebLocator = {
        IDLocator: "avatar-btn",
        CSSLocator: "",
        CSSLocator2: "",
        CSSLocator3: "",
        XPath: "",
    };
    static channelWebLocator = {
        IDLocator: "",
        CSSLocator: "",
        CSSLocator2: "",
        CSSLocator3: "",
        XPath: "",
    };
    static accountWebLocator = {
        IDLocator: "",
        CSSLocator: "",
        CSSLocator2: "",
        CSSLocator3: "",
        XPath: "",
    };
    static signOutWebLocator = {
        IDLocator: "",
        CSSLocator: "",
        CSSLocator2: "",
        CSSLocator3: "",
        XPath: "",
    };
    static signInWebLocator = {
        IDLocator: "",
        CSSLocator: "",
        CSSLocator2: "",
        CSSLocator3: "",
        XPath: "",
    };
    // Methods and behaviors of the account menu component:
    async openStudioPage() {
        const webLocator = YoutubeAccountMenuComponent.studioWebLocator;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
    async openChannelDashboardPage() {
        const webLocator = YoutubeAccountMenuComponent.channelWebLocator;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
    async changeAccount() {
        const webLocator = YoutubeAccountMenuComponent.accountWebLocator;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
    async signOut() {
        const webLocator = YoutubeAccountMenuComponent.signOutWebLocator;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
    async signIn() {
        const webLocator = YoutubeAccountMenuComponent.signInWebLocator;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
}
exports.YoutubeAccountMenuComponent = YoutubeAccountMenuComponent;
//# sourceMappingURL=accountMenuComponent.js.map