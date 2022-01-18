import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ALL_AUTHORS, ADD_AUTHOR, UPDATE_AUTHOR } from './graphql'

const Home = () => {
  const [authorid, setId] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [age, setAge] = useState('')
  const [emailAddress, setEmail] = useState('')
  const [numBooks, setBooks] = useState('')
  const [address, setAddress] = useState('')
  const resetAll = () => {
    setId('')
    setFirst('')
    setLast('')
    setAge('')
    setEmail('')
    setBooks('')
    setAddress('')
  }
  const handleIdChange = e => {
    setId(e.target.value)
  }

  const handleFirstChange = e => {
    setFirst(e.target.value)
  }

  const handleLastChange = e => {
    setLast(e.target.value)
  }

  const handleAgeChange = e => {
    setAge(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleBooksChange = e => {
    setBooks(e.target.value)
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const {
    data, refetch: refetchAuthors, loading, error,
  } = useQuery(ALL_AUTHORS)

  const [updateAuthor] = useMutation(UPDATE_AUTHOR)

  const editAuthor = async () => {
    await updateAuthor({
      variables: {
        id: authorid,
        input: {
          firstName: first,
          lastName: last,
          // eslint-disable-next-line radix
          age: parseInt(age),
          email: emailAddress,
          numBooksPublished: numBooks,
          addressId: address,
        },
      },
    })
    resetAll()
    refetchAuthors()
  }

  const [addAuthor] = useMutation(ADD_AUTHOR)

  const addNewAuthor = async () => {
    await addAuthor({
      variables: {
        input: {
          firstName: first,
          lastName: last,
          // eslint-disable-next-line radix
          age: parseInt(age),
          email: emailAddress,
          numBooksPublished: numBooks,
          addressId: address,
        },
      },
    })
    resetAll()
    refetchAuthors()
  }

  if (error) {
    console.log(error)
    return <p>An error occured while executing query</p>
  }
  return (
    <>
      <div>
        <h1>Hello there, welcome!</h1>
        <p>View this page for author information. </p>
      </div>

      <div>
        <h2>You can add or update author information here.</h2>
        <form>
          <h3>ID</h3>
          <input type="text" value={authorid} onChange={handleIdChange} />
          <br />

          <h3>First Name</h3>
          <input type="text" value={first} onChange={handleFirstChange} />
          <br />

          <h3>Last Name</h3>
          <input type="text" value={last} onChange={handleLastChange} />
          <br />

          <h3>Age</h3>
          <input type="text" value={age} onChange={handleAgeChange} />
          <br />

          <h3>Email</h3>
          <input type="text" value={emailAddress} onChange={handleEmailChange} />
          <br />

          <h3>Number of Books Published</h3>
          <input type="text" value={numBooks} onChange={handleBooksChange} />
          <br />

          <h3>Address ID</h3>
          <input type="text" value={address} onChange={handleAddressChange} />
          <br />

          <button type="button" onClick={addNewAuthor}>Add New Author</button>
          <br />
          <button type="button" onClick={editAuthor}>Update Author</button>
        </form>
      </div>

      {loading ? 'loading...' : data.allAuthors.map(author => (
        <>
          <p>
            {' '}
            {author.firstName}
            {' '}
            {author.lastName}
          </p>
        </>
      ))}
    </>
  )
}

export default Home
