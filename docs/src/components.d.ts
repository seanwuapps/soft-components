/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHeader {
    }
    interface AppLogo {
    }
    interface AppNav {
    }
    interface AppRoot {
    }
    interface PageComponents {
        /**
          * url params matcher
         */
        "match": MatchResults;
    }
    interface PageHelperClasses {
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface StylingSandbox {
    }
}
declare global {
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {
    }
    var HTMLAppLogoElement: {
        prototype: HTMLAppLogoElement;
        new (): HTMLAppLogoElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLPageComponentsElement extends Components.PageComponents, HTMLStencilElement {
    }
    var HTMLPageComponentsElement: {
        prototype: HTMLPageComponentsElement;
        new (): HTMLPageComponentsElement;
    };
    interface HTMLPageHelperClassesElement extends Components.PageHelperClasses, HTMLStencilElement {
    }
    var HTMLPageHelperClassesElement: {
        prototype: HTMLPageHelperClassesElement;
        new (): HTMLPageHelperClassesElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageNotfoundElement extends Components.PageNotfound, HTMLStencilElement {
    }
    var HTMLPageNotfoundElement: {
        prototype: HTMLPageNotfoundElement;
        new (): HTMLPageNotfoundElement;
    };
    interface HTMLStylingSandboxElement extends Components.StylingSandbox, HTMLStencilElement {
    }
    var HTMLStylingSandboxElement: {
        prototype: HTMLStylingSandboxElement;
        new (): HTMLStylingSandboxElement;
    };
    interface HTMLElementTagNameMap {
        "app-header": HTMLAppHeaderElement;
        "app-logo": HTMLAppLogoElement;
        "app-nav": HTMLAppNavElement;
        "app-root": HTMLAppRootElement;
        "page-components": HTMLPageComponentsElement;
        "page-helper-classes": HTMLPageHelperClassesElement;
        "page-home": HTMLPageHomeElement;
        "page-notfound": HTMLPageNotfoundElement;
        "styling-sandbox": HTMLStylingSandboxElement;
    }
}
declare namespace LocalJSX {
    interface AppHeader {
    }
    interface AppLogo {
    }
    interface AppNav {
    }
    interface AppRoot {
    }
    interface PageComponents {
        /**
          * url params matcher
         */
        "match"?: MatchResults;
    }
    interface PageHelperClasses {
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface StylingSandbox {
    }
    interface IntrinsicElements {
        "app-header": AppHeader;
        "app-logo": AppLogo;
        "app-nav": AppNav;
        "app-root": AppRoot;
        "page-components": PageComponents;
        "page-helper-classes": PageHelperClasses;
        "page-home": PageHome;
        "page-notfound": PageNotfound;
        "styling-sandbox": StylingSandbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-logo": LocalJSX.AppLogo & JSXBase.HTMLAttributes<HTMLAppLogoElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "page-components": LocalJSX.PageComponents & JSXBase.HTMLAttributes<HTMLPageComponentsElement>;
            "page-helper-classes": LocalJSX.PageHelperClasses & JSXBase.HTMLAttributes<HTMLPageHelperClassesElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notfound": LocalJSX.PageNotfound & JSXBase.HTMLAttributes<HTMLPageNotfoundElement>;
            "styling-sandbox": LocalJSX.StylingSandbox & JSXBase.HTMLAttributes<HTMLStylingSandboxElement>;
        }
    }
}
