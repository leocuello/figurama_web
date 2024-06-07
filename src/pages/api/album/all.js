'use server'

export default async function handler(req, res) {

    const token = req.cookies.get('token')?.value
    let url = `${process.env.API_URL}collection`
    const response = await fetch(url, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.value,}
    });
    const data = await response.json();
    return res.status(200).json(data);
}
