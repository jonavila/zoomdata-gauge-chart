# Zoomdata Gauge Chart
A Zoomdata Custom Chart built with [ECharts](https://github.com/ecomfe/echarts)

![2017-11-03_15-13-21](https://user-images.githubusercontent.com/5589281/32391829-e30cc9de-c0a9-11e7-9331-96514edd41a8.png)

### Prerequisites
You need to download and configure the zoomdata-chart-cli from npm
```
npm install zoomdata-chart-cli -g
zd-chart-cli config
# follow the prompts in the CLI to complete the configuration
```

### Usage

```bash
# Switch to the branch matching your Zoomdata server version and Download gauge.zip from the dist/ directory

# Add the custom chart to your Zoomdata server using the zoomdata-chart-cli
zd-chart add "Gauge" ~/Dowloads/gauge.zip

# Edit the Visibility of the newly added custom chart. When prompted, select Visibility and make sure the chart is enabled.
zd-chart edit "Gauge"

# Configure the Gauge chart on an existing source 

# Use it in a Zoomdata dashboard!
```

### Updating to a New Release
TBD


### Development

The chart's component files are built with [Webpack](https://webpack.js.org/)

**Prerequisites**: Node.js v6+, zoomdata-chart-cli

1. Follow the above usage instructions to add the chart to your Zoomdata server
1. `git clone` this repository.
1. `cd` into the cloned repo
1. `npm install` to install dependencies
1. `zd-chart watch` to watch the component files in the `components/` directory and upload them to the Zoomdata server
1. On another terminal window, `npm start` to build the development bundle or `npm run build` to build the production bundle

**Start coding!** `gauge.js` in th `src/` directory is your entry file.
