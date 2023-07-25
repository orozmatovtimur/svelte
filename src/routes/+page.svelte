<script>
     export let recipes = []; 
</script>

<h1>Food Recipes</h1>

{#each recipes as item}
<div>
    <p>{item.title}</p>
    <img src={item.image} alt={item.title}>
</div>
{/each}
