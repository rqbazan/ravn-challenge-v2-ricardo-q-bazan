import { gql } from '@apollo/client'

const allPeopleQueryNode = gql`
  query allPeople($first: Int, $after: String, $before: String, $last: Int) {
    allPeople(first: $first, after: $after, before: $before, last: $last) {
      edges {
        cursor
        node {
          id
          name
          species {
            id
            name
          }
          homeworld {
            id
            name
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`

export default allPeopleQueryNode
