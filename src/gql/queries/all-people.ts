import { gql } from '@apollo/client'

const allPeopleQueryNode = gql`
  query allPeople($first: Int, $after: String, $before: String, $last: Int) {
    allPeople(first: $first, after: $after, before: $before, last: $last) {
      edges {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export default allPeopleQueryNode
