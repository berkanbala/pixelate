"use client";

import { useState } from "react";

export const useForm = (value: any) => {
  const [values, setValues] = useState(value);

  const handleChange = (e: any) => {
    if (e.target) {
      setValues({ ...values, [e.target.name]: e.target.value });
    } else {
      setValues(e);
    }
  };

  const resetForm = () => setValues(value);

  return [values, handleChange, resetForm];
};
