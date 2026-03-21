// function abcd(fnc) {
//   fnc(function (fnc3) {
//     fnc3(function (fnc5) {
//       fnc5();
//     });
//   });
// }

// abcd(function (fnc2) {
//   fnc2(function (fnc4) {
//     fnc4(function () {
//       console.log('Hiiiii');
//     });
//   });
// });

/* -------------------------------------------------------------------------- */

// function amitSeDetailsLaao(address, cb) {
//   console.log('Fetching details from amit...');
//   setTimeout(() => {
//     cb({ lat: 2345, long: 6789 });
//   }, 2000);
// }

// function dukaanDhundho(details, cb) {
//   //logic
//   console.log('Fetching dukaan details...');
//   setTimeout(() => {
//     cb({ dukaanName: 'Hari Sabji bhandar' });
//   }, 3000);
// }

// function samanLaao(samanList, cb) {
//   //logic
//   console.log('Fetching samanList...');
//   setTimeout(() => {
//     cb({ saman: samanList });
//   }, 2000);
// }

// function gharAaaJaoo(address, cb) {
//   //logic
//   console.log('Fetching result...');
//   setTimeout(() => {
//     cb('Shopping Done...');
//   }, 2000);
// }

// amitSeDetailsLaao('address hai bhai yaha pe', function (details) {
//   console.log(details);
//   dukaanDhundho(details, function (dukaanDetails) {
//     console.log(dukaanDetails);
//     samanLaao([1, 2, 3, 'sabji'], function (saman) {
//       console.log(saman);
//       gharAaaJaoo('address hai bhai yaha pe', function (result) {
//         console.log(result);
//       });
//     });
//   });
// });

/* -------------------------------------------------------------------------- */

// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(1000, function () {
//   console.log('Callback Executed');
// });

/* -------------------------------------------------------------------------- */

// function getUser(username, cb) {
//   console.log('Fetching user...');
//   setTimeout(() => {
//     cb({ username, id: 234 });
//   }, 2000);
// }

// function getPosts(id, cb) {
//   console.log('Loading posts...');
//   setTimeout(() => {
//     cb(['img1', 'img2', 'img3']);
//   }, 2000);
// }

// getUser('anilsolanki01', function (user) {
//   console.log(user);
//   getPosts(user.id, function (posts) {
//     console.log(posts);
//   });
// });

/* -------------------------------------------------------------------------- */

function loginUser(username, cb) {
  console.log('Fetching User...');
  setTimeout(() => {
    cb({ username, id: 2344 });
  }, 2000);
}

function fetchPermissions(id, cb) {
  console.log('Fetching permissions...');
  setTimeout(() => {
    cb({ edit: true, add: true, remove: false });
  }, 2000);
}

function loadDashboard(permissions, cb) {
  console.log('Loading dashboard...');
  setTimeout(() => {
    cb();
  }, 2000);
}

loginUser('anilsolanki', function (user) {
  console.log(user);

  fetchPermissions(user.id, function (permissions) {
    console.log(permissions);

    loadDashboard(permissions, function () {
      console.log('Dashboard Loaded');
    });
  });
});
