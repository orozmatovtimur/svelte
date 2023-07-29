<script>
    export let data; 
</script>

<h1>Recipes' Ingredients</h1>

<!-- {JSON.stringify(data.recipes.results)} -->

{#each data.ingrediets.results as item}
<div>
   <p>{item.title}</p>
   <img src={item.image} alt={item.name}>
</div>
{/each}
