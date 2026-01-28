import type { LoginValues, RegisterValues } from "../types";


const initialLoginValues:LoginValues ={
    email: "",
    password:"",
   
}

const initialRegisterValues:RegisterValues ={
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    
}

export const numbers = [
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
];

export const colors = [
    { id: "blue", code: "#4A69E2", api: ["blue", "mavi"] },

    { id: "red", code: "#DC143C", api: ["red", "kırmızı"] },

    { id: "yellow", code: "#FFA52F", api: ["yellow", "sarı"] },

    { id: "black", code: "#232321", api: ["black", "siyah"] },

    { id: "green", code: "#234D41", api: ["green", "yeşil"] },

    { id: "dark-gray", code: "#353336", api: ["dark-gray", "koyu gri", "dark gray"] },

    { id: "orange", code: "#F08155", api: ["orange", "turuncu"] },

    { id: "light-gray", code: "#C9CCC6", api: ["light-gray", "açık gri", "light gray"] },

    { id: "gray", code: "#677282", api: ["gray", "gri"] },

    { id: "brown", code: "#925513", api: ["brown", "kahverengi"] },

    { id: "light-brown", code: "#BB8056", api: ["light-brown", "açık kahverengi", "light brown"] },

    // API’de özel gelenler için ekstra:
    { id: "white", code: "#FFFFFF", api: ["white", "beyaz", "Cloud White"] },
];



export {initialLoginValues,initialRegisterValues}