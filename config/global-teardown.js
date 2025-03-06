// const fs = require('fs');

// module.exports = async () => {
//     console.log('🔹 Cleaning up authentication state...');

//     ['auth-chromium.json', 'auth-firefox.json', 'auth-webkit.json'].forEach(file => {
//         if (fs.existsSync(file)) {
//             fs.unlinkSync(file);
//             console.log(`✅ Deleted ${file}`);
//         }
//     });

//     console.log('✅ All authentication states removed!');
// };