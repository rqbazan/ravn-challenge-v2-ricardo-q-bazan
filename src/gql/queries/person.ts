import { gql } from '@apollo/client'

const personQueryNode = gql`
  query person($personId: ID) {
    person(id: $personId) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`

export default personQueryNode
