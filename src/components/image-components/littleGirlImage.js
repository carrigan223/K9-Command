import React from "react"
import {css} from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LittleGirlImage = () => {
  const data = useStaticQuery(graphql`
    query {
      littleGirlImage: file(relativePath: { eq: "little-girl-dog.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.littleGirlImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img css={css`border-radius:50%`} fluid={data.littleGirlImage.childImageSharp.fluid} />
}

export default LittleGirlImage
