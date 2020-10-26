import gql from "graphql-tag";
import { orderCommonFragment } from "../fragments/orderCommon";

export default gql`
  mutation updateAddress($orderFulfillmentGroupId: ID!, $orderId: ID!, $address: AddressInput!) {
    updateAddress(input: {
      orderFulfillmentGroupId: $orderFulfillmentGroupId,
      orderId: $orderId,
      address: $address
    }) {
      order {
        ...OrderCommon
      }
    }
  }
  input AddressInput {
    "The street address / first line"
    address1: String!
    "Optional second line"
    address2: String
    """
    Optionally, a name for this address (e.g. 'Home') to easily identify it in the future
    """
    addressName: String
  
    "City"
    city: String!
  
    "Optional company name, if it's a business address"
    company: String
    "Country"
    country: String!
    """
    The first name of a person at this address
    This is an optional field to support legacy and third party platforms
    We use fullName internally, and use first and last name fields to combine into a full name if needed
    """
    firstName: String
    "The full name of a person at this address"
    fullName: String!
    "Is this the default address for billing purposes?"
    isBillingDefault: Boolean
    "Is this a commercial address?"
    isCommercial: Boolean
    "Is this the default address to use when selecting a shipping address at checkout?"
    isShippingDefault: Boolean
    """
    The last name of a person at this address
    This is an optional field to support legacy and third party platforms
    We use fullName internally, and use first and last name fields to combine into a full name if needed
    """
    lastName: String
    "Arbitrary additional metadata about this address"
    metafields: [MetafieldInput]
    "A phone number for someone at this address"
    phone: String!
    "Postal code"
    postal: String!
    "Region. For example, a U.S. state"
    region: String!
  }
  ${orderCommonFragment}
`;
