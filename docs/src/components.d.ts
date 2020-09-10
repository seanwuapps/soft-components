/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppHeader {
    }
    interface AppLogo {
    }
    interface AppNav {
    }
    interface AppRoot {
    }
    interface CodeBlock {
        "code": string;
        "tag": string;
    }
    interface CodepenLink {
        /**
          * CSS code
         */
        "css"?: string;
        /**
          * semi-colon separate multiple files
         */
        "cssExternal"?: string;
        /**
          * CSS preprocessor
         */
        "cssPreProcessor"?: 'none' | 'less' | 'scss' | 'sass' | 'stylus';
        /**
          * CSS prefix
         */
        "cssPrefix"?: 'autoprefixer' | 'prefixfree' | 'neither';
        /**
          * CSS reset or normalisation
         */
        "cssStarter"?: 'normalize' | 'reset' | 'neither';
        /**
          * Description of new pen
         */
        "description"?: string;
        /**
          * Set which editors are open. In this example HTML open, CSS closed, JS open
         */
        "editors"?: string;
        /**
          * Code that should go inside <head></head>
         */
        "head"?: string;
        /**
          * HTML code
         */
        "html"?: string;
        /**
          * HTML classes
         */
        "htmlClasses"?: string;
        /**
          * HTML preprocessor
         */
        "htmlPreProcessor"?: 'none' | 'slim' | 'haml' | 'markdown';
        /**
          * When the Pen is saved, it will save as Private if logged in user has that privledge, otherwise it will save as public
         */
        "isPrivate"?: boolean;
        /**
          * JavaScript code
         */
        "js"?: string;
        /**
          * semi-colon separate multiple files
         */
        "jsExternal"?: string;
        /**
          * JavaScript preprocessor
         */
        "jsPreProcessor"?: 'none' | 'coffeescript' | 'babel' | 'livescript' | 'typescript';
        /**
          * Layout of the new pen
         */
        "layout"?: 'top' | 'left' | 'right';
        /**
          * If supplied, the Pen will save as a fork of this id. Note it's not the slug, but ID. You can find the ID of a Pen with `window.CP.pen.id` in the browser console.
         */
        "parent"?: string;
        /**
          * Title of new pen
         */
        "penTitle"?: string;
        /**
          * an array of strings
         */
        "tags"?: Array<string>;
    }
    interface ComponentSidebar {
    }
    interface DocUsage {
        "usage": string;
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
    interface PageStandard {
        "history": RouterHistory;
        /**
          * url params matcher
         */
        "match": MatchResults;
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
    interface HTMLCodeBlockElement extends Components.CodeBlock, HTMLStencilElement {
    }
    var HTMLCodeBlockElement: {
        prototype: HTMLCodeBlockElement;
        new (): HTMLCodeBlockElement;
    };
    interface HTMLCodepenLinkElement extends Components.CodepenLink, HTMLStencilElement {
    }
    var HTMLCodepenLinkElement: {
        prototype: HTMLCodepenLinkElement;
        new (): HTMLCodepenLinkElement;
    };
    interface HTMLComponentSidebarElement extends Components.ComponentSidebar, HTMLStencilElement {
    }
    var HTMLComponentSidebarElement: {
        prototype: HTMLComponentSidebarElement;
        new (): HTMLComponentSidebarElement;
    };
    interface HTMLDocUsageElement extends Components.DocUsage, HTMLStencilElement {
    }
    var HTMLDocUsageElement: {
        prototype: HTMLDocUsageElement;
        new (): HTMLDocUsageElement;
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
    interface HTMLPageStandardElement extends Components.PageStandard, HTMLStencilElement {
    }
    var HTMLPageStandardElement: {
        prototype: HTMLPageStandardElement;
        new (): HTMLPageStandardElement;
    };
    interface HTMLElementTagNameMap {
        "app-header": HTMLAppHeaderElement;
        "app-logo": HTMLAppLogoElement;
        "app-nav": HTMLAppNavElement;
        "app-root": HTMLAppRootElement;
        "code-block": HTMLCodeBlockElement;
        "codepen-link": HTMLCodepenLinkElement;
        "component-sidebar": HTMLComponentSidebarElement;
        "doc-usage": HTMLDocUsageElement;
        "page-components": HTMLPageComponentsElement;
        "page-helper-classes": HTMLPageHelperClassesElement;
        "page-home": HTMLPageHomeElement;
        "page-notfound": HTMLPageNotfoundElement;
        "page-standard": HTMLPageStandardElement;
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
    interface CodeBlock {
        "code"?: string;
        "tag"?: string;
    }
    interface CodepenLink {
        /**
          * CSS code
         */
        "css"?: string;
        /**
          * semi-colon separate multiple files
         */
        "cssExternal"?: string;
        /**
          * CSS preprocessor
         */
        "cssPreProcessor"?: 'none' | 'less' | 'scss' | 'sass' | 'stylus';
        /**
          * CSS prefix
         */
        "cssPrefix"?: 'autoprefixer' | 'prefixfree' | 'neither';
        /**
          * CSS reset or normalisation
         */
        "cssStarter"?: 'normalize' | 'reset' | 'neither';
        /**
          * Description of new pen
         */
        "description"?: string;
        /**
          * Set which editors are open. In this example HTML open, CSS closed, JS open
         */
        "editors"?: string;
        /**
          * Code that should go inside <head></head>
         */
        "head"?: string;
        /**
          * HTML code
         */
        "html"?: string;
        /**
          * HTML classes
         */
        "htmlClasses"?: string;
        /**
          * HTML preprocessor
         */
        "htmlPreProcessor"?: 'none' | 'slim' | 'haml' | 'markdown';
        /**
          * When the Pen is saved, it will save as Private if logged in user has that privledge, otherwise it will save as public
         */
        "isPrivate"?: boolean;
        /**
          * JavaScript code
         */
        "js"?: string;
        /**
          * semi-colon separate multiple files
         */
        "jsExternal"?: string;
        /**
          * JavaScript preprocessor
         */
        "jsPreProcessor"?: 'none' | 'coffeescript' | 'babel' | 'livescript' | 'typescript';
        /**
          * Layout of the new pen
         */
        "layout"?: 'top' | 'left' | 'right';
        /**
          * If supplied, the Pen will save as a fork of this id. Note it's not the slug, but ID. You can find the ID of a Pen with `window.CP.pen.id` in the browser console.
         */
        "parent"?: string;
        /**
          * Title of new pen
         */
        "penTitle"?: string;
        /**
          * an array of strings
         */
        "tags"?: Array<string>;
    }
    interface ComponentSidebar {
    }
    interface DocUsage {
        "usage"?: string;
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
    interface PageStandard {
        "history"?: RouterHistory;
        /**
          * url params matcher
         */
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "app-header": AppHeader;
        "app-logo": AppLogo;
        "app-nav": AppNav;
        "app-root": AppRoot;
        "code-block": CodeBlock;
        "codepen-link": CodepenLink;
        "component-sidebar": ComponentSidebar;
        "doc-usage": DocUsage;
        "page-components": PageComponents;
        "page-helper-classes": PageHelperClasses;
        "page-home": PageHome;
        "page-notfound": PageNotfound;
        "page-standard": PageStandard;
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
            "code-block": LocalJSX.CodeBlock & JSXBase.HTMLAttributes<HTMLCodeBlockElement>;
            "codepen-link": LocalJSX.CodepenLink & JSXBase.HTMLAttributes<HTMLCodepenLinkElement>;
            "component-sidebar": LocalJSX.ComponentSidebar & JSXBase.HTMLAttributes<HTMLComponentSidebarElement>;
            "doc-usage": LocalJSX.DocUsage & JSXBase.HTMLAttributes<HTMLDocUsageElement>;
            "page-components": LocalJSX.PageComponents & JSXBase.HTMLAttributes<HTMLPageComponentsElement>;
            "page-helper-classes": LocalJSX.PageHelperClasses & JSXBase.HTMLAttributes<HTMLPageHelperClassesElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notfound": LocalJSX.PageNotfound & JSXBase.HTMLAttributes<HTMLPageNotfoundElement>;
            "page-standard": LocalJSX.PageStandard & JSXBase.HTMLAttributes<HTMLPageStandardElement>;
        }
    }
}
