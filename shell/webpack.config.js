const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const webpackConfig = require("../config/webpack.config");

module.exports = webpackConfig(3000, [
  new ModuleFederationPlugin({
    name: "shell",
    filename: "remoteEntry.js",
    remotes: {
      lol: "lol@http://localhost:3001/remoteEntry.js",
      tft: "tft@http://localhost:3002/remoteEntry.js",
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
