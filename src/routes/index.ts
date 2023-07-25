/** @type {import('@sveltejs/kit').Load} */
export async function get(page) {
    const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=9495f4cf7dff4edf8800a4021b8224cd";
    const res = await fetch(url);
    const {results} = await res.json();

    if(res.ok){
        return {
            props: {recipes: results},
        };
    }

    return {
        status: 404,
        body: {error: "Cannot fetch recipes"}
    }
}