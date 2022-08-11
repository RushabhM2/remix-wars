export async function getResources() {
    return await fetch('https://swapi.dev/api/');
}

export async function getResource(resource: string) {
    return await fetch(`https://swapi.dev/api/${resource}`);
}