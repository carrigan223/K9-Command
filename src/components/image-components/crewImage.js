import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CrewImage = () => {
  const data = useStaticQuery(graphql`
    query {
      crewImage: file(relativePath: { eq: "the-crew.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.crewImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.crewImage.childImageSharp.fluid} />
}

export default CrewImage
