import React from 'react'
import { result as resultType } from "../types/results"

interface Props {
  result: resultType;
}
export default function SearchItem({ result }: Props) {
  return (
    <div>{result.title}</div>
  )
}
