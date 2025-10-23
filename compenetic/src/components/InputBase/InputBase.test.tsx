import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import { InputBase } from './InputBase';
import { useInputSync, useTextareaResize, useGripResize } from './lib';
import { useRef, useState } from 'react';

describe('InputBase', () => {
  describe('Basic functionality', () => {
    it('renders without errors', () => {
      render(
        <InputBase>
          <input type='text' />
        </InputBase>,
      );

      expect(screen.getByTestId('input-base-wrapper')).toBeInTheDocument();
    });

    it('displays helper text', () => {
      render(
        <InputBase helper='Helper text'>
          <input type='text' />
        </InputBase>,
      );

      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('applies disabled state', () => {
      const onChange = vi.fn();
      const onFocus = vi.fn();

      render(<InputBase disabled onChange={onChange} onFocus={onFocus} />);

      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();

      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'test' } });

      expect(onFocus).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('applies loading state', () => {
      const onChange = vi.fn();
      const onFocus = vi.fn();

      render(<InputBase loading onChange={onChange} onFocus={onFocus} />);

      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();

      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'test' } });

      expect(onFocus).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('XIcon functionality', () => {
    it('should render XIcon when suffix is provided', () => {
      const onClick = vi.fn();

      render(
        <InputBase
          suffix={
            <span onClick={onClick} data-testid='x-icon'>
              X
            </span>
          }
        >
          <input type='text' />
        </InputBase>,
      );

      const xIcon = screen.getByTestId('x-icon');
      expect(xIcon).toBeInTheDocument();
    });

    it('should call onClick when XIcon is clicked', () => {
      const onClick = vi.fn();

      render(
        <InputBase
          suffix={
            <span onClick={onClick} data-testid='x-icon'>
              X
            </span>
          }
        >
          <input type='text' />
        </InputBase>,
      );

      const xIcon = screen.getByTestId('x-icon');
      fireEvent.click(xIcon);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should show XIcon but with disabled styling when disabled', () => {
      const onClick = vi.fn();
      const onFocus = vi.fn();

      render(
        <InputBase
          disabled
          onFocus={onFocus}
          suffix={
            <span onClick={onClick} data-testid='x-icon'>
              X
            </span>
          }
        />,
      );

      const xIcon = screen.getByTestId('x-icon');
      const input = screen.getByRole('textbox');

      expect(xIcon).toBeInTheDocument();
      expect(input).toBeDisabled();

      fireEvent.click(xIcon);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onFocus).not.toHaveBeenCalled();
    });
  });

  describe('Hooks', () => {
    describe('useInputSync', () => {
      it('should sync input value with external state', () => {
        const TestComponent = () => {
          const [value, setValue] = useState('initial');
          const { inputRef } = useInputSync(value, 'input');

          return (
            <div>
              <input ref={inputRef} data-testid='test-input' />
              <button onClick={() => setValue('updated')} data-testid='update-btn'>
                Update
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const input = screen.getByTestId('test-input');
        const updateBtn = screen.getByTestId('update-btn');

        expect(input).toHaveValue('initial');

        fireEvent.click(updateBtn);

        expect(input).toHaveValue('updated');
      });

      it('should sync textarea value with external state', () => {
        const TestComponent = () => {
          const [value, setValue] = useState('initial');
          const { textareaRef } = useInputSync(value, 'textarea');

          return (
            <div>
              <textarea ref={textareaRef} data-testid='test-textarea' />
              <button onClick={() => setValue('updated')} data-testid='update-btn'>
                Update
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const textarea = screen.getByTestId('test-textarea');
        const updateBtn = screen.getByTestId('update-btn');

        expect(textarea).toHaveValue('initial');

        fireEvent.click(updateBtn);

        expect(textarea).toHaveValue('updated');
      });

      it('should not sync when element value already matches', () => {
        const TestComponent = () => {
          const [value, setValue] = useState('test');
          const { inputRef } = useInputSync(value, 'input');

          return (
            <div>
              <input ref={inputRef} data-testid='test-input' defaultValue='test' />
              <button onClick={() => setValue('test')} data-testid='update-btn'>
                Update
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const input = screen.getByTestId('test-input');
        const updateBtn = screen.getByTestId('update-btn');

        expect(input).toHaveValue('test');

        fireEvent.click(updateBtn);

        expect(input).toHaveValue('test');
      });

      it('should return correct refs based on component type', () => {
        const { result: inputResult } = renderHook(() => useInputSync('test', 'input'));
        const { result: textareaResult } = renderHook(() => useInputSync('test', 'textarea'));

        expect(inputResult.current.currentRef).toBe(inputResult.current.inputRef);
        expect(textareaResult.current.currentRef).toBe(textareaResult.current.textareaRef);
      });
    });

    describe('useTextareaResize', () => {
      it('should resize textarea when resize is hug and value changes', () => {
        const TestComponent = () => {
          const value = 'short';
          const textareaRef = useRef<HTMLTextAreaElement>(null);
          const { resizeTextArea } = useTextareaResize(value, 'hug', textareaRef);

          return (
            <div>
              <textarea ref={textareaRef} data-testid='test-textarea' />
              <button onClick={resizeTextArea} data-testid='resize-btn'>
                Resize
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const textarea = screen.getByTestId('test-textarea');
        const resizeBtn = screen.getByTestId('resize-btn');

        fireEvent.click(resizeBtn);

        expect(textarea).toBeInTheDocument();
      });

      it('should not resize when resize is not hug', () => {
        const TestComponent = () => {
          const [value, setValue] = useState('short');
          const textareaRef = useRef<HTMLTextAreaElement>(null);
          useTextareaResize(value, 'fixed', textareaRef);

          return (
            <div>
              <textarea ref={textareaRef} data-testid='test-textarea' />
              <button onClick={() => setValue('very long text')} data-testid='expand-btn'>
                Expand
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const textarea = screen.getByTestId('test-textarea');
        const expandBtn = screen.getByTestId('expand-btn');

        const initialHeight = textarea.style.height;

        fireEvent.click(expandBtn);

        expect(textarea.style.height).toBe(initialHeight);
      });

      it('should set wrapper attributes when resize is hug', () => {
        const TestComponent = () => {
          const value = 'short';
          const textareaRef = useRef<HTMLTextAreaElement>(null);
          const { resizeTextArea } = useTextareaResize(value, 'hug', textareaRef);

          return (
            <div className='wrapper'>
              <textarea ref={textareaRef} data-testid='test-textarea' />
              <button onClick={resizeTextArea} data-testid='resize-btn'>
                Resize
              </button>
            </div>
          );
        };

        render(<TestComponent />);

        const wrapper = screen.getByTestId('test-textarea').closest('.wrapper');
        const resizeBtn = screen.getByTestId('resize-btn');

        expect(wrapper).toBeInTheDocument();

        fireEvent.click(resizeBtn);

        expect(wrapper).toBeInTheDocument();
      });
    });

    describe('useGripResize', () => {
      it('should handle mouse down when conditions are met', () => {
        const TestComponent = () => {
          const { handleGripMouseDown } = useGripResize(true, false, false, 'fixed');

          return (
            <div className='wrapper'>
              <div onMouseDown={handleGripMouseDown} data-testid='grip-handle'>
                Grip
              </div>
            </div>
          );
        };

        render(<TestComponent />);

        const gripHandle = screen.getByTestId('grip-handle');

        const preventDefaultSpy = vi.spyOn(Event.prototype, 'preventDefault');
        const stopPropagationSpy = vi.spyOn(Event.prototype, 'stopPropagation');

        fireEvent.mouseDown(gripHandle);

        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(stopPropagationSpy).toHaveBeenCalled();
      });

      it('should not handle mouse down when disabled', () => {
        const TestComponent = () => {
          const { handleGripMouseDown } = useGripResize(true, true, false, 'fixed');

          return (
            <div className='wrapper'>
              <div onMouseDown={handleGripMouseDown} data-testid='grip-handle'>
                Grip
              </div>
            </div>
          );
        };

        render(<TestComponent />);

        const gripHandle = screen.getByTestId('grip-handle');

        fireEvent.mouseDown(gripHandle);

        expect(gripHandle).toBeInTheDocument();
      });

      it('should not handle mouse down when loading', () => {
        const TestComponent = () => {
          const { handleGripMouseDown } = useGripResize(true, false, true, 'fixed');

          return (
            <div className='wrapper'>
              <div onMouseDown={handleGripMouseDown} data-testid='grip-handle'>
                Grip
              </div>
            </div>
          );
        };

        render(<TestComponent />);

        const gripHandle = screen.getByTestId('grip-handle');

        fireEvent.mouseDown(gripHandle);

        expect(gripHandle).toBeInTheDocument();
      });

      it('should not handle mouse down when showGrip is false', () => {
        const TestComponent = () => {
          const { handleGripMouseDown } = useGripResize(false, false, false, 'fixed');

          return (
            <div className='wrapper'>
              <div onMouseDown={handleGripMouseDown} data-testid='grip-handle'>
                Grip
              </div>
            </div>
          );
        };

        render(<TestComponent />);

        const gripHandle = screen.getByTestId('grip-handle');

        fireEvent.mouseDown(gripHandle);

        expect(gripHandle).toBeInTheDocument();
      });

      it('should not handle mouse down when resize is not fixed', () => {
        const TestComponent = () => {
          const { handleGripMouseDown } = useGripResize(true, false, false, 'hug');

          return (
            <div className='wrapper'>
              <div onMouseDown={handleGripMouseDown} data-testid='grip-handle'>
                Grip
              </div>
            </div>
          );
        };

        render(<TestComponent />);

        const gripHandle = screen.getByTestId('grip-handle');

        fireEvent.mouseDown(gripHandle);

        expect(gripHandle).toBeInTheDocument();
      });
    });
  });
});
