import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '../src/components/TextField';

const context = describe;

describe('TextField', () => {
  // given
  const label = 'Name';
  const text = 'Tester';

  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
    // jest.clearAllMocks();
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder="name is harry"
        text={text}
        setText={setText}
      />,
    );
  }

  function inputText(value:string) {
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value },
    });
  }

  it('renders elements', () => {
    // when
    renderTextField();

    // then 화면이 나와야 함
    screen.getByLabelText(label);
    screen.getAllByDisplayValue(text);
    screen.getAllByPlaceholderText(/name/);
  });

  // --------

  // context: 입력했을때
  context('when user enters name', () => {
    beforeEach(() => {
      // given
      renderTextField();
    });

    it('calls "setText" handler', () => {
      // when
      inputText('New Name');

      // then
      expect(setText).toBeCalledWith('New Name');
    });
  });
});
