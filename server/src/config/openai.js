import OpenAI from "openai";

module.exports = class openai {
    static configuration() {
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    static textCompletion({prompt}){
        return {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    "content": `${prompt}`
                },
                {
                    "role": "assistant"
                },
                {
                    "role": "assistant",
                    "content": "NodeChat: Explorando conversas inteligentes com Node.js"
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//         {
//             "role": "user",
//             "content": "crie um nome legal para uma aula de chatgpt com nodejs"
//         },
//         {
//             "role": "assistant"
//         },
//         {
//             "role": "assistant",
//             "content": "NodeChat: Explorando conversas inteligentes com Node.js"
//         }
//     ],
//     temperature: 0,
//     max_tokens: 3000,
//     top_p: 1,
//     frequency_penalty: 0.5,
//     presence_penalty: 0,
// });