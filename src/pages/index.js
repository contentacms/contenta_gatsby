import React from "react"
import Link from "gatsby-link"

class IndexPage extends React.Component {
  render() {
     console.log(this.props)
    const recipeEdges = this.props.data.allDrupalRecipes.edges
    return (
      <div>
        {recipeEdges.map(edge => {
          const recipe = edge.node

          return (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}/`}>
                <h4>
                  {recipe.title}
                </h4>
                <img src={recipe.image.url} />
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allDrupalRecipes(sort: { fields: [created], order: DESC }, limit: 10) {
      edges {
        node {
          title
          id
          createdAt(formatString: "DD-MMM-YYYY")
          image {
            url
          }
        }
      }
    }
  }
`

