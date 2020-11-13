import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PettingImage = () => {
  const data = useStaticQuery(graphql`
    query {
      pettingImage: file(relativePath: { eq: "woman-petting-dog.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.pettingImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.pettingImage.childImageSharp.fluid} />
}

export default PettingImage
