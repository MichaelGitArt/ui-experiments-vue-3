import { h, defineComponent } from 'vue';

import { makeTagProp } from '@UI/composables/tag';
import { makeSizeProps, useSize } from '@/UI/composables/size';
import { makeBorderProps, useBorder } from '@/UI/composables/border';
import { useColor } from '@UI/composables/colors';

const predefinedColors = [
  'primary',
  'secondary',
  'error',
  'info',
  'warning',
  'gray',
];

export default defineComponent({
  name: 'ABtn',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value: string): boolean => {
        return predefinedColors.includes(value);
      },
    },

    ...makeTagProp({ tag: 'button' }),
    ...makeSizeProps(),
    ...makeBorderProps(),
  },

  setup(props, { slots }) {
    const { sizeClasses } = useSize(props, 'a-btn');
    const { borderClasses } = useBorder(props, 'a-btn');

    const isFilled = !props.border;
    const { colorClasses } = useColor({
      [isFilled ? 'background' : 'text']: props.color,
    });

    const overlayEl = h('span', { class: 'a-btn__overlay' });
    return () =>
      h(
        props.tag,
        {
          class: [
            'a-btn',
            borderClasses.value,
            colorClasses.value,
            sizeClasses.value,
          ],
        },
        [overlayEl, slots.default?.()]
      );
  },
});
