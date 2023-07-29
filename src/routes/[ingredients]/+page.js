export async function load(params) {
    const url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=9495f4cf7dff4edf8800a4021b8224cd";
    const res = await fetch(url);
    const results = await res.json();

    if(res.ok){
        return {
            ingrediets: results,
        };
    }

    return {
        status: 404,
        body: {error: "Cannot fetch ingredients"}
    }
}