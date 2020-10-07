const { writeFile } = require('fs');
require('dotenv').config();

const targetPath = `./.environment.ts`;
const environmentFileContent = `
export const environment = {
    CMS_STATIC_CONTENT_LOCATION:"${process.env.CMS_STATIC_CONTENT_LOCATION}",
    CMS_DYNAMIC_CONTENT_LOCATION:"${process.env.CMS_DYNAMIC_CONTENT_LOCATION}"
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});
