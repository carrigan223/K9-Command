import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const TrainingImage = () => {
  const data = useStaticQuery(graphql`
    query {
      trainingImage: file(relativePath: { eq: "erika-training.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.trainingImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img css={css`border-radius: 40%`} fluid={data.trainingImage.childImageSharp.fluid} />
}

export default TrainingImage
