import { ReactNode, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputAdornment } from '@material-ui/core'
import { Container, ContainerErros, IconeErro, TextoErro } from './styles.module'
import * as S from './styles.module'

type Props = {
  value?: string;
  disabled?: boolean;
  width?: string;
  name: string;
  label?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  type?: string;
  onChange?: (event?: any) => void;
  hasIcon?: boolean;
  icon?: ReactNode;
  className?: string;
  defaultValue?: string | null;
  size?: "small" | "medium"
  margin?: string;
}

export function Input({ value, disabled, width = "100%", name, label, variant, type, onChange, hasIcon, icon, className, defaultValue, size, placeholder, margin, ...rest }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)
  const materialInputRef = useRef<any | null>(null);
  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  return (
    <Container
      margin={margin}
      width={width}>
      <S.StyledTextField
        value={value}
        disabled={disabled}
        variant={variant}
        type={type}
        label={label}
        inputRef={inputRef}
        ref={materialInputRef}
        error={!!error}
        defaultValue={defaultValue}
        onChange={onChange}
        size={size}
        InputProps={{
          endAdornment: (
            hasIcon === true && (
              <InputAdornment position="end">
                {icon}
              </InputAdornment>
            )
          ),
        }}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <ContainerErros>
          <IconeErro />
          <TextoErro>{error}</TextoErro>
        </ContainerErros>
      )}
    </Container>
  )
}

export default Input;
