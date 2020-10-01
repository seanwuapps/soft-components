import { ComponentInterface } from '@stencil/core'

/**
 * Provide default error messages for ValidityState
 */
export const validityMessages = (el: ComponentInterface) => ({
  badInput: 'Bad input.',
  // A Boolean that is true if the user has provided input that the browser is unable to convert.
  patternMismatch: 'Invalid format.',
  // A Boolean that is true if the value does not match the specified pattern, and false if it does match. If true, the element matches the :invalid CSS pseudo-class.
  rangeOverflow: `Value must be smaller than ${el.max}`,
  // A Boolean that is true if the value is greater than the maximum specified by the max attribute, or false if it is less than or equal to the maximum. If true, the element matches the :invalid and :out-of-range and CSS pseudo-classes.
  rangeUnderflow: `Value must be greater or equal to ${el.min}.`,
  // A Boolean that is true if the value is less than the minimum specified by the min attribute, or false if it is greater than or equal to the minimum. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
  stepMismatch: 'Please enter a valid number.',
  // A Boolean that is true if the value does not fit the rules determined by the step attribute (that is, it's not evenly divisible by the step value), or false if it does fit the step rule. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
  tooLong: `Please enter no more than ${el.maxlength} characters.`,
  // A Boolean that is true if the value exceeds the specified maxlength for HTMLInputElement or HTMLTextAreaElement objects, or false if its length is less than or equal to the maximum length. Note: This property is never true in Gecko, because elements' values are prevented from being longer than maxlength. If true, the element matches the the :invalid and :out-of-range CSS pseudo-classes.
  tooShort: `Please enter at least ${el.minlength} characters.`,
  // A Boolean that is true if the value fails to meet the specified minlength for HTMLInputElement or HTMLTextAreaElement objects, or false if its length is greater than or equal to the minimum length. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
  typeMismatch: `Please enter a valid ${el.type}`,
  // A Boolean that is true if the value is not in the required syntax (when type is email or url), or false if the syntax is correct. If true, the element matches the :invalid CSS pseudo-class.
  valueMissing: 'This field is required.',
  // A Boolean that is true if the element has a required attribute, but no value, or false otherwise. If true, the element matches the :invalid CSS pseudo-class.
})
