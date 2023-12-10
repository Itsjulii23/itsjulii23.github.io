let ciudadUsuario = '';

export async function solicitarUsuario() {
    try {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const { results } = await response.json();
        const resultado = results[0];
        ciudadUsuario = resultado.location.city;
        console.log(resultado);
        return resultado
    } catch (error) {
        console.log(error);
    }
}


export async function solicitudHora() {
    await solicitarUsuario();
    const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${ciudadUsuario}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f562416c28msh8e124fc1f5978abp1a9ae2jsncc472730b6b5',
            'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}