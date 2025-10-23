import React from 'react';
import type { Meta } from '@storybook/react';
import { List } from './List';

import '../../i18n';
import { CodeBlock, Divider, Grid, Header, pageStyles, Section, Table } from '../StoryComponents';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const demoItems = [
  'Clone or download repository from GitHub',
  'Install dependencies with yarn',
  'To start development server run npm start command',
  'Run tests to make sure your changes do not break the build',
];

export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «List»'} />

    <Divider />
    <Section title={'Общее'}>
      <Table
        headers={['Вариант', 'Вид списка']}
        rows={[
          [
            <>
              <h3>Маркированный вид</h3>
              <h4>variant: unordered</h4>
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List variant={'unordered'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
          [
            <>
              <h3>Нумерованный список</h3>
              <h4>variant: ordered</h4>
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List variant={'ordered'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
        ]}
      />
    </Section>

    <Section title={'Размеры'}>
      <Header
        title={''}
        subtitle={
          'Горизонтальные отступы между пунктами. Одинаковы для маркированного и нумерованного списков'
        }
      />
      <Table
        headers={['Размер', 'Вид списка']}
        rows={[
          [
            <>
              <h3>paragraph-1-regular</h3>
              <h4>size: xl</h4>
              <CodeBlock
                content={`
            gap: 14px;
            font-size: 18px;
            padding-left: 10px;
            `}
              />
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List size={'xl'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
          [
            <>
              <h3>paragraph-2-regular</h3>
              <h4>size: lg</h4>
              <CodeBlock
                content={`
            gap: 12px;
            font-size: 16px;
            padding-left: 9px;
            `}
              />
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List size={'lg'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
          [
            <>
              <h3>paragraph-3-regular</h3>
              <h4>size: md</h4>
              <CodeBlock
                content={`
            gap: 10px;
            font-size: 14px;
            padding-left: 8px;
            `}
              />
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List size={'md'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
          [
            <>
              <h3>paragraph-4-regular</h3>
              <h4>size: sm</h4>
              <CodeBlock
                content={`
            gap: 8px;
            font-size: 12px;
            padding-left: 7px;
            `}
              />
            </>,

            <div style={{ marginLeft: '20px' }}>
              <List size={'sm'}>
                {demoItems.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            </div>,
          ],
        ]}
      />
    </Section>
    <Section title={'Нумерованный список'}>
      <Grid>
        <div>
          <h4>Список выравнивается по наибольшему числу</h4>
          <List variant={'ordered'} size={'sm'}>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
          </List>
        </div>
        <div>
          <h4>Нумерация с произвольного числа</h4>
          <List variant={'ordered'} start={22} size={'sm'}>
            {demoItems.map((item) => (
              <List.Item>{item}</List.Item>
            ))}
          </List>
        </div>
      </Grid>
    </Section>
  </div>
);

export const Playground = {
  args: {
    children: (
      <>
        <List.Item>Первый</List.Item>
        <List.Item>Второй</List.Item>
        <List.Item>Третий</List.Item>
        <List.Item>Четвертый</List.Item>
      </>
    ),
    variant: 'numbers',
    start: 1,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['ordered', 'unordered'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },

  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента List со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};
