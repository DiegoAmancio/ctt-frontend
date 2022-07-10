import { gql } from '@apollo/client'

export const CREATE_USER_VOLUME_MUTATION = gql`
  mutation createUserVolume(
    $purchasedPrice: Float!
    $purchasedDate: DateTime!
    $purchasedPriceUnit: Coin!
    $volume: String!
    $userAcquisitionDifficulty: Float
    $userClassification: Float
  ) {
    createUserVolume(
      input: {
        purchasedPrice: $purchasedPrice
        purchasedDate: $purchasedDate
        purchasedPriceUnit: $purchasedPriceUnit
        userAcquisitionDifficulty: $userAcquisitionDifficulty
        userClassification: $userClassification
        volume: $volume
      }
    ) {
      id
      purchasedPrice
      purchasedDate
      userAcquisitionDifficulty
      userClassification
      purchasedPriceUnit
      createdAt
      updatedAt
    }
  }
`
export const DELETE_USER_VOLUME_MUTATION = gql`
  mutation deleteUserVolume($volumeId: String!) {
    deleteUserVolume(volumeId: $volumeId)
  }
`
export const UPDATE_USER_VOLUME_MUTATION = gql`
  mutation updateUserVolume(
    $purchasedPrice: Float!
    $purchasedDate: DateTime!
    $purchasedPriceUnit: Coin!
    $userAcquisitionDifficulty: Float
    $userClassification: Float
    $volume: String!
  ) {
    updateUserVolume(
      input: {
        purchasedPrice: $purchasedPrice
        purchasedDate: $purchasedDate
        purchasedPriceUnit: $purchasedPriceUnit
        userAcquisitionDifficulty: $userAcquisitionDifficulty
        userClassification: $userClassification
        volume: $volume
      }
    )
  }
`
