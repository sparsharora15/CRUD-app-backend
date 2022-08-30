import { v4 as uuid } from "uuid"
let users = []
export const getUsers = (req, res) => {
    res.send(users)
}



export const createUser = (req, res) => {
    const { name, contact, email } = req.body
    let data = {
        id: uuid(),
        name: name,
        contact: contact,
        email: email
    }
    users.push(data)
    console.log(data)
    console.log(users)
    res.status(200).json({
        msg: "user added successfully",
        data: users
    })
}



export const getUser = (req, res) => {
    const singleUser = users.filter((users) => users.id === req.body.id)
    res.send(users)
}


    export const deleteUser =  (req, res)=> {
        const { id } = req.params;
        let userFound = users.findIndex(el => el.id === id);
        if (userFound == -1) {
          res.send("User not found");
        } else {
          users.splice(userFound, 1)
          res.send("User deleted");
        }
      }


export const updateUser = (req, res) => {
    const data = users.find((data) => data.id === req.params.id)
    data.name = req.body.name
    data.email = req.body.email
    data.contact = req.body.contact
    res.send("User updated successfully")
}