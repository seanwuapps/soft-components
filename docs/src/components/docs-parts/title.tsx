import { FunctionalComponent, h } from '@stencil/core';
import { DocPartProps } from '../../helpers/defs';

export const Title: FunctionalComponent<DocPartProps> = ({ component }) => <h1>{component.tag}</h1>;
