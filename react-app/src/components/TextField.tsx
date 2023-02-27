import { useRef } from 'react';

type TextFiledProps={
    label:string
    placeholder: string
    text:string
    setText:(value:string) => void
}

export default function TextField({
  label, placeholder, text, setText,
}:TextFiledProps) {
  const id = useRef(`input=${Math.random()}`);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <label htmlFor={`${id}`}>
        {label}
      </label>
      <input
        id={`${id}`}
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>

  );
}
