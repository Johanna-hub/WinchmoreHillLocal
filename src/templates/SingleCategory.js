import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';
import { PlaceList } from '#components/app';
import { NavBar } from "../../components/app";

const normaliseTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === 'string') {
    return tags.split(",");
  }

  return [];
}

const extractItemData = ({
  node: {
    Name = '',
    Category_1 = '',
    Tags,
    Collection,
    Delivery,
    Image_Url,
  } = {},
}) => ({
  name: Name,
  category: Category_1,
  source: Image_Url,
  tags: normaliseTags(Tags),
  collection: Collection,
  delivery: Delivery, 
})

const SingleCategory = ({ data }) => {
  const allBusinessData = data.allGoogleSheetValue.edges;


  const CategoryItems = allBusinessData.map(extractItemData);
  // const CategoryTitle = CategoryItems[0].category;
  return (
    <Box>
      <SEO title="Category page" />
      <NavBar></NavBar>
      <Box px={[16, 40]} style={{ "margin-top":"10.1vh" }}>
        <PlaceList width="100%" items={CategoryItems} />
      </Box>
      {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
    </Box>
  )
}
  
  export const query = graphql`
  query CategoryQuery ($Category_1: String!) {
    allGoogleSheetValue (filter: { Category_1 : { in: [$Category_1] }}) {
      edges {
        node {          
          Name      
          Category_1
          Category_2__only_if_relevant_
          Tags
          Collection
          Delivery
          Image_Url
        }
      }
    }
  }
`
export default SingleCategory