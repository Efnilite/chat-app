import PocketBase from "pocketbase"
import {createAvatar} from "@dicebear/core";
import {identicon} from "@dicebear/collection";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const getMessages = async () => {
    const result = await pb.collection("messages")
        .getList(0, 50, { expand: "user" });

    return result.items.map(record => ({
        id: record.id,
        user: record.expand.user.username,
        avatar: record.expand.user.avatar,
        text: record.text
    }))
}

export const subscribe = (f: Function) => {
    pb.collection("messages").subscribe("*", () => f(getMessages()));
}

export const unsubscribe = () => {
    pb.collection("messages").unsubscribe();
}

export const send = async (user: string, text: string) => {
    const data = {
        user: user,
        text: text,
    };

    pb.collection("messages").create(data);
}

const avatar = (name: string) => createAvatar(identicon, { seed: name }).toString()


export const create = async (username: string, password: string, passwordConfirm: string)=> {
    const data = {
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
        avatar: avatar(username)
    };

    try {
        await pb.collection("users").create(data);

        return true
    } catch (error: any) {
        return error
    }
}

export const signIn = async (username: string, password: string) => {
    try {
        await pb.collection("users").authWithPassword(username, password)
        // const value = pb.authStore.exportToCookie();

        return true
    } catch (error: any) {
        return error
    }
}