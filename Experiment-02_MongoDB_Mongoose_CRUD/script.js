const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/post");

async function run() {
    try {
        console.log("Connected Successfully");

        const newUser = await User.create({ name: "Ravi", age: 34, email: "ravi.test@example.com" });
        console.log("User Created:", newUser);
        const users = await User.find();
        console.log("All Users:", users);
        await User.updateOne({ name: "Ravi" }, { age: 40 });
        console.log("User Updated");
        await User.deleteOne({ name: "Ravi" });
        console.log("User Deleted");

        const userExists = await User.exists({ name: 'dd' });
        console.log("User 'dd' exists:", userExists);

    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

run();

const user = await User.where('age').gte(18).where('name').equals('Woxsen uni').limit(1).select('name')
user(0).bestFriend = 'Chiranjeevi'
await user(0).save()
