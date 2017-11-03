/* global controller */
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import option from './chartOption';
import { formatAbbreviation } from './utilities/numberFormat';

// create chart container
const chartContainer = document.createElement('div');
chartContainer.style.width = '100%';
chartContainer.style.height = '100%';
chartContainer.classList.add('chart-container');
controller.element.appendChild(chartContainer);

// create data accessors
const metricAccessor = controller.dataAccessors.Metric;

// initialize echarts instance
const chart = echarts.init(chartContainer);

// called when new data is received from server
controller.update = data => {
  const value = metricAccessor.raw(data[0]);
  const min = Math.ceil(value); // min value for the gauge's max angle
  const max = Math.floor(value * 5); // max value for the gauge's max angle

  // Set the gauge max to be between min and max values
  option.series[0].max = Math.floor(Math.random() * (max - min + 1)) + min;
  option.series[0].data[0] = metricAccessor.raw(data[0]);
  option.series[0].detail.formatter = value =>
    `{metricLabel|${metricAccessor.getLabel()}} {metricValue|${formatAbbreviation(
      value,
    )}}`;
  chart.setOption(option);
};

// called when the chart widget is resized
controller.resize = (newWidth, newHeight) => {
  chart.resize();
};

controller.createAxisLabel({
  picks: 'Metric',
  position: 'bottom',
  orientation: 'horizontal',
  title: 'Metric',
});
