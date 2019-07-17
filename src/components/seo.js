/*
  * SEO component that queries for data with Gatsby's useStaticQuery React hook.
  * See: https://www.gatsbyjs.org/docs/use-static-query/
*/

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, lang, meta }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes = { { title, lang } }
      title = { title }
      meta = {
        [
          {
            property: `title`,
            content: title,
          },
          {
            property: `description`,
            content: metaDescription,
          },
          {
            property: `type`,
            content: `website`,
          }
        ].concat(meta)
      }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Here you will find details of all the elements in the game Mario Kart 8 Deluxe, for Nintendo Switch. From racers statistics, vehicle information on the game, descriptions of the cups that can be competed, to a gallery of images so you can feel the adrenaline rush of driving a kart at amazing speeds.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO