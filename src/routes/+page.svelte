<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#each data.products as product}
	<div>
		<h1>{product.title}</h1>
		<p>{product.descriptionHtml}</p>
		<img src={product.images.edges[0].node.url} alt={product.images.edges[0].node.url}/>
	</div>
{/each}
