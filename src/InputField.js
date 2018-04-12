// @flow
import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const InputField = (field: Object) => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const handleChange = event => {
    if (field.onValueChange) {
      field.onValueChange(event)
    }

    if (field.input.onChange) {
      field.input.onChange(event)
    }

    if (field.onChange) {
      field.onChange(event)
    }
  }

  return (
    <FormItem
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      validateStatus={hasError ? 'error' : ''}
    >
      <Input
        {...field.input}
        disabled={field.disabled}
        id={field.id}
        onChange={handleChange}
        placeholder={field.placeholder}
        type={field.type}
      />
    </FormItem>
  )
}

export default InputField
