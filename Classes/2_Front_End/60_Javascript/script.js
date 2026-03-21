// Ex1

/* ----------- question 1 ----------- */

// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(3000, function () {
//   console.log("Callback executed");
// });

/* ----------- question 2 ----------- */

// function getUser(username, cb) {
//   console.log("Fetching user details...");
//   setTimeout(() => {
//     cb({ id: 123, username });
//   }, 1000);
// }

// function getUserPosts(id, cb) {
//   console.log("Fetching user posts...");
//   setTimeout(() => {
//     cb(["post1", "post2", "post3"]);
//   }, 1000);
// }

// getUser("anilsolanki9", function (user) {
//   console.log(user);
//   getUserPosts(user.id, function (posts) {
//     console.log(posts);
//   });
// });

/* ----------- question 3 ----------- */

// function loginUser(username, cb) {
//   console.log("Logging user...");
//   setTimeout(() => {
//     cb({ userId: 123, username });
//   }, 1000);
// }

// function fetchPermissions(userId, cb) {
//   console.log("Fetching permissions...");
//   setTimeout(() => {
//     cb(["read", "write", "update", "delete"]);
//   }, 1000);
// }

// function loadDashboard(permissions, cb) {
//   console.log("Loading dashboard...");
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// loginUser("anilsolanki9", function (user) {
//   console.log(user);
//   fetchPermissions(user.userId, function (permissions) {
//     console.log(permissions);
//     loadDashboard(permissions, function () {
//       console.log("Dashboard loaded");
//     });
//   });
// });
