
import * as db from "../db"

export function load({cookies}) {
    // const loggedIn = cookies.get("logged in")
    //
    // cookies.set("logged in")
}

export const actions = {

    send: async ({request}) => {
        const data = await request.formData()

        db.send(data.get("user"), data.get("text"))
    },

    create: async ({request}) => {
        const data = await request.formData()
        db.create(data.get("username"), data.get("password"), data.get("password confirm"))
        db.signIn(data.get("username"), data.get("password"))
    },
}