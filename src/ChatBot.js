import React from 'react'

export const chatBot = [
    {
        possible: "how are you ?",
        value :"im good thanks, what about you dear ? " 
    } ,
    {
        possible: "how is your day ?",
        value : "my day is very good so far, what about yours ? "
    } ,
    {
        possible: "hi", 
        value: "hello"
    },
    {
        possible: "hello",
        value: "hi, how are you today ?"
    },
    {
        possible: "i love you so much",
        value: "you are the swettest thank you so much my love"
    },
    {
        possible: "i love you",
        value: "i love you more darling"
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },
    {
        possible: "",
        value: ""
    },

]



export const chatBotArr = chatBot.map(ele=>{
    return ele.possible.split(" ")
})

