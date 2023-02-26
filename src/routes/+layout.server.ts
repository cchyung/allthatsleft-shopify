import { STOREFRONT_ACCESS_TOKEN } from '$env/static/private'
import { getShopify } from '../service/shopify'

export async function load({ params, request }) {
	const shopify = await getShopify()

	const storefrontClient = new shopify.clients.Storefront({
		storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
		domain: 'laguna-ltd.myshopify.com'
	})

	const productQuery = await storefrontClient.query({
		data: `{
      products (first: 10) {
            edges {
              node {
                id
                title
                description
                descriptionHtml      
                images(first: 10) {
                  edges {
                    node {
                      url
                      height
                      width
                      altText
                    }
                  }
                }
              }
            }
          }
        } 
    `
	})

	const products = productQuery.body.data.products.edges.map((edge) => edge.node)

	return {
		products
	}
}
