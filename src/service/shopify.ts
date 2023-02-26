import '@shopify/shopify-api/adapters/node'
import { shopifyApi, LATEST_API_VERSION, Shopify } from '@shopify/shopify-api'
import { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, STOREFRONT_ACCESS_TOKEN } from '$env/static/private'

let shopifyClient: Shopify
export const getShopify = async () => {
	if (!shopifyClient) {
		shopifyClient = shopifyApi({
			// The next 4 values are typically read from environment variables for added security
			apiKey: SHOPIFY_API_KEY,
			apiSecretKey: SHOPIFY_API_SECRET,
			scopes: ['read_products'],
			hostName: 'laguna-ltd.myshopify.com',
			apiVersion: LATEST_API_VERSION,
			isEmbeddedApp: false
		})
	}

	return shopifyClient
}

export const getProducts = async () => {
	const shopifyClient = await getShopify()
	const products = await shopifyClient.product.fetchAll()
	return products
}

// export const Shopify = shopifyApi({
// 	// The next 4 values are typically read from environment variables for added security
// 	apiKey: SHOPIFY_API_KEY,
// 	apiSecretKey: SHOPIFY_API_SECRET,
// 	scopes: ['read_products'],
// 	hostName: 'laguna-ltd.myshopify.com',
// 	apiVersion: LATEST_API_VERSION,
// 	isEmbeddedApp: false
// });
