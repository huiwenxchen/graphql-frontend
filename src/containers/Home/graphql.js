import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
    query allAuthors {
        allAuthors{
            id
            firstName
            lastName
        }
    }
`
export const ADD_AUTHOR = gql`
    mutation addAuthor($input: addAuthorInfo!) {
        addAuthor(input: $input) {
        firstName
        lastNameage
        age
        email
        numBooksPublished
        addressId
        }
    }
`

export const UPDATE_AUTHOR = gql`
    mutation updateAuthor($input: editAuthorInfo!) {
        firstName
        lastNameage
        age
        email
        numBooksPublished
        addressId
    }
`
// export const BOOKS = gql`
//     query books($id: ID!) {
//         books(id: $id) {
//         title
//         authorId
//         }
// `
