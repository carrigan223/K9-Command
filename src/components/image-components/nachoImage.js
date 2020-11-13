import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NachoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      nachoImage: file(relativePath: { eq: "nacho.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.nachoImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.nachoImage.childImageSharp.fluid} />
}

export default NachoImage
