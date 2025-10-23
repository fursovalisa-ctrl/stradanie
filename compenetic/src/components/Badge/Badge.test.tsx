import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Badge } from './Badge';

const HomeIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path d={'M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z'} />
  </svg>
);

describe('Компонент Badge', () => {
  // Базовый тест на рендеринг
  it('рендерится без ошибок с минимальными пропсами', () => {
    render(<Badge />);
    expect(screen.getByTestId('badge-wrapper')).toBeInTheDocument();
  });

  // Тесты на отображение содержимого
  it('отображает числовой label', () => {
    render(<Badge label={5} />);
    expect(screen.getByTestId('badge-content')).toHaveTextContent('5');
  });

  it('отображает текстовый label', () => {
    render(<Badge label={'New'} />);
    expect(screen.getByTestId('badge-content')).toHaveTextContent('New');
  });

  it('отображает иконку, когда передан пропс icon', () => {
    render(<Badge icon={HomeIcon} />);
    const iconElement = screen.getByTestId('badge-content').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  // Тесты на позиционирование
  it('применяет правильный класс позиционирования', () => {
    render(<Badge position={'top-right'} />);
    const container = screen.getByTestId('badge-container');
    expect(container.className).toMatch(/position-top-right/);
  });

  it('применяет смещение через CSS переменные', () => {
    render(<Badge positionOffset={{ x: 10, y: -5 }} />);
    const container = screen.getByTestId('badge-container');
    expect(container).toHaveStyle({ '--badge-offset-x': '10px' });
    expect(container).toHaveStyle({ '--badge-offset-y': '-5px' });
  });

  // Тесты на варианты отображения
  it('применяет класс colorScheme', () => {
    render(<Badge colorScheme={'green'} />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).toMatch(/color-green/);
  });

  it('применяет класс variant', () => {
    render(<Badge variant={'outline'} />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).toMatch(/variant-outline/);
  });

  // Тесты на интерактивность
  it('добавляет класс interactive при наличии обработчиков событий', () => {
    render(<Badge onClick={vi.fn()} />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).toMatch(/interactive/);
  });

  it('не добавляет класс interactive при isDisabled, даже если есть обработчики', () => {
    render(<Badge onClick={vi.fn()} isDisabled />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).not.toMatch(/interactive/);
    expect(content.className).toMatch(/disabled/);
  });

  it('вызывает обработчик onClick при клике', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('badge-content'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('не вызывает обработчик onClick при isDisabled', () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick} isDisabled />);
    fireEvent.click(screen.getByTestId('badge-content'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Тест на передачу пользовательского класса
  it('применяет переданный className', () => {
    render(<Badge className={'custom-class'} />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).toMatch(/custom-class/);
  });

  // Тест на механику выреза (cutout)
  it('применяет cutoutBackground через CSS переменную', () => {
    render(<Badge cutoutBackground={'red'} />);
    expect(screen.getByTestId('badge-container')).toHaveStyle({ '--badge-cutout-bg': 'red' });
  });

  // Тест на рендеринг дочерних элементов
  it('рендерит переданные children', () => {
    render(
      <Badge>
        <div data-testid={'child'}>Child</div>
      </Badge>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  // Тест на кастомный data-testid
  it('использует переданный data-testid', () => {
    render(<Badge data-testid={'custom-badge'} />);
    expect(screen.getByTestId('custom-badge-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('custom-badge-container')).toBeInTheDocument();
    expect(screen.getByTestId('custom-badge-content')).toBeInTheDocument();
  });

  // Тест на комбинацию классов
  it('корректно комбинирует несколько классов', () => {
    render(<Badge colorScheme={'blue'} variant={'filled'} className={'extra-class'} />);
    const content = screen.getByTestId('badge-content');
    expect(content.className).toMatch(/color-blue/);
    expect(content.className).toMatch(/variant-filled/);
    expect(content.className).toMatch(/extra-class/);
  });
});
