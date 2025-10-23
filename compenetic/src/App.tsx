import './App.css';
import { Typography } from './components/Typography';
import { Tag } from './components/Tag';
import { Button } from './components/Button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Palette } from './components/Palette';
import { Card } from 'antd';

const components = [
  {
    name: 'Button',
    component: Button,
    description: 'Basic button component with various styles and states',
    storybookUrl: 'http://localhost:6006/?path=/docs/components-button--docs',
  },
  {
    name: 'Palette',
    component: () => <Palette preview />,
    description: 'Color palette component displaying all design system colors',
    storybookUrl: 'http://localhost:6006/?path=/docs/design-system-palette--docs',
  },
  {
    name: 'Tag',
    component: Tag,
    description: 'A Tag component',
    storybookUrl: 'http://localhost:6006/?path=/docs/components-tag--docs',
  },
  {
    name: 'Typography',
    component: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography.Title size={2} as='h1'>
          Title
        </Typography.Title>
        <Typography.Subtitle size={1} typographyStyle='secondary'>
          Subtitle
        </Typography.Subtitle>
        <Typography.Label size={3} typographyStyle='positive'>
          Label
        </Typography.Label>
        <Typography.Paragraph size={4} typographyStyle='negative-secondary'>
          Paragraph
        </Typography.Paragraph>
      </div>
    ),
    description: 'A Typography component with various styles and sizes',
    storybookUrl: 'http://localhost:6006/?path=/docs/components-typography--specification',
  },
];

const App: React.FC = () => {
  return (
    <div className={'app'}>
      <header className={'header'}>
        <div className={'header-top'}>
          <h1 className={'header-title'}>Skillgrid Component Library</h1>
          <LanguageSwitcher />
        </div>
        <p className={'header-description'}>
          Click on any component to view its Storybook documentation
        </p>
      </header>

      <div className={'component-grid'}>
        {components.map(({ name, component: Component, description, storybookUrl }) => (
          <Card
            key={name}
            hoverable
            className={'component-card'}
            onClick={() => window.open(storybookUrl, '_blank', 'noopener,noreferrer')}
          >
            <div className={'component-preview'}>
              <Component />
            </div>
            <Card.Meta
              title={<div className={'component-title'}>{name}</div>}
              description={<div className={'component-description'}>{description}</div>}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
