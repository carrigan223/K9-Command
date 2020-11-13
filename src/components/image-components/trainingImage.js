import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const TrainingImage = () => {
    const data = useStaticQuery(graphql`
      query {
        trainingImage: file(relativePath: { eq: "erika-training.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    if (!data?.trainingImage?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }
  
    return <Img fluid={data.trainingImage.childImageSharp.fluid} />
  }
  
  export default TrainingImage