import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PuppyWalkImage = () => {
  const data = useStaticQuery(graphql`
    query {
      puppyWalkImage: file(relativePath: { eq: "puppy-walk-ready.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.puppyWalkImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.puppyWalkImage.childImageSharp.fluid} />
}

export default PuppyWalkImage
