const { getUsers, FreeUser, PaymentUser } = require("./script");

module.exports = {
    getUsers(req, res){
        const users = getUsers();    
        return res.status(200).send(users)
    },
    deleteUser(req,res){
        const users = getUsers();
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                users.splice(i,1)
                return res.status(200).send("User deleted!")
            }
        }
        return res.status(404).send("User doesn´t exist!")

    },
    createUser(req,res){
        const users = getUsers();
        const user3 = new FreeUser ("Kristoffer", "Lundquist", "Male", [2000, 05, 26], 3);
        users.push(user3)
        return res.status(201).send(user3)
    },

    getImage(req,res){
        const users = getUsers();
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                return res.status(200).send(users[i].images);
            }
        }
        return res.status(404).send("Incorrect input")
    },
     
    getCreditCardInfo(req,res){
        const users = getUsers();
        const userID = req.params.userID
        paymentUser= PaymentUser;
        
        
            for (i = 0; i < users.length; i++){
                if (users[i].userID == userID){
                    console.log("test");
                    return res.status(200).send(users[i].creditCard);
                }
        }
            
            return res.status(404).send("User is not a premium user");
}

};


// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users

// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/images

// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/creditcard