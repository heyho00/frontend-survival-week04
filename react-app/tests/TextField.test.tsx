import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '../src/components/TextField';

test('TextField', () => {
  // given
  const label = 'Name';
  const text = 'Tester';

  const setText = jest.fn();

  // when
  render(
    <TextField
      label={label}
      placeholder="name is harry"
      text={text}
      setText={setText}
    />,
  );

  // then 화면이 나와야 함
  screen.getByLabelText('Name');
  screen.getAllByDisplayValue(text);
  screen.getAllByPlaceholderText(/name/);

  // --------
  // when
  const input = screen.getByLabelText('Name');
  fireEvent.change(input, {
    target: { value: 'New Name' },
  });

  expect(setText).toBeCalled();
  expect(setText).toBeCalledWith('New Name');
});
