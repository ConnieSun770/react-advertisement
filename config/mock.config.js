const fs = require('fs');
const path = require('path');

function response(res, content, type = 'json') {
  res.type(type);
  res.write(content);
  res.end();
}

function mock(res, file) {
  fs.readFile(file, 'utf8', (err, content) => {
    if (err) {
      response(res, err.message, 'html');
    }
    response(res, content, 'json');
  });
}

const mockMiddleware = (config) => (req, res, next) => {
  const { projectDir, mockDir } = config;
  const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`);

  return fs.stat(filePath, (err) => {
    if (err) {
      next();
    } else {
      mock(res, filePath);
    }
  });
};

module.exports = mockMiddleware;
