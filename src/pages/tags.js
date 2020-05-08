import React from "react"

import SEO from "../components/SEO"

import { NavBar, TagMenu } from '#components/app';
import Box from '#components/atoms/Box';

import _ from 'lodash';

const extractItemData = ({
  node: {
    Tags = '',
  } = [],
}) => ([
  normaliseTags(Tags)
])

const normaliseTags = (tags) => {
    if (Array.isArray(tags)) {
      return tags;
    }
    if (typeof tags === 'string') {
      return tags.split(",");
    }
    return [];
  }

const Tags = ({data}) => {
  
  const allTagData = data.allGoogleSheetValue.edges;
  const tags = allTagData.map(extractItemData);
  const flatTagArray = _.flattenDeep(tags).filter(category => category !== "").map(tag => tag.trim()).map(tag => tag.toLowerCase()).sort();
  const TagMenuArray = flatTagArray.filter((x, i, a) => a.indexOf(x) === i);
  
    return (
      <Box>
        <SEO title="Tags page" />
        <NavBar></NavBar>
        <div px={[16, 40]}>
        <TagMenu width="100%" items={TagMenuArray} />
        </div>
        {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
      </Box>
    )
  }

  export const query = graphql`
  query AllTagsQuery {
    allGoogleSheetValue {
      edges {
        node {              
          Tags
        }
      }
    }
  }
`
  
  export default Tags