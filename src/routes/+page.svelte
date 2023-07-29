<script>
     export let data; 
     console.log(data);
</script>

<h1>Food Recipes</h1>

<!-- {JSON.stringify(data.recipes.results)} -->

{#each data.recipes.results as item}
<div>
    <p>{item.title}</p>
    <img src={item.image} alt={item.title}>
</div>
{/each}
