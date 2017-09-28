import React from "react"
import Link from "gatsby-link"

//import { rhythm } from "../utils/typography"

class ArticleTemplate extends React.Component {
  render() {
    // console.log(this.props)
    const recipe = this.props.data.drupalRecipes

  console.log(recipe)
    const listItems = recipe.ingredients.map((ingredient) =>
      <li>{ingredient}</li>
    )
    return (
      <div>
        <Link
          to="/"
        >
          ← Back
        </Link>
        <h4>{recipe.title}</h4>
        <div>
          <img src={recipe.image.url} />
        </div>
        <div>
          {recipe.difficulty}
        </div>
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($id: String!) {
    drupalRecipes(id: { eq: $id }) {
      title
      createdAt(formatString: "DD-MMM-YYYY")
      ingredients
      difficulty
      preparationTime
      instructions
      totalTime
      image {
        url
      }
    }
  }
`
