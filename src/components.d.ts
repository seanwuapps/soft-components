/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ScButton {
    /**
    * The button shape.
    */
    'block'?: boolean | undefined;
    /**
    * If prop exists, button will have an engraved-styled border
    */
    'bordered'?: boolean | undefined;
    /**
    * If `true`, the user cannot interact with the button.
    */
    'disabled': boolean;
    /**
    * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
    */
    'download': string | undefined;
    /**
    * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
    */
    'href': string | undefined;
    /**
    * Icon only button
    */
    'icon'?: boolean | undefined;
    /**
    * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
    */
    'rel': string | undefined;
    /**
    * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
    */
    'target': string | undefined;
    /**
    * The type of the button.
    */
    'type': "submit" | "reset" | "button";
  }
  interface ScCard {
    /**
    * Subtitle of the card
    */
    'cardSubtitle'?: string;
    /**
    * Title of the card
    */
    'cardTitle'?: string;
    /**
    * if true, card will appear engraved instead of raised by default.
    */
    'engraved'?: boolean | undefined;
    /**
    * If this card has flat (border) style
    */
    'flat'?: boolean | undefined;
    /**
    * If this card is hoverable
    */
    'hoverable'?: boolean | undefined;
  }
  interface ScInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * aria labelby
    */
    'ariaLabelledby'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize': string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete': "on" | "off";
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect': "on" | "off";
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus': boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput': boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * Returns the native `<input>` element used under the hood.
    */
    'getInputElement': () => Promise<HTMLInputElement>;
    /**
    * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
    */
    'inputmode'?: | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly': boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required': boolean;
    /**
    * Sets focus on the specified `ion-input`. Use this method instead of the global `input.focus()`.
    */
    'setFocus': () => Promise<void>;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck': boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type': string;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface ScTabs {}
  interface ScToggle {
    /**
    * aria labelby
    */
    'ariaLabelledby'?: string;
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus': boolean;
    /**
    * If this toggle is on by default
    */
    'checked'?: boolean | undefined;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * Label text to be displayed inline with the toggle
    */
    'label': string | undefined;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
}

declare global {


  interface HTMLScButtonElement extends Components.ScButton, HTMLStencilElement {}
  var HTMLScButtonElement: {
    prototype: HTMLScButtonElement;
    new (): HTMLScButtonElement;
  };

  interface HTMLScCardElement extends Components.ScCard, HTMLStencilElement {}
  var HTMLScCardElement: {
    prototype: HTMLScCardElement;
    new (): HTMLScCardElement;
  };

  interface HTMLScInputElement extends Components.ScInput, HTMLStencilElement {}
  var HTMLScInputElement: {
    prototype: HTMLScInputElement;
    new (): HTMLScInputElement;
  };

  interface HTMLScTabsElement extends Components.ScTabs, HTMLStencilElement {}
  var HTMLScTabsElement: {
    prototype: HTMLScTabsElement;
    new (): HTMLScTabsElement;
  };

  interface HTMLScToggleElement extends Components.ScToggle, HTMLStencilElement {}
  var HTMLScToggleElement: {
    prototype: HTMLScToggleElement;
    new (): HTMLScToggleElement;
  };
  interface HTMLElementTagNameMap {
    'sc-button': HTMLScButtonElement;
    'sc-card': HTMLScCardElement;
    'sc-input': HTMLScInputElement;
    'sc-tabs': HTMLScTabsElement;
    'sc-toggle': HTMLScToggleElement;
  }
}

declare namespace LocalJSX {
  interface ScButton {
    /**
    * The button shape.
    */
    'block'?: boolean | undefined;
    /**
    * If prop exists, button will have an engraved-styled border
    */
    'bordered'?: boolean | undefined;
    /**
    * If `true`, the user cannot interact with the button.
    */
    'disabled'?: boolean;
    /**
    * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
    */
    'download'?: string | undefined;
    /**
    * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
    */
    'href'?: string | undefined;
    /**
    * Icon only button
    */
    'icon'?: boolean | undefined;
    /**
    * Emitted when the button loses focus.
    */
    'onBlurEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onClickEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onFocusEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
    */
    'rel'?: string | undefined;
    /**
    * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
    */
    'target'?: string | undefined;
    /**
    * The type of the button.
    */
    'type'?: "submit" | "reset" | "button";
  }
  interface ScCard {
    /**
    * Subtitle of the card
    */
    'cardSubtitle'?: string;
    /**
    * Title of the card
    */
    'cardTitle'?: string;
    /**
    * if true, card will appear engraved instead of raised by default.
    */
    'engraved'?: boolean | undefined;
    /**
    * If this card has flat (border) style
    */
    'flat'?: boolean | undefined;
    /**
    * If this card is hoverable
    */
    'hoverable'?: boolean | undefined;
  }
  interface ScInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * aria labelby
    */
    'ariaLabelledby'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize'?: string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete'?: "on" | "off";
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect'?: "on" | "off";
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus'?: boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput'?: boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
    */
    'inputmode'?: | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Emitted when the input loses focus.
    */
    'onBlurEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onChangeEvent'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when the input has focus.
    */
    'onFocusEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when a keyboard input occurred.
    */
    'onInputEvent'?: (event: CustomEvent<KeyboardEvent>) => void;
    /**
    * Emitted when a key is pressed down
    */
    'onKeyDownEvent'?: (event: CustomEvent<void>) => void;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly'?: boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required'?: boolean;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck'?: boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type'?: string;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface ScTabs {}
  interface ScToggle {
    /**
    * aria labelby
    */
    'ariaLabelledby'?: string;
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus'?: boolean;
    /**
    * If this toggle is on by default
    */
    'checked'?: boolean | undefined;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * Label text to be displayed inline with the toggle
    */
    'label': string | undefined;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Emitted when the input loses focus.
    */
    'onBlurEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onChangeEvent'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when the input has focus.
    */
    'onFocusEvent'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when a keyboard input occurred.
    */
    'onInputEvent'?: (event: CustomEvent<KeyboardEvent>) => void;
    /**
    * Emitted when a key is pressed down
    */
    'onKeyDownEvent'?: (event: CustomEvent<void>) => void;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }

  interface IntrinsicElements {
    'sc-button': ScButton;
    'sc-card': ScCard;
    'sc-input': ScInput;
    'sc-tabs': ScTabs;
    'sc-toggle': ScToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'sc-button': LocalJSX.ScButton & JSXBase.HTMLAttributes<HTMLScButtonElement>;
      'sc-card': LocalJSX.ScCard & JSXBase.HTMLAttributes<HTMLScCardElement>;
      'sc-input': LocalJSX.ScInput & JSXBase.HTMLAttributes<HTMLScInputElement>;
      'sc-tabs': LocalJSX.ScTabs & JSXBase.HTMLAttributes<HTMLScTabsElement>;
      'sc-toggle': LocalJSX.ScToggle & JSXBase.HTMLAttributes<HTMLScToggleElement>;
    }
  }
}


