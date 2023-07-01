import {writable} from "svelte/store";
import {pb} from "../db";

export const action = writable("chat");
export const account = writable(pb.authStore.model);