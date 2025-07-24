//inputs expected:
//title: string
//description: string

const zod = require("zod");

const createTodo = zod.object({  //for creating the todo we need the title as well as description
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({ //for getting a todo we need the id only for now
    id: zod.string()
})

module.exports = { //helps to export the file so that we can link it to other files in the folder as well,its like makign it available for use   
    createTodo: createTodo,
    updateTodo: updateTodo
}