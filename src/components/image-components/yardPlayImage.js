import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const YardPlayImage = () => {
    const data = useStaticQuery(graphql`
      query {
        yardPlayImage: file(relativePath: { eq: "yard-play-time.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    if (!data?.yardPlayImage?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }
  
    return <Img fluid={data.yardPlayImage.childImageSharp.fluid} />
  }
  
  export default YardPlayImage