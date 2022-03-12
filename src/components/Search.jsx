import { useFormik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { searchAsync } from '../actions/actionEmployees'

const Search = () => {
  console.log('asaasda')
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      search: ''
    }, 
    validationSchema: Yup.object({
      search: Yup.string().required()
    }),
    onSubmit:({search}) => {
      console.log(search)
      dispatch(searchAsync(search))
    }
  })


  return (
    <Form onSubmit={formik.handleSubmit}>
      <input type="text" name='search' onChange={formik.handleChange}/>
      <Button type="submit" className='btn btn-outline-dark'>Search</Button>
    </Form>
  )
}

export default Search