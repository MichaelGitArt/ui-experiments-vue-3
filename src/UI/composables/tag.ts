// Utilities
import { propsFactory } from '@UI/util/propsFactory';

export const makeTagProp = propsFactory({
  tag: {
    type: String,
    default: 'div',
  },
});
