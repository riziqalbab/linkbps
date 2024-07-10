export async function POST(req: Request, res: Response) {

    const admin = {
        username: "root",
        password: "admin1234"
    }

    const { searchParams } = new URL(req.url)

    const username = searchParams.get("username")
    const password = searchParams.get("password")

    console.log(username, password);

    if (username === admin.username && password === admin.password) {


        return new Response(JSON.stringify({
            message: "Login Berhasil",
            status: 200
        }), {
            status: 200
        })
    } else {

        return new Response(JSON.stringify({
            message: "Login Gagal",
            status: 401
        }), {
            status: 401
        })
    }



}