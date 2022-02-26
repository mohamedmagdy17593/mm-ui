import 'react-datepicker/dist/react-datepicker.css'

import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import Input, { InputProps } from '../Input/Input'
import styles from './Datepicker.module.scss'

type DatePickerProps = React.PropsWithChildren<{ inputProps?: InputProps }>

function DatePicker({ children, inputProps }: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return (
    <ReactDatePicker
      calendarClassName={styles.datePicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<Input {...inputProps} />}
    />
  )
}

export default DatePicker
