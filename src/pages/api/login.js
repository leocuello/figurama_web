export default async function handler(req, res) {

    if (req.method === 'GET') {
        const {firebaseToken} = req.query;
        if (!firebaseToken) {
            return res.json({success: false});
        }
        const apiUrl = process.env.API_URL;
        try {
            let url = `${apiUrl}auth/firebase/${firebaseToken}`
            const response = await fetch(url);
            if (!response.ok) {
                return res.status(401).json({error: "Not authorized"});
            } else {
                const data = await response.json();
                res.setHeader('Set-Cookie', `token=${data.token}; Path=/; HttpOnly`);
                return res.status(200).json();
            }
        } catch (error) {
            return res.status(401).json({error: error.message});
        }
    } else {
        return res.status(405).end();
    }
}