const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const webpackConfig = require("../config/webpack.config");

module.exports = webpackConfig(3001, [
  new ModuleFederationPlugin({
    name: "lol",
    filename: "remoteEntry.js",
    remotes: {
      shell: "shell@http://localhost:3000/remoteEntry.js",
    },
    exposes: {
      "./routes": "./src/routing/routes",
      "./store": "./src/store/store",
    },
    shared: {
      ...deps,
      react: {
        eager: true,
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        eager: true,
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      utils: {
        eager: false,
        singleton: true,
        requiredVersion: deps["utils"],
      },
    },
  }),
]);
