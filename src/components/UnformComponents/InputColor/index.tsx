import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputStyled } from './styles.module'

type Props = {
  name: string;
  onChange?: (event?: any) => void;
  defaultValue?: string;
  onBlur?: (event?: any) => void;
  backgroundColor: string;
}

export function InputColorPicker({ name, onBlur, defaultValue, backgroundColor, onChange }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
    })
  }, [fieldName, registerField])

  return (
    <InputStyled
      backgroundcolor={backgroundColor}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
      type="color"
    />
  )
}

export default InputColorPicker;
