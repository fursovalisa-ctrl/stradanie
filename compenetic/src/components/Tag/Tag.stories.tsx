import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { Header, Divider, Table, pageStyles } from '../StoryComponents';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

// TODO: заменить на компонент иконки
const crossSvg = (
  <svg
    width={'16'}
    height={'16'}
    stroke={'currentColor'}
    viewBox={'0 0 16 16'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g clip-path={'url(#clip0_2105_45864)'}>
      <mask
        id={'mask0_2105_45864'}
        style={{
          maskType: 'alpha',
        }}
        maskUnits={'userSpaceOnUse'}
        x={'0'}
        y={'0'}
        width={'16'}
        height={'16'}
      >
        <path
          d={'M12 4L4 12M4 4L12 12'}
          stroke={'black'}
          stroke-width={'1.33333'}
          stroke-linecap={'round'}
          stroke-linejoin={'round'}
        />
      </mask>
      <g mask={'url(#mask0_2105_45864)'}>
        <rect width={'16'} height={'16'} fill={'currentColor'} />
      </g>
    </g>
    <defs>
      <clipPath id={'clip0_2105_45864'}>
        <rect width={'16'} height={'16'} fill={'white'} />
      </clipPath>
    </defs>
  </svg>
);

const heartSvg = (
  <svg
    style={{
      stroke: 'currentcolor',
    }}
    width={'16'}
    height={'16'}
    viewBox={'0 0 16 16'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g clip-path={'url(#clip0_22_61615)'}>
      <mask
        style={{
          maskType: 'alpha',
        }}
        id={'mask0_22_61615'}
        maskUnits={'userSpaceOnUse'}
        x={'0'}
        y={'0'}
        width={'16'}
        height={'16'}
      >
        <path
          fill-rule={'evenodd'}
          clip-rule={'evenodd'}
          d={
            'M7.9956 3.42388C6.6627 1.8656 4.43999 1.44643 2.76996 2.87334C1.09993 4.30026 0.864808 6.68598 2.17629 8.3736C3.26671 9.77674 6.56668 12.7361 7.64823 13.6939C7.76923 13.801 7.82973 13.8546 7.9003 13.8757C7.9619 13.8941 8.0293 13.8941 8.09089 13.8757C8.16146 13.8546 8.22196 13.801 8.34296 13.6939C9.42452 12.7361 12.7245 9.77674 13.8149 8.3736C15.1264 6.68598 14.92 4.28525 13.2212 2.87334C11.5225 1.46144 9.3285 1.8656 7.9956 3.42388Z'
          }
          stroke={'black'}
          stroke-width={'1.33333'}
          stroke-linecap={'round'}
          stroke-linejoin={'round'}
        />
      </mask>
      <g mask={'url(#mask0_22_61615)'}>
        <rect width={'16'} height={'16'} fill={'currentColor'} />
      </g>
    </g>
    <defs>
      <clipPath id={'clip0_22_61615'}>
        <rect width={'16'} height={'16'} fill={'white'} />
      </clipPath>
    </defs>
  </svg>
);

export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Компонент «Tag»'} />

    <Divider />

    <Table
      headers={[
        'componentStyle',
        'size=medium',
        'size=medium, disabled',
        'size=large',
        'size=large, disabled',
      ]}
      rows={[
        [
          <strong>neutral</strong>,
          <Tag componentStyle={'neutral'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'neutral'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'neutral'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'neutral'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>positive</strong>,
          <Tag componentStyle={'positive'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'positive'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'positive'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'positive'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>negative</strong>,
          <Tag componentStyle={'negative'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'negative'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'negative'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'negative'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>warning</strong>,
          <Tag componentStyle={'warning'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'warning'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'warning'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'warning'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>vivid</strong>,
          <Tag componentStyle={'vivid'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'vivid'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'vivid'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'vivid'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>special</strong>,
          <Tag componentStyle={'special'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'special'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'special'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'special'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>accent</strong>,
          <Tag componentStyle={'accent'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'accent'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'accent'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'accent'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>blue</strong>,
          <Tag componentStyle={'blue'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'blue'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'blue'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'blue'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>lovely</strong>,
          <Tag componentStyle={'lovely'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'lovely'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'lovely'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'lovely'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
        [
          <strong>dreamy</strong>,
          <Tag componentStyle={'dreamy'} size={'medium'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'dreamy'}
            size={'medium'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
          <Tag componentStyle={'dreamy'} size={'large'} slotStart={heartSvg} slotEnd={crossSvg}>
            Label
          </Tag>,
          <Tag
            componentStyle={'dreamy'}
            size={'large'}
            disabled
            slotStart={heartSvg}
            slotEnd={crossSvg}
          >
            Label
          </Tag>,
        ],
      ]}
    />
  </div>
);

export const Playground = {
  args: {
    children: 'Label',
    size: 'medium',
    componentStyle: 'neutral',
    disabled: false,
    showLabel: true,
    slotStart: heartSvg,
    slotEnd: crossSvg,
  },
  argTypes: {
    slotStart: {
      table: {
        disable: true,
      },
    },
    slotEnd: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Tag со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Story;
