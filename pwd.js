const bcrypt = require('bcrypt');
const saltRounds = '10';
const myPlaintextPassword = 'hello';
let hashing = async (myPlaintextPassword, saltRounds) => {
	try {
		let hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
		console.log(hash);
	} catch (error) {
		console.log('error');
	}
};
hashing(myPlaintextPassword, saltRounds); //Using Promises

// bcrypt
// 	.hash(myPlaintextPassword, saltRounds)
// 	.then(function(hash) {
// 		console.log(hash);
// 	})
// 	.catch(console.log('there is promise error'));

// Using Function callback
// bcrypt.genSalt(saltRounds, function(err, salt) {
// 	if (err) {
// 		console.log('You have Error1');
// 	} else {
// 		bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
// 			if (err) {
// 				console.log('You have Error2');
// 			} else {
// 				console.log(hash);
// 			}
// 		});
// 	}
// });
